'use client';
import Link from 'next/link';
import { useState } from 'react';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-white font-bold text-xl hover:text-blue-400 transition-colors !important">
                        Sadegh Ghanbari Shohani
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4 gap-x-4">
                            <li><Link href="/about" className="text-white hover:text-blue-400 transition-colors px-3 py-2">About</Link></li>
                            <li><Link href="/projects" className="text-white hover:text-blue-400 transition-colors px-3 py-2">Projects</Link></li>
                            <li><Link href="/contact" className="text-white hover:text-blue-400 transition-colors px-3 py-2">Contact</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden pb-4">
                        <ul className="flex flex-col space-y-4">
                            <li><Link href="/about" className="text-gray-300 hover:text-white block transition-colors">About</Link></li>
                            <li><Link href="/projects" className="text-gray-300 hover:text-white block transition-colors">Projects</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white block transition-colors">Contact</Link></li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}