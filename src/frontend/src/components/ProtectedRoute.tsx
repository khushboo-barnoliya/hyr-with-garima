import { useRouter } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { PageLoading } from "./LoadingSpinner";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export function ProtectedRoute({
  children,
  requireAdmin = false,
}: ProtectedRouteProps) {
  const { isAuthenticated, isAdmin, profileLoading, isLoginSuccess } =
    useAuth();
  const router = useRouter();

  // While actor/profile is loading, show spinner
  if (profileLoading) {
    return <PageLoading label="Authenticating..." />;
  }

  // Not logged in — redirect to home
  if (!isAuthenticated || !isLoginSuccess) {
    void router.navigate({ to: "/" });
    return <PageLoading label="Redirecting..." />;
  }

  // Requires admin but user isn't admin
  if (requireAdmin && !isAdmin) {
    void router.navigate({ to: "/" });
    return <PageLoading label="Redirecting..." />;
  }

  return <>{children}</>;
}
