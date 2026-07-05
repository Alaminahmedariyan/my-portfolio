import { FadeIn } from "@/components/shared/FadeIn";

interface Props {
  businessGoal?: string;
}

export default function ProjectBusinessGoal({
  businessGoal,
}: Props) {
  if (!businessGoal) return null;

  return (
    <FadeIn delay={0.35}>
      <section>

        <h2 className="mb-5 text-3xl font-bold">
          Business Goal
        </h2>

        <div className="rounded-2xl border bg-card p-8">

          <p className="leading-8 text-muted-foreground">
            {businessGoal}
          </p>

        </div>

      </section>
    </FadeIn>
  );
}