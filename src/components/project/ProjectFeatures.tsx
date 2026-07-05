import { FadeIn } from "@/components/shared/FadeIn";

interface Props {
  features?: string[];
}

export default function ProjectFeatures({
  features,
}: Props) {

  if (!features?.length) return null;

  return (
    <FadeIn delay={0.4}>
      <section>

        <h2 className="mb-6 text-3xl font-bold">
          Core Features
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          {features.map((feature) => (

            <div
              key={feature}
              className="rounded-2xl border p-6 transition hover:shadow-lg"
            >
              ✓ {feature}
            </div>

          ))}

        </div>

      </section>
    </FadeIn>
  );
}