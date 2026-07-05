import { siteConfig } from "@/config/portfolio-data";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: siteConfig.name,

    url: siteConfig.url,

    image: `${siteConfig.url}${siteConfig.profileImage}`,

    jobTitle: "Full Stack Developer",

    description: siteConfig.description,

    email: siteConfig.links.email,

    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],

    address: {
      "@type": "PostalAddress",
      addressCountry: "Bangladesh",
    },

    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "MongoDB",
      "AI Automation",
      "OpenAI",
      "n8n",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}