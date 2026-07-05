import { FadeIn } from "@/components/shared/FadeIn";

interface Props {
  future?: string[];
}

export default function ProjectFuture({
  future,
}: Props) {

  if (!future?.length) return null;

  return (
    <FadeIn delay={0.65}>

      <section>

        <h2 className="mb-5 text-3xl font-bold">
          Future Improvements
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          {future.map((item) => (

            <div
              key={item}
              className="rounded-2xl border p-6"
            >
              🚀 {item}
            </div>

          ))}

        </div>

      </section>

    </FadeIn>
  );
}