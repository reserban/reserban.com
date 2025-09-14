import { BrevoForm } from "@/lib/brevo-form";

export const NewsletterSection = () => {
  return (
    <section>
      <div className="border border-border bg-card p-4 md:p-6 text-center">
        <h3 className="mb-3 text-2xl font-semibold">
          Want to stay updated?
        </h3>
        <p className="text-muted-foreground -mb-4 md:mb-0">
          Get notified when I publish new thoughts.
        </p>
        <BrevoForm />
      </div>
    </section>
  );
};
