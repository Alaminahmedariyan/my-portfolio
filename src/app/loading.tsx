import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">

      <div className="flex flex-col items-center">

        <div className="relative">

          <div className="border-primary/20 h-24 w-24 rounded-full border-4" />

          <Loader2 className="text-primary absolute inset-0 m-auto h-10 w-10 animate-spin" />

        </div>

        <h2 className="mt-8 text-3xl font-bold">
          Loading Portfolio
        </h2>

        <p className="text-muted-foreground mt-3">
          Preparing an awesome experience...
        </p>

      </div>

    </main>
  );
}