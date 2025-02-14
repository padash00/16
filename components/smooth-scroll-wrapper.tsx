"use client";

import { ReactNode } from 'react';
import { useSmoothScroll } from '../hooks/use-smooth-scroll';

export default function SmoothScrollWrapper({ children }: { children: ReactNode }) {
  useSmoothScroll();
  return <>{children}</>;
}