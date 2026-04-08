import { useActor } from "@caffeineai/core-infrastructure";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { UserProfile } from "../types";

export function useAuth() {
  const { login, clear, isLoginSuccess, identity, loginStatus } =
    useInternetIdentity();
  const { actor, isFetching: actorFetching } = useActor(createActor);
  const queryClient = useQueryClient();

  const profileQuery = useQuery<UserProfile | null>({
    queryKey: ["currentUserProfile"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      const a = actor as unknown as {
        getCallerUserProfile: () => Promise<UserProfile | null>;
      };
      return a.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching && isLoginSuccess,
    retry: false,
  });

  const roleQuery = useQuery<string>({
    queryKey: ["userRole"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      const a = actor as unknown as {
        getCallerUserRole: () => Promise<{
          admin?: null;
          user?: null;
          guest?: null;
        }>;
      };
      const result = await a.getCallerUserRole();
      if ("admin" in result) return "admin";
      if ("user" in result) return "user";
      return "guest";
    },
    enabled: !!actor && !actorFetching && isLoginSuccess,
    retry: false,
  });

  const isAuthenticated = !!identity && isLoginSuccess;
  const isAdmin = roleQuery.data === "admin";
  const isUser = roleQuery.data === "user" || roleQuery.data === "admin";
  const userName = profileQuery.data?.name ?? null;
  const needsProfile =
    isLoginSuccess &&
    !profileQuery.isLoading &&
    profileQuery.isFetched &&
    profileQuery.data === null;

  const handleLogin = async () => {
    try {
      await login();
    } catch (err: unknown) {
      const error = err as Error;
      if (error?.message === "User is already authenticated") {
        await clear();
        setTimeout(() => login(), 300);
      }
    }
  };

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
  };

  const saveProfile = async (profile: UserProfile) => {
    if (!actor) return;
    const a = actor as unknown as {
      saveCallerUserProfile: (p: UserProfile) => Promise<void>;
    };
    await a.saveCallerUserProfile(profile);
    queryClient.invalidateQueries({ queryKey: ["currentUserProfile"] });
  };

  return {
    identity,
    isAuthenticated,
    isAdmin,
    isUser,
    loginStatus,
    isLoginSuccess,
    userName,
    needsProfile,
    profileLoading: actorFetching || profileQuery.isLoading,
    handleLogin,
    handleLogout,
    saveProfile,
  };
}
