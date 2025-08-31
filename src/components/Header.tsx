'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
const IconLogo: string = "/images/icon.png";

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

// Header component for navigation
const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle mobile menu visibility
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
            <Container className="px-4 md:px-6 ">
                <nav className="flex items-center justify-between py-4 md:py-6">
                    {/* Logo and Site Name */}
                    <Link href="/" className="flex items-center gap-2" aria-label={`${siteDetails.siteName} homepage`}>
                        <Image
                            src={IconLogo}
                            alt={`${siteDetails.siteName} Logo`}
                            width={60}
                            height={60}
                            priority
                            className="object-contain"
                        />
                        <span className="text-xl font-bold text-red-700 uppercase md:text-2xl">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden items-center space-x-8 md:flex uppercase">
                        {menuItems.map((item) => (
                            <li key={item.text}>
                                <Link
                                    href={item.url}
                                    className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="docsapi"
                                className="inline-block rounded-md bg-red-600 px-6 py-2 text-white font-medium hover:bg-red-700 transition-colors duration-200"
                            >
                                Documentação API
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="md:hidden p-2 text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    >
                        {isOpen ? (
                            <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <HiBars3 className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </nav>

                {/* Mobile Menu with Transition */}
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-200 transform"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150 transform"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-2"
                >
                    <div id="mobile-menu" className="md:hidden bg-white shadow-lg border-t border-gray-100">
                        <ul className="flex flex-col space-y-3 p-6">
                            {menuItems.map((item) => (
                                <li key={item.text}>
                                    <Link
                                        href={item.url}
                                        className="text-gray-700 hover:text-blue-600 font-medium block"
                                        onClick={toggleMenu}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/docsapi"
                                    className="inline-block rounded-md bg-blue-600 px-6 py-2 text-white font-medium hover:bg-blue-700 transition-colors duration-200"
                                    onClick={toggleMenu}
                                >
                                    Documentação API
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Transition>
            </Container>
        </header>
    );
};

export default Header;