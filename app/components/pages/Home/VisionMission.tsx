"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../../ui/glowing-stars";

export default function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="w-screen py-20 px-10 sm:px-0 flex flex-col md:flex-row items-center justify-center antialiased space-x-0 md:space-x-4 space-y-4 md:space-y-0">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Our Vision</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            Leading in the fields of fisheries locally.
          </GlowingStarsDescription>
        </div>
      </GlowingStarsBackgroundCard>
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Our Mission</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            To develop fisheries, empower fishermen, and enhance partnerships to
            achieve sustainable food security and economic growth.
          </GlowingStarsDescription>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
