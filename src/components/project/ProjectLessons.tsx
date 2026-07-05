import { FadeIn } from "@/components/shared/FadeIn";

interface Props {
  lessons?: string[];
}

export default function ProjectLessons({
  lessons,
}: Props) {

  if (!lessons?.length) return null;

  return (
    <FadeIn delay={0.6}>

      <section>

        <h2 className="mb-5 text-3xl font-bold">
          Lessons Learned
        </h2>

        <div className="space-y-4">

          {lessons.map((lesson) => (

            <div
              key={lesson}
              className="rounded-2xl border bg-card p-6"
            >
              💡 {lesson}
            </div>

          ))}

        </div>

      </section>

    </FadeIn>
  );
}