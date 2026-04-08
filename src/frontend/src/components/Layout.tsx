import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { Dumbbell, LogIn, LogOut, Menu, Shield, User, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const NAV_LINKS = [
  { label: "Gallery", href: "/gallery" as const },
  { label: "Book Session", href: "/booking" as const },
  { label: "Nutrition Hub", href: "/nutrition" as const },
  { label: "My Progress", href: "/progress" as const },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const {
    isAuthenticated,
    isAdmin,
    userName,
    handleLogin,
    handleLogout,
    profileLoading,
  } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            data-ocid="nav-brand"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-subtle group-hover:shadow-elevated transition-smooth">
              <Dumbbell
                size={18}
                className="text-primary-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="leading-tight">
              <span className="block font-display font-bold text-lg text-foreground tracking-tight leading-none">
                HYR
              </span>
              <span className="block font-body text-xs text-muted-foreground leading-none tracking-wider">
                WITH GARIMA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-body font-medium transition-smooth",
                  pathname === href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                )}
                data-ocid={`nav-link-${label.toLowerCase().replace(" ", "-")}`}
              >
                {label}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-body font-medium transition-smooth flex items-center gap-1.5",
                  pathname.startsWith("/admin")
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:text-accent hover:bg-accent/10",
                )}
                data-ocid="nav-link-admin"
              >
                <Shield size={14} aria-hidden="true" />
                Admin
              </Link>
            )}
          </nav>

          {/* Auth + Mobile Toggle */}
          <div className="flex items-center gap-2">
            {!profileLoading && isAuthenticated && (
              <div className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-lg">
                  <User size={14} className="text-primary" aria-hidden="true" />
                  <span className="text-sm font-body text-foreground max-w-[120px] truncate">
                    {userName ?? "Member"}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-muted-foreground hover:text-foreground gap-1.5"
                  data-ocid="btn-logout"
                >
                  <LogOut size={14} aria-hidden="true" />
                  Logout
                </Button>
              </div>
            )}
            {!profileLoading && !isAuthenticated && (
              <Button
                variant="default"
                size="sm"
                onClick={handleLogin}
                className="hidden md:flex gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
                data-ocid="btn-login"
              >
                <LogIn size={14} aria-hidden="true" />
                Member Login
              </Button>
            )}

            {/* Mobile toggle */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth text-foreground"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              data-ocid="nav-mobile-toggle"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card px-4 pb-4 pt-2 animate-slide-up">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-3 py-2.5 rounded-lg text-sm font-body font-medium transition-smooth",
                    pathname === href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                  )}
                >
                  {label}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-body font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 transition-smooth flex items-center gap-2"
                >
                  <Shield size={14} aria-hidden="true" />
                  Admin Dashboard
                </Link>
              )}
              <div className="pt-2 border-t border-border mt-1">
                {isAuthenticated ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      handleLogout();
                      setMobileOpen(false);
                    }}
                    className="w-full justify-start gap-2 text-muted-foreground"
                    data-ocid="btn-logout-mobile"
                  >
                    <LogOut size={14} aria-hidden="true" />
                    Logout ({userName ?? "Member"})
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => {
                      handleLogin();
                      setMobileOpen(false);
                    }}
                    className="w-full bg-primary text-primary-foreground"
                    data-ocid="btn-login-mobile"
                  >
                    <LogIn size={14} className="mr-2" aria-hidden="true" />
                    Member Login
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-background">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Dumbbell
                  size={16}
                  className="text-primary"
                  aria-hidden="true"
                />
              </div>
              <div>
                <span className="font-display font-bold text-foreground">
                  HYR with Garima
                </span>
                <p className="text-xs text-muted-foreground">
                  Fitness &amp; Body Transformation Studio
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              &copy; {new Date().getFullYear()}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
