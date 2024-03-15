"use client";
import React from "react";
import { cn } from "../../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};


export function Features() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-6 z-50">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold pb-10">
          <span>🚀 Key Features:</span>
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
export const projects = [
  {
    title: "Google Auth Sign In 🌐",
    description:
      "Securely log in with your Google account for a seamless and trusted experience.",
    link: "",
  },
  {
    title: "Create Unlimited Pages 📚",
    description:
      "Craft as many pages as you need, each tailored to your unique topics or projects.",
    link: "",
  },
  {
    title: "Customizable Title and Cover Pages 🖋️",
    description:
      "Personalize your pages with titles and vibrant cover pages to enhance visual organization.",
    link: "",
  },
  {
    title: "Nested Pages for Hierarchical Structure 📊",
    description:
      "Establish a structured hierarchy by adding nested pages under main sections, ensuring an organized workflow.",
    link: "",
  },
  {
    title: "Intelligent Search Functionality 🔍",
    description:
      "Quickly locate specific information with a robust search feature for efficient navigation.",
    link: "",
  },
  {
    title: "Theme Change (Light and Dark) 🌓",
    description:
      "Tailor your experience with theme options, seamlessly transitioning between light and dark modes.",
    link: "",
  },
  {
    title: "File Upload Capability 🔗",
    description:
      "Attach relevant files to your notes, creating a comprehensive and centralized information hub.",
    link: "",
  },
  {
    title: "Markdown Commands (/) for Header Levels 📝",
    description:
      "Utilize Markdown commands to format text with headers (H1, H2, etc.) for clear and structured content.",
    link: "",
  },
  {
    title: "User-Friendly Interface 🤝",
    description:
      "Intuitive design and easy-to-navigate interface ensure a user-friendly experience for all.",
    link: "",
  },
  {
    title: "Real-time Database Sync 🔄",
    description:
      "Experience seamless collaboration and updates with real-time synchronization across devices.",
    link: "",
  },
  {
    title: "Publish Notes to the Web 🌐",
    description:
      "Share your insights and knowledge by easily publishing selected notes to the web for broader accessibility.",
    link: "",
  },
  {
    title: "Page Deletion and Recovery from Trash 🗑️",
    description:
      "Maintain control over your content by securely deleting pages and having the ability to recover them from the trash.",
    link: "",
  },
];

