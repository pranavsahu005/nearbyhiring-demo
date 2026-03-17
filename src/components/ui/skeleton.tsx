import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-slate-200/60", className)} {...props} />;
}

const JobCardSkeleton = () => {
  return (
    <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/50 shadow-sm space-y-6 relative overflow-hidden h-full">
      <div className="flex items-start gap-4 mb-6">
        <Skeleton className="h-16 w-16 rounded-[1.5rem]" />
        <div className="flex-1 space-y-3 pt-2">
          <Skeleton className="h-5 w-3/4 rounded-lg" />
          <Skeleton className="h-3 w-1/2 rounded-md" />
        </div>
      </div>

      <div className="flex gap-2">
        <Skeleton className="h-5 w-16 rounded-full" />
        <Skeleton className="h-5 w-20 rounded-full" />
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-white/20 mt-auto">
        <Skeleton className="h-4 w-32 rounded-md" />
        <Skeleton className="h-4 w-24 rounded-md" />
      </div>
    </div>
  );
};

export { Skeleton, JobCardSkeleton };
