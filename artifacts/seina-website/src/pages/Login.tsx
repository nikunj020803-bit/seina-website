import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLogin } from "@workspace/api-client-react";
import { setAuthToken } from "@/hooks/use-auth";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function Login() {
  const [, setLocation] = useLocation();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const loginMutation = useLogin();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginFormValues) {
    setLoginError(null);
    loginMutation.mutate(
      { data: values },
      {
        onSuccess: (data) => {
          // data.message contains the token
          setAuthToken(data.message);
          setIsSuccess(true);
          setTimeout(() => {
            setLocation("/dashboard");
          }, 1500);
        },
        onError: (err) => {
          setLoginError(err.data?.error || "Login failed");
        },
      }
    );
  }

  return (
    <main className="login-wrap" style={{ 
      minHeight: "calc(100vh - 72px)", 
      display: "grid", 
      placeItems: "center", 
      padding: "64px 24px",
      background: "radial-gradient(circle at 20% 10%, rgba(166,227,240,0.35) 0, transparent 40%), radial-gradient(circle at 80% 90%, rgba(191,235,95,0.30) 0, transparent 40%), var(--surface-50)"
    }}>
      <div className="login-card" style={{
        width: "100%",
        maxWidth: 440,
        background: "var(--surface-white)",
        border: "1px solid var(--line)",
        borderRadius: 14,
        padding: 40,
        boxShadow: "0 1px 0 rgba(0,0,0,0.02)"
      }}>
        <span className="label-mono" style={{ marginBottom: 18 }}><i className="pin"></i> Welcome back</span>
        <h1 style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>Log in to seina</h1>
        <p className="sub" style={{ color: "var(--ink-body)", marginBottom: 32, fontSize: 15 }}>Sign in with the email you registered with.</p>

        <form className="form" noValidate onSubmit={form.handleSubmit(onSubmit)} data-testid="form-login">
          <div className="form__field">
            <label htmlFor="email">Work email</label>
            <input 
              id="email" 
              type="email" 
              placeholder="jane@company.com" 
              autoComplete="email"
              {...form.register("email")}
              data-testid="input-login-email"
            />
            {form.formState.errors.email && (
              <span className="form__hint" style={{ color: "var(--accent-orange)" }}>{form.formState.errors.email.message}</span>
            )}
          </div>

          <div className="form__field">
            <label htmlFor="password">Password</label>
            <input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              autoComplete="current-password"
              {...form.register("password")}
              data-testid="input-login-password"
            />
            {form.formState.errors.password && (
              <span className="form__hint" style={{ color: "var(--accent-orange)" }}>{form.formState.errors.password.message}</span>
            )}
            <div className="login-meta" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "-8px 0 8px", fontSize: 13 }}>
              <span></span>
              <a href="#" style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--brand-blue)" }}>Forgot password?</a>
            </div>
          </div>

          {loginError && (
            <div className="form__hint" style={{ color: "var(--accent-orange)", marginTop: 8 }}>
              {loginError}
            </div>
          )}

          {isSuccess && (
            <div className="form__success is-shown" data-testid="msg-login-success">
              Authenticated. Redirecting to your workspace…
            </div>
          )}

          <button 
            type="submit" 
            className="btn btn--primary form__submit" 
            disabled={loginMutation.isPending || isSuccess}
            data-testid="button-login-submit"
          >
            {loginMutation.isPending ? "Signing in..." : <>Sign in <span className="arrow">→</span></>}
          </button>
        </form>

        <div className="login-foot" style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--line)", textAlign: "center", fontSize: 14, color: "var(--ink-body)" }}>
          New to seina? <Link href="/book-demo" style={{ color: "var(--ink-primary)", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3 }}>Request a demo</Link>
        </div>
      </div>
    </main>
  );
}
