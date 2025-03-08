'use client'
import SectionHeaderTag from '@/components/SectionHeaderTag';
import HighlightButton from '@/components/shared/common/HighlightButton';
import React from 'react';
import Link from "next/link";

const ProjectHeader = () => {
  return (
    <div className="py-20">
      <div>
        <SectionHeaderTag title="{01} - Featured Projects" />
        <div className="space-y-10">
          <h2 className="text-[40px] lg:text-[50px] w-3/2 lg:1/2 leading-tight">
            I craft seamless digital experiences with problem-solving and tech
            expertise.
          </h2>
          <Link href="/about-and-contact">
            <HighlightButton isGlowing={true} animationType="fadeUpLow">
              About more
            </HighlightButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;