import { X, Menu } from "lucide-react";
import React, { useState } from "react";

const NavBar = () => {
    const [isMenuDrop, setIsMenuDrop] = useState(false);
    const menuItems = [
        { name: "Home", href: "#home" },
        { name: "About Me", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    const scrollToSection = (href) => {
        setIsMenuDrop(false);
        document.querySelector(href)?.scrollIntoView(
            {
                behavior: "smooth"
            }
        );
    }
    return (
        <header className="relative z-50 px-6 py-7">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-black cursor-pointer">
                    <a href="#">
                        Me
                        <span className="text-primary">{' '}!</span>
                    </a>

                </div>
                <nav className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-8">
                        {menuItems.map(
                            (item) => (
                                <li key={item.name}>
                                    <button
                                        onClick={() => scrollToSection(item.href)}
                                        className="text-gray-300 hover:text-white hover:cursor-pointer text-base font-medium transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                </nav>
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuDrop(!isMenuDrop)}
                >
                    {

                        isMenuDrop ? <X size={32} /> : <Menu size={32} />
                    }
                </button>
            </div>
            {
                isMenuDrop && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                        onClick={() => setIsMenuDrop(false)}
                    >

                    </div>
                )
            }
            <div className={`fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 transition-transform duration-300 md:hidden ${isMenuDrop ? 'translate-x-0' : 'translate-x-full'
                } p-8 flex flex-col`}>
                <button
                    className="self-end text-white mb-10"
                    onClick={() => setIsMenuDrop(false)}>
                    <X size={32} />
                </button>
                <ul className="flex flex-col gap-8">
                    {
                        menuItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-white text-xl font-semibold hover:text-primary hover:cursor-pointer transition-colors"
                                >
                                    {item.name}
                                </button>
                            </li>

                        ))
                    }

                </ul>
            </div>
        </header>
    )
}

export default NavBar;