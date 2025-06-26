import React from 'react'
import Navbar from '@/components/Navbar'

const page = () => {
    return (
        <div className="min-h-screen overflow-hidden">
            <div className="mt-12 max-w-3xl mx-auto text-[#0B635B]">
                <div className="text-4xl font-bold mb-6">About Pathfinder</div>

                <p className="text-lg mb-4 text-gray-700">
                    <strong>Pathfinder</strong> is a calm, focused space built for learners, dreamers, and creators. In a world full of distractions, we help you stay grounded — guiding you on your personal journey of growth.
                </p>

                <p className="text-lg mb-4 text-gray-700">
                    Whether you're building new skills, exploring ideas, or simply navigating your day with intention — Pathfinder is here to make the process smoother, smarter, and more meaningful.
                </p>

                <p className="text-lg text-gray-700">
                    Designed with mindfulness, simplicity, and progress in mind, we're not just another productivity tool — we're your companion in the journey.
                </p>
            </div>


            <div className="mt-12 max-w-3xl mx-auto border-t border-[#cbe4de] pt-10">
                <h2 className="text-4xl font-bold mb-6 text-[#0B635B]">About the Creator</h2>

                <p className="text-lg mb-4 text-gray-700">
                    <strong>Mayank Rana</strong> is the creator of Pathfinder — a Computer Science student with a passion for building tech that feels meaningful, minimal, and mindful.
                </p>

                <p className="text-lg mb-4 text-gray-700">
                    As someone walking the path of learning and growth himself, he understands the need for calm, focused digital spaces that support you — not distract you. Pathfinder reflects that mindset.
                </p>

                <p className="text-lg text-gray-700">
                    Whether it's exploring new technologies, solving DSA challenges, or crafting web experiences from scratch — Mayank is always building, learning, and striving to improve, one step at a time.
                </p>
            </div>


        </div>
    )
}

export default page
