'use client'

import React from 'react'
import Tnav from '@/components/Tnav'
import Tpage from '@/components/Tpage';

const topics = {
  "Easy": [
    "HTML Basics",
    "CSS Basics",
    "JavaScript Basics",
    "Forms and Inputs",
    "Box Model",
    "Responsive Design with Media Queries"
  ],
  "Easy to Medium": [
    "CSS Flexbox",
    "CSS Grid",
    "DOM Manipulation",
    "JavaScript Events",
    "Basic Git & GitHub",
    "Intro to Bootstrap/Tailwind"
  ],
  "Medium": [
    "ES6+ Features (let/const, arrow functions, etc.)",
    "API Fetching (REST APIs)",
    "Single Page Applications (SPA)",
    "React Basics (useState, props)",
    "Routing in React (React Router)",
    "Component-based Architecture"
  ],
  "Medium to Hard": [
    "State Management (Context API, Redux)",
    "Authentication & Authorization",
    "Next.js Basics (Routing, SSR)",
    "Form Validation",
    "Reusable Components",
    "Dark Mode / Theming"
  ],
  "Hard": [
    "Performance Optimization",
    "Next.js API Routes",
    "SEO Best Practices",
    "Server-Side Rendering (SSR)",
    "Code Splitting & Lazy Loading",
    "CI/CD Basics"
  ],
  "Very Hard": [
    "WebSockets",
    "GraphQL",
    "Advanced Next.js (App Directory, Middleware)",
    "Custom Hooks in React",
    "Progressive Web Apps (PWA)",
    "Security (XSS, CSRF, etc.)"
  ]
};


const page = () => {
    return (
        <div>
            <Tnav />
            <Tpage
                topics={topics}
            />
        </div>
    )
}

export default page