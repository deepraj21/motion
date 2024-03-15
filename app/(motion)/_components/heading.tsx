"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";
import { Poppins } from "next/font/google";


import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <span className="underline text-3xl sm:text-5xl md:text-8xl font-bold">
        Motion
      </span>
      <br />
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Organize, Collaborate, Create, Your Digital Notebook.
      </h2>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Unlock Productivity with Motion: Where Your Thoughts Find Momentum. 📈✨
      </h3>
    </div>
  );
}