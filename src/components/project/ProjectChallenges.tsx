import { FadeIn } from "@/components/shared/FadeIn";

interface Props {
  challenges?: string[];
}

export default function ProjectChallenges({
  challenges,
}: Props) {

  if (!challenges?.length) return null;

  return (
    <FadeIn delay={0.55}>

      <section>

        <h2 className="mb-5 text-3xl font-bold">
          Challenges
        </h2>

        <div className="space-y-4">

          {challenges.map((item) => (

            <div
              key={item}
              className="rounded-2xl border p-6"
            >
              {item}
            </div>

          ))}

        </div>

      </section>

    </FadeIn>
  );
}