import React from 'react'
import dynamic from 'next/dynamic';
const AboutHome = dynamic(() => import('../Components/AboutHome'));
const Slider = dynamic(() => import('../Components/Slider'));
const Services = dynamic(() => import('../Components/Services'));
const Pricing = dynamic(() => import('../Components/Pricing'));
const LatestBlog = dynamic(() => import('../Components/LatestBlog'));
export default function HomePageCollection() {
  return (
    <>
    <Slider/>
    <AboutHome/>
    <Services/>
    <Pricing/>
    <LatestBlog/>
    </>

  )
}
