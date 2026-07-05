import Link from "next/link";

import { FadeIn } from "@/components/shared/FadeIn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProjectCTA() {
  return (
    <FadeIn delay={0.75}>
      <section className="rounded-3xl border bg-gradient-to-r from-primary to-secondary p-12 text-center">

        <h2 className="text-4xl font-bold text-white">
          Interested in working together?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
          I am available for freelance projects, remote opportunities,
          and AI-powered Full Stack development work.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            href="/#contact"
            className={cn(
              buttonVariants({
                variant: "secondary",
              })
            )}
          >
            Contact Me
          </Link>

          <Link
            href="/#projects"
            className={cn(
              buttonVariants({
                variant: "outline",
              })
            )}
          >
            More Projects
          </Link>

        </div>

      </section>
    </FadeIn>
  );
}