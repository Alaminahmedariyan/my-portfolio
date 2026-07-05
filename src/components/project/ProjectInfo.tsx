import { FadeIn } from "@/components/shared/FadeIn";

interface Props {
  category: string;
  status: string;
  role?: string;
  duration?: string;
}

export default function ProjectInfo({
  category,
  status,
  role,
  duration,
}: Props) {
  return (
    <FadeIn delay={0.25}>
      <section>

        <h2 className="mb-6 text-3xl font-bold">
          Project Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <InfoCard
            title="Category"
            value={category}
          />

          <InfoCard
            title="Status"
            value={status}
          />

          <InfoCard
            title="Role"
            value={role ?? "Full Stack Developer"}
          />

          <InfoCard
            title="Duration"
            value={duration ?? "3 Weeks"}
          />

        </div>

      </section>
    </FadeIn>
  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border p-6">

      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-semibold">
        {value}
      </h3>

    </div>
  );
}