import { Card } from '@/components/ui/Card';

export default function ContactAvailability() {
  return (
    <Card interactive={false} className="p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="size-3 shrink-0 animate-pulse rounded-full bg-emerald-500" />
        <h4 className="font-semibold">Available for New Projects</h4>
      </div>

      <p className="mt-3 leading-7 text-muted-foreground">
        Currently accepting freelance projects, remote full-time opportunities
        and AI automation collaborations.
      </p>
    </Card>
  );
}