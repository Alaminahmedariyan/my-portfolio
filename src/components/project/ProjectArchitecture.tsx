import { FadeIn } from "@/components/shared/FadeIn";

interface Props {
  architecture?: string;
}

export default function ProjectArchitecture({
  architecture,
}: Props) {

  if (!architecture) return null;

  return (
    <FadeIn delay={0.5}>

      <section>

        <h2 className="mb-5 text-3xl font-bold">
          System Architecture
        </h2>

        <div className="rounded-2xl border bg-muted/40 p-8 overflow-x-auto">

          <pre className="whitespace-pre-wrap text-sm leading-7">

            {architecture}

          </pre>

        </div>

      </section>

    </FadeIn>
  );
}