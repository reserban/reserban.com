import { BrevoForm } from "@/lib/brevo-form";

export const NewsletterSection = () => {
  return (
    <section>
      <div className="mb-6 md:mb-8">
        <h2 className="text-xl font-semibold">In Inbox</h2>
      </div>
      <div className="rounded-sm border border-border bg-card p-6 md:p-8 text-center">
        <h3 className="mb-3 mt-4 md:mt-2 text-2xl font-semibold">
          Want to stay updated?
        </h3>
        <p className="text-muted-foreground md:mb-2">
          Get notified when I publish new thoughts on productivity, entrepreneurship, and innovation.
        </p>
        <BrevoForm />
      </div>
    </section>
  );
};
