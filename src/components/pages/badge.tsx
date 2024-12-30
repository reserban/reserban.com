"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const BadgeComponent = () => {
  return (
    <div className="fixed bottom-3 sm:bottom-4 right-2 sm:right-4">
      <Link
        href="https://github.com/unzetnow/create-unzet-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Badge variant="secondary" className="py-2 shadow-sm">
          Built with CUA 1.0.1
        </Badge>
      </Link>
    </div>
  );
};

export default BadgeComponent;
