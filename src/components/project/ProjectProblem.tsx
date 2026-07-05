import { FadeIn } from "@/components/shared/FadeIn";

interface Props {
  problem?: string;
}

export default function ProjectProblem({
  problem,
}: Props) {
  if (!problem) return null;

  return (
    <FadeIn delay={0.3}>
      <section>

        <h2 className="mb-5 text-3xl font-bold">
          Problem Statement
        </h2>

        <div className="rounded-2xl border bg-card p-8">

          <p className="leading-8 text-muted-foreground">
            {problem}
          </p>

        </div>

      </section>
    </FadeIn>
  );
}