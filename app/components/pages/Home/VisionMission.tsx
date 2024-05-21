"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "../../ui/glowing-stars";

export default function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="w-screen py-16 px-10 sm:px-0 flex flex-col md:flex-row items-center justify-center antialiased space-x-0 md:space-x-4 md:gap-8 space-y-4 md:space-y-0">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Our Vision</GlowingStarsTitle>
        <div className="flex justify-between items-end ">
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
