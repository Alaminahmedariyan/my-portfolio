import { FadeIn } from "@/components/shared/FadeIn";

interface Props {
  description?: string;
}

export default function ProjectOverview({
  description,
}: Props) {
  if (!description) return null;

  return (
    <FadeIn delay={0.2}>
      <section>

        <h2 className="mb-5 text-3xl font-bold">
          Project Overview
        </h2>

        <p className="max-w-4xl leading-8 text-muted-foreground">
          {description}
        </p>

      </section>
    </FadeIn>
  );
}