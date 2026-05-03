import { useLocation } from "wouter";
import { useAuth, removeAuthToken } from "@/hooks/use-auth";
import { useLogout } from "@workspace/api-client-react";
import { useEffect } from "react";

export function Dashboard() {
  const [, setLocation] = useLocation();
  const { user, isLoading, isAuthenticated } = useAuth();
  const logoutMutation = useLogout();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation("/login");
    }
  }, [isLoading, isAuthenticated, setLocation]);

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSettled: () => {
        removeAuthToken();
        setLocation("/login");
      }
    });
  };

  if (isLoading) {
    return (
      <div className="container" style={{ padding: "80px 0", textAlign: "center" }}>
        Loading...
      </div>
    );
  }

  if (!user) return null;

  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1 style={{ marginBottom: 40 }}>Dashboard</h1>
          
          <div className="contact-card">
            <span className="label-mono" style={{ marginBottom: 16 }}><i className="pin"></i> Account Info</span>
            <h3 style={{ marginBottom: 24 }}>Welcome back</h3>
            
            <ul className="spec-list" style={{ marginBottom: 40 }}>
              <li>
                <span className="dot"></span>
                <div>
                  <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 4 }}>User ID</div>
                  <div style={{ fontFamily: "var(--font-mono)" }}>{user.id}</div>
                </div>
              </li>
              <li>
                <span className="dot"></span>
                <div>
                  <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 4 }}>Email</div>
                  <div>{user.email}</div>
                </div>
              </li>
            </ul>

            <button 
              onClick={handleLogout} 
              className="btn btn--secondary"
              disabled={logoutMutation.isPending}
              data-testid="button-logout"
            >
              {logoutMutation.isPending ? "Logging out..." : "Log out"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
