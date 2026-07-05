'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectGalleryProps {
  title: string;
  gallery: string[];
}

export default function ProjectGallery({
  title,
  gallery,
}: ProjectGalleryProps) {
  return (
    <section>

      <h2 className="mb-6 text-3xl font-bold">
        Project Gallery
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {gallery.map((image, index) => (

          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.25,
            }}
            className="group overflow-hidden rounded-2xl border"
          >

            <div className="relative aspect-video">

              <Image
                src={image}
                alt={`${title}-${index + 1}`}
                fill
                sizes="(max-width:768px)100vw,50vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}