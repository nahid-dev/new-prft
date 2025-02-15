import { cn } from '@/lib/utils';
import React from 'react';

const SectionHeaderTag = ({title, className}) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <div className='bg-highlight rounded-full size-[10px]' style={{boxShadow: "0 2px 13px #82ff1f80"}}/>
            <p className='text-sm font-semibold text-gray-400'>{ title}</p>
        </div>
    );
};

export default SectionHeaderTag;