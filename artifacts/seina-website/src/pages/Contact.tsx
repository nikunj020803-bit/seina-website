import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateContactMessage } from "@workspace/api-client-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const contactSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  subject: z.enum(["general", "partnership", "demo", "support"], { required_error: "Please select a subject" }),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const createContactMessageMutation = useCreateContactMessage();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      full_name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    createContactMessageMutation.mutate(
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
            <span className="tag">Get in Touch</span>
          </div>
          <h1>Let's start a conversation.</h1>
          <p className="lede">
            Whether you have questions, want to explore a partnership, or are ready to see <b>seina in action</b> — we're here.
          </p>
        </ScrollReveal>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div className="contact-grid">
              {/* INFO CARD */}
              <aside className="contact-card contact-card--info">
                <span className="label-mono"><i className="pin"></i> Direct Line</span>
                <h3>Prefer to reach us directly?</h3>
                <p className="lead">Send us an email — your message lands straight in our inbox, no form required.</p>

                <div className="email-row">
                  <span className="ico">
                    <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                  </span>
                  <span className="meta">
                    <span>Email</span>
                    <a href="mailto:support@seina.in" data-testid="link-contact-email">support@seina.in</a>
                  </span>
                </div>

                <div className="response">We typically respond within 48 hours</div>
              </aside>

              {/* FORM CARD */}
              <div className="contact-card">
                <span className="label-mono"><i className="pin"></i> Message Form</span>
                <h3 style={{ marginBottom: 24 }}>Send us a message</h3>

                <form className="form" noValidate onSubmit={form.handleSubmit(onSubmit)} data-testid="form-contact">
                  <div className="form__field">
                    <label htmlFor="full_name">Full Name <span className="req">*</span></label>
                    <input 
                      id="full_name" 
                      type="text" 
                      placeholder="Jane Doe" 
                      {...form.register("full_name")}
                      data-testid="input-contact-name"
                    />
                    {form.formState.errors.full_name && (
                      <span className="form__hint" style={{ color: "var(--accent-orange)" }}>{form.formState.errors.full_name.message}</span>
                    )}
                  </div>

                  <div className="form__field">
                    <label htmlFor="email">Work Email <span className="req">*</span></label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="jane@company.com" 
                      {...form.register("email")}
                      data-testid="input-contact-email"
                    />
                    {form.formState.errors.email && (
                      <span className="form__hint" style={{ color: "var(--accent-orange)" }}>{form.formState.errors.email.message}</span>
                    )}
                  </div>

                  <div className="form__field">
                    <label htmlFor="subject">Subject <span className="req">*</span></label>
                    <select id="subject" {...form.register("subject")} data-testid="select-contact-subject">
                      <option value="" disabled>Choose one</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="demo">Demo Request</option>
                      <option value="support">Support</option>
                    </select>
                    {form.formState.errors.subject && (
                      <span className="form__hint" style={{ color: "var(--accent-orange)" }}>{form.formState.errors.subject.message}</span>
                    )}
                  </div>

                  <div className="form__field">
                    <label htmlFor="message">Message <span className="req">*</span></label>
                    <textarea id="message" placeholder="Tell us how we can help" {...form.register("message")} data-testid="input-contact-message"></textarea>
                    {form.formState.errors.message && (
                      <span className="form__hint" style={{ color: "var(--accent-orange)" }}>{form.formState.errors.message.message}</span>
                    )}
                  </div>

                  {isSuccess && (
                    <div className="form__success is-shown" data-testid="msg-contact-success">
                      Thanks — your message is on its way. We'll reply within 48 hours.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn--primary form__submit"
                    disabled={createContactMessageMutation.isPending || isSuccess}
                    data-testid="button-contact-submit"
                  >
                    {isSuccess ? "Sent ✓" : createContactMessageMutation.isPending ? "Sending..." : <>Send Message <span className="arrow">→</span></>}
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
