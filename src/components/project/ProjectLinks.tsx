import Link from "next/link";

import { FadeIn } from "@/components/shared/FadeIn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectLinks({
  liveUrl,
  githubUrl,
}: Props) {
  return (
    <FadeIn delay={0.7}>
      <section>

        <h2 className="mb-6 text-3xl font-bold">
          Project Links
        </h2>

        <div className="flex flex-wrap gap-4">

          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "default",
                })
              )}
            >
              🚀 Live Demo
            </Link>
          )}

          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "outline",
                })
              )}
            >
              💻 GitHub Repository
            </Link>
          )}

          <Link
            href="/#projects"
            className={cn(
              buttonVariants({
                variant: "secondary",
              })
            )}
          >
            ← Back to Projects
          </Link>

        </div>

      </section>
    </FadeIn>
  );
}