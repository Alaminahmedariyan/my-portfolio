import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/FadeIn";

interface Props {
  techStack?: string[];
}

export default function ProjectTechStack({
  techStack,
}: Props) {

  if (!techStack?.length) return null;

  return (
    <FadeIn delay={0.45}>

      <section>

        <h2 className="mb-5 text-3xl font-bold">
          Technology Stack
        </h2>

        <div className="flex flex-wrap gap-3">

          {techStack.map((tech) => (

            <Badge
              key={tech}
              variant="secondary"
              className="px-4 py-2"
            >
              {tech}
            </Badge>

          ))}

        </div>

      </section>

    </FadeIn>
  );
}