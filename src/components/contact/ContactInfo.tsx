"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/portfolio-data";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Heading */}

      <div>
        <h2 className="text-4xl font-bold">
          Let us Build Something Amazing
        </h2>

        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          I am currently available for freelance work, full-time
          opportunities, AI automation projects and modern Full Stack
          applications.

          If you have an idea, let us discuss it.
        </p>
      </div>

      {/* Cards */}

      <div className="space-y-5">

        <Link
          href={`mailto:${siteConfig.links.email}`}
          className="group flex items-center gap-5 rounded-2xl border p-5 transition-all hover:border-primary hover:shadow-lg"
        >
          <div className="rounded-xl bg-primary/10 p-3 text-primary">
            <Mail size={24} />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Email
            </p>

            <h3 className="font-semibold">
              {siteConfig.links.email}
            </h3>
          </div>
        </Link>

        <Link
          href={siteConfig.links.github}
          target="_blank"
          className="group flex items-center gap-5 rounded-2xl border p-5 transition-all hover:border-primary hover:shadow-lg"
        >
          <div className="rounded-xl bg-primary/10 p-3 text-primary">
            <Github size={24} />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              GitHub
            </p>

            <h3 className="font-semibold">
              github.com/alaminahmed
            </h3>
          </div>
        </Link>

        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          className="group flex items-center gap-5 rounded-2xl border p-5 transition-all hover:border-primary hover:shadow-lg"
        >
          <div className="rounded-xl bg-primary/10 p-3 text-primary">
            <Linkedin size={24} />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              LinkedIn
            </p>

            <h3 className="font-semibold">
              linkedin.com/in/alaminahmed
            </h3>
          </div>
        </Link>

        <div className="flex items-center gap-5 rounded-2xl border p-5">
          <div className="rounded-xl bg-primary/10 p-3 text-primary">
            <MapPin size={24} />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Location
            </p>

            <h3 className="font-semibold">
              {siteConfig.location}
            </h3>
          </div>
        </div>

      </div>

      {/* Availability */}

      <div className="rounded-3xl border bg-primary/5 p-6">

        <div className="flex items-center gap-3">

          <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

          <h3 className="font-semibold">
            Available for New Projects
          </h3>

        </div>

        <p className="mt-3 leading-7 text-muted-foreground">
          Currently accepting freelance projects, remote full-time
          opportunities and AI automation collaborations.
        </p>

      </div>
    </motion.div>
  );
}