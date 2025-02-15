'use client'
import React from 'react';
import ProjectHeader from './ProjectHeader';
import Container from '@/components/shared/Container';
import Image from 'next/image';
import {motion, useScroll, useTransform } from 'framer-motion';

const ProjectSection = () => {
    const { scrollYProgress } = useScroll();
    console.log(scrollYProgress);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

    return (
        <div className='bg-dark text-white relative overflow-hidden'>
            <Container>
            <ProjectHeader/>
            </Container>
            <motion.div
            style={{rotate}}
                className='absolute -right-20 top-10'>
                <Image
                    src="/custom-svg/flower.svg"
                    width={750}
                    height={750}
                    alt='Flower SVG'
                    className='rotate-45'
                />
            </motion.div>
        </div>
    );
};

export default ProjectSection;