'use client'
import SectionHeaderTag from '@/components/SectionHeaderTag';
import HighlightButton from '@/components/shared/common/HighlightButton';
import React from 'react';
import FlowerSVG from './FlowerSVG';
import Image from 'next/image';

const ProjectHeader = () => {
    return (
      <div className="py-20">
        <div>
          <SectionHeaderTag title="{01} - Featured Projects" />
          <div className="space-y-10">
            <h2 className="text-[50px] w-1/2 leading-tight">
              I craft seamless digital experiences with problem-solving and tech
              expertise.
            </h2>
            <HighlightButton isGlowing={true}>About more</HighlightButton>
          </div>
        </div>
      </div>
    );
};

export default ProjectHeader;