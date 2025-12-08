import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  key?: string;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return <div className="animate-fade-in">{children}</div>;
}
