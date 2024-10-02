'use client';
import { Darker_Grotesque, Bebas_Neue } from 'next/font/google';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import './menu.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

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

  /*GSAP*/
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set('.menu-link-item-holder', { y: 100 });

      tl.current = gsap
        .timeline({ paused: true })
        .to('.menu-overlay', {
          duration: 1.25,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          ease: 'power4.inOut',
        })
        .to('.menu-link-item-holder', {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.inOut',
          delay: -0.75,
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

  useEffect(() => {
    // Select all the link items
    const links = document.querySelectorAll('.menu-link-item-holder');

    links.forEach((link) => {
      const letters = link.querySelectorAll('.menu-letter');

      // Add hover effect for each link
      link.addEventListener('mouseenter', () => {
        gsap.to(letters, {
          rotateY: 360,
          duration: 1,
          stagger: 0.05,
          ease: 'power1.out',
        });
      });

      link.addEventListener('mouseleave', () => {
        // Reset the letters' rotation after hover
        gsap.to(letters, {
          rotateY: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power1.out',
        });
      });
    });
  }, []);

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
