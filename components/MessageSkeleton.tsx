"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function MessageSkeleton() {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] space-y-2">
        <Skeleton className="h-4 w-48 bg-white/20" />
        <Skeleton className="h-4 w-64 bg-white/20" />
        <Skeleton className="h-4 w-32 bg-white/20" />
      </div>
    </div>
  );
}
