
"use client"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import AICapabilitiesSection from "@/components/ai-capabilities-section"
import DemoPreviewSection from "@/components/demo-preview-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import React from 'react'
import Card from '@/components/Card'
import Image from 'next/image'
import Link from 'next/link'


const flashcard = [
    {
        topic: "Data Structure and Algorithms",
        desc: "Data Structure and Algorithms",
        img: "/dsa.png",
        route: "/topics/dsa"
    },
    {
        topic: "Frontend Development",
        desc: "Frontend Development",
        img: "/webdev.svg",
        route: "/topics/frontenddev"
    },
    {
        topic: "Backend Development",
        desc: "Backend Development",
        img: "/backenddev.png",
        route: "/topics/backenddev"
    },
    {
        topic: "Object Oriented Programming System",
        desc: "Object Oriented Programming System",
        img: "/oops.png",
        route: "/topics/oops"
    },
    {
        topic: "System Design",
        desc: "System Design",
        img: "/systemdesign.png",
        route: "/topics/systemdesign"
    },
    {
        topic: "Operating System",
        desc: "Operating System",
        img: "/os.png",
        route: "/topics/os"
    },
    {
        topic: "Database Management System",
        desc: "Database Management System",
        img: "/dbms.png",
        route: "/topics/dbms"
    }
]

const links = [
    { path: '/', label: 'Home', current: true },
    { path: '/about', label: 'About', current: false },
    { path: '/contact', label: 'Contact', current: false },
    { path: '/mindmap', label: "Mind Map", current: false}
];


export default function Home() {
  return (
    <div className="bg-gradient-to-b from-background via-background to-background min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AICapabilitiesSection />
      {/* <DemoPreviewSection /> */}
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  )
}
