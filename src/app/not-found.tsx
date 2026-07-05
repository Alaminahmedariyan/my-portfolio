import Link from "next/link";
import { SearchX } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-2xl text-center">

        <div className="mb-8 flex justify-center">
          <div className="bg-primary/10 rounded-full p-8">
            <SearchX className="text-primary h-20 w-20" />
          </div>
        </div>

        <h1 className="text-6xl font-bold">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="text-muted-foreground mx-auto mt-5 max-w-xl leading-8">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: "default",
              })
            )}
          >
            Go Home
          </Link>

          <Link
            href="/#projects"
            className={cn(
              buttonVariants({
                variant: "outline",
              })
            )}
          >
            View Projects
          </Link>

        </div>

      </div>
    </main>
  );
}