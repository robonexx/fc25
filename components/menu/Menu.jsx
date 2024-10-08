'use client';
import { usePathname } from 'next/navigation'; // Import the correct hook
import { Darker_Grotesque } from 'next/font/google';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './menu.css';

const menuLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/respect', label: 'Respect the Roots' },
  { path: '/media', label: 'Media' },
  { path: '/playground', label: 'Playgorund' },
  { path: '/contact', label: 'Contact' },
];

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Use pathname to detect route changes

  /*GSAP*/
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      // Initially position the menu links off-screen to the right
      gsap.set('.menu-link-item-holder', { x: 100, opacity: 0 });

      // Create a timeline for the menu overlay and menu items
      tl.current = gsap
        .timeline({ paused: false })
        // Animate the menu overlay from right to left
        .to('.menu-overlay', {
          duration: 0.3, // Faster animation duration
          clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', // Starts off-screen from the right
          ease: 'power2.inOut', // Faster ease
        })
        .to('.menu-overlay', {
          duration: 0.3, // Faster animation duration
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', // Slides in from the right
          ease: 'power2.inOut', // Faster ease
        })
        // Stagger the appearance of menu items
        .to('.menu-link-item-holder', {
          x: 0, // Move items from right to left
          opacity: 1,
          duration: 0.3, // Reduced duration for menu items
          stagger: 0.08, // Reduced stagger time for quicker item appearance
          ease: 'power2.inOut',
          delay: 0.2, // Reduced delay to match the faster overlay animation
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  // Close the menu when route changes
  useEffect(() => {
    setIsMenuOpen(false); // Close the menu on route change
  }, [pathname]);

  return (
    <div className='menu-container' ref={container}>
      <div className='menu-bar'>
        <div className='menu-logo'>
          <Link href={'/'}>Funkcamp 2025</Link>
        </div>
        <div className='menu-open' onClick={toggleMenu}>
          <p>Menu</p>
        </div>
        <div className='menu-overlay'>
          <div className='menu-overlay-bar'>
            <div className='menu-logo'>
              <Link href={'/'}>Funkcamp 2025</Link>
            </div>
            <div className='menu-close' onClick={toggleMenu}>
              <p>Close</p>
            </div>
          </div>

          <div className='menu-close-icon'>
            <p onClick={toggleMenu}>&#x2715;</p>
          </div>
          <div className='menu-copy'>
            <div className='menu-links'>
              {menuLinks.map((link) => (
                <div className='menu-link-item' key={link.label}>
                  <div className='menu-link-item-holder'>
                    <Link href={link.path} className='menu-link'>
                      {link.label.split('').map((letter, index) => (
                        <span key={index} className='menu-letter'>
                          {letter}
                        </span>
                      ))}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className='menu-info'>
              <div className='menu-info-col'>
                <a href='#'>Instagram &#8599;</a>
              </div>
              <div className='menu-info-col'>
                <p>funkcampswe@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
