import Image from "next/image";

import { FadeIn } from "@/components/shared/FadeIn";

interface ProjectCoverProps {
  title: string;
  image: string;
}

export default function ProjectCover({
  title,
  image,
}: ProjectCoverProps) {
  return (
    <FadeIn delay={0.1}>
      <section className="mt-10">

        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border shadow-xl">

          <Image
            src={image}
            alt={title}
            fill
            priority
             sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition duration-500 hover:scale-105"
          />

        </div>

      </section>
    </FadeIn>
  );
}