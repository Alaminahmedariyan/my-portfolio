import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/FadeIn";

interface Props {
  title: string;
  subtitle?: string;
  category: string;
  status: string;
  featured: boolean;
}

export default function ProjectHero({
  title,
  subtitle,
  category,
  status,
  featured,
}: Props) {
  return (
    <FadeIn>
      <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-secondary via-primary/90 to-primary p-14 text-white">

        <Badge className="mb-5 bg-white/20 text-white backdrop-blur">
          {category}
        </Badge>

        <h1 className="text-5xl font-bold">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 max-w-3xl text-lg text-white/90">
            {subtitle}
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-3">

          <Badge variant="secondary">
            {status}
          </Badge>

          {featured && (
            <Badge>
              Featured Project
            </Badge>
          )}

        </div>

      </div>
    </FadeIn>
  );
}