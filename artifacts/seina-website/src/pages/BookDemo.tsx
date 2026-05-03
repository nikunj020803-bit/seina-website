import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateDemoRequest } from "@workspace/api-client-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const demoSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  role: z.enum(["agency", "b2b-brand", "solo-marketer", "other"], { required_error: "Please select a role" }),
  team_size: z.enum(["just-me", "2-5", "6-15", "16-50", "51+"], { required_error: "Please select a team size" }),
  demo_focus: z.string().optional(),
  timeslot: z.string().optional()
});

type DemoFormValues = z.infer<typeof demoSchema>;

export function BookDemo() {
  const [isSuccess, setIsSuccess] = useState(false);
  const createDemoRequestMutation = useCreateDemoRequest();

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      full_name: "",
      email: "",
      company: "",
      demo_focus: "",
      timeslot: "",
    },
  });

  function onSubmit(values: DemoFormValues) {
    createDemoRequestMutation.mutate(
      { data: values },
      {
        onSuccess: () => {
          setIsSuccess(true);
        },
      }
    );
  }

  return (
    <>
      <header className="hero container">
        <ScrollReveal>
          <div className="hero__badges">
            <span className="tag">Book a Demo</span>
          </div>
          <h1>See seina in action.</h1>
        </ScrollReveal>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
              <div className="contact-card">
                <span className="label-mono"><i className="pin"></i> Demo Request</span>
                <h3 style={{ marginBottom: 24 }}>Tell us a bit about you</h3>

                <form className="form" noValidate onSubmit={form.handleSubmit(onSubmit)} data-testid="form-book-demo">
                  <div className="form__field">
                    <label htmlFor="full_name">Full name <span className="req">*</span></label>
                    <input 
                      id="full_name" 
                      type="text" 
                      placeholder="Jane Doe" 
                      {...form.register("full_name")}
                      data-testid="input-demo-name"
                    />
                    {form.formState.errors.full_name && (
                      <span className="form__hint" style={{ color: "var(--accent-orange)" }}>{form.formState.errors.full_name.message}</span>
                    )}
                  </div>

                  <div className="form__field">
                    <label htmlFor="email">Work email <span className="req">*</span></label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="jane@company.com" 
                      {...form.register("email")}
                      data-testid="input-demo-email"
                    />
                    {form.formState.errors.email && (
                      <span className="form__hint" style={{ color: "var(--accent-orange)" }}>{form.formState.errors.email.message}</span>
                    )}
                  </div>

                  <div className="form__field">
                    <label htmlFor="company">Company or agency name <span className="req">*</span></label>
                    <input 
                      id="company" 
                      type="text" 
                      placeholder="Acme Inc." 
                      {...form.register("company")}
                      data-testid="input-demo-company"
                    />
                    {form.formState.errors.company && (
                      <span className="form__hint" style={{ color: "var(--accent-orange)" }}>{form.formState.errors.company.message}</span>
                    )}
                  </div>

                  <div className="form__field">
                    <label>You are <span className="req">*</span></label>
                    <div className="form__radios">
                      <label><input type="radio" value="agency" {...form.register("role")} data-testid="radio-demo-role-agency" /> Agency</label>
                      <label><input type="radio" value="b2b-brand" {...form.register("role")} /> B2B brand</label>
                      <label><input type="radio" value="solo-marketer" {...form.register("role")} /> Solo marketer</label>
                      <label><input type="radio" value="other" {...form.register("role")} /> Other</label>
                    </div>
                    {form.formState.errors.role && (
                      <span className="form__hint" style={{ color: "var(--accent-orange)" }}>{form.formState.errors.role.message}</span>
                    )}
                  </div>

                  <div className="form__field">
                    <label htmlFor="team_size">Team size <span className="req">*</span></label>
                    <select id="team_size" {...form.register("team_size")} data-testid="select-demo-teamsize">
                      <option value="" disabled>Choose one</option>
                      <option value="just-me">Just me</option>
                      <option value="2-5">2–5</option>
                      <option value="6-15">6–15</option>
                      <option value="16-50">16–50</option>
                      <option value="51+">51+</option>
                    </select>
                    {form.formState.errors.team_size && (
                      <span className="form__hint" style={{ color: "var(--accent-orange)" }}>{form.formState.errors.team_size.message}</span>
                    )}
                  </div>

                  <div className="form__field">
                    <label htmlFor="demo_focus">What would you like to see in the demo?</label>
                    <textarea id="demo_focus" placeholder="Write anything." {...form.register("demo_focus")} data-testid="input-demo-focus"></textarea>
                  </div>

                  <div className="form__field">
                    <label htmlFor="timeslot">Preferred timeslot window</label>
                    <input id="timeslot" type="text" placeholder='e.g. "weekday mornings IST"' {...form.register("timeslot")} data-testid="input-demo-timeslot" />
                  </div>

                  {isSuccess && (
                    <div className="form__success is-shown" data-testid="msg-demo-success">
                      Thanks — your demo request is in. We'll reply within 24 hours to lock a time.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn--primary form__submit"
                    disabled={createDemoRequestMutation.isPending || isSuccess}
                    data-testid="button-demo-submit"
                  >
                    {isSuccess ? "Request received ✓" : createDemoRequestMutation.isPending ? "Submitting..." : <>Request a Demo <span className="arrow">→</span></>}
                  </button>

                  <div className="form__disclaimer">
                    By requesting a demo, you agree to our <a href="/privacy-policy">Privacy Policy</a>. We never share your data.
                  </div>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
