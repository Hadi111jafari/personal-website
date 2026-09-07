'use client';

import Logo from '@/components/Logo';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/apps', label: 'Apps' },
  { href: '/#contact', label: 'Contact' },
] as const;

const SOCIAL_LINKS = [
  {
    href: 'https://linkedin.com/in/abdul-hadi-jafari',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/Hadi111jafari',
    icon: FaGithub,
    label: 'GitHub',
  },
] as const;

function SocialLinks({ isMobile = false }: { isMobile?: boolean }) {
  const borderColor = isMobile ? 'border-accent' : 'border-foreground';

  return (
    <ul
      className={`flex text-2xl gap-2.5 px-2.5 py-1.5 rounded-full border-2 ${borderColor}`}
    >
      {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
        <li key={href}>
          <Link
            href={href}
            target="_blank"
            aria-label={label}
            rel="noreferrer"
            className="hover:text-foreground/70 active:text-foreground transition-colors duration-300"
          >
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MobileNav({
  isOpen,
  onToggle,
  onClose,
  activeHash,
  currentPath,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  activeHash: string;
  currentPath: string;
}) {
  return (
    <>
      <div className="flex md:hidden items-center justify-between w-full bg-background px-2.5 pt-1.5">
        <Logo />
        <div className={`flex items-center justify-center relative gap-2.5`}>
          <button
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="capitalize rounded-full border-2 p-2.5 font-medium hover:opacity-80 transition-opacity"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
          {isOpen && (
            <svg
              className="w-6 h-6 inline-block fill-accent absolute rotate-180 bottom-0 left-13.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" />
            </svg>
          )}
          <div
            className={`flex items-center justify-center rounded-tl-[20px] rounded-tr-[20px] p-2.5 ${isOpen ? 'bg-accent' : ''}`}
          >
            <SocialLinks isMobile={isOpen} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          role="menu"
          aria-label="Mobile navigation menu"
          className="relative h-[90dvh] bg-accent mx-2.5 rounded-tl-4xl rounded-bl-4xl rounded-br-4xl text-4xl p-2.5"
        >
          <nav className="flex flex-col items-start my-2.5">
            <ul className="w-full flex flex-col items-start gap-5 px-2.5">
              {NAV_ITEMS.map(({ href, label }) => {
                const isActive = href.startsWith('/')
                  ? currentPath.startsWith(href)
                  : href === activeHash;

                return (
                  <li
                    key={href}
                    className="border-b border-foreground/50 py-2.5 w-full"
                  >
                    <Link
                      href={href}
                      className={`hover:text-foreground/70 active:text-foreground transition-colors duration-200 ${
                        isActive ? 'font-bold' : ''
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={onClose}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

function DesktopNav({
  activeHash,
  currentPath,
}: {
  activeHash: string;
  currentPath: string;
}) {
  return (
    <div className="hidden md:flex items-center w-full max-w-7xl pt-0 pb-0">
      <div className="relative bg-background h-16 md:h-20 my-auto flex items-center rounded-br-none md:rounded-br-4xl">
        <Logo />
        <svg
          className="top-full left-auto w-10 h-auto fill-background absolute hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" />
        </svg>
      </div>

      <div className="w-full relative">
        <svg
          className="top-0 left-auto w-10 h-auto absolute fill-background"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" />
        </svg>
        <nav className="px-2.5 h-16 md:h-20 flex items-center transition-[background-color_padding_translate_border-radius_height] duration-300">
          <ul className="flex items-center gap-8 py-5 px-6 rounded-4xl bg-white/70 shadow-xs backdrop-blur-sm ml-1 dark:text-foreground/80">
            {NAV_ITEMS.map(({ href, label }) => {
              const isActive = href.startsWith('/')
                ? currentPath.startsWith(href)
                : href === activeHash;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`hover:text-foreground/70 active:text-foreground transition-colors duration-200 ${
                      isActive ? 'font-bold' : ''
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }, index) => (
              <li
                key={href}
                className={`text-2xl ${index === 0 ? 'ml-5' : 'ml-[-8px]'}`}
              >
                <Link
                  href={href}
                  target="_blank"
                  aria-label={label}
                  rel="noreferrer"
                  className="hover:text-foreground/70 active:text-foreground transition-colors duration-200"
                >
                  <Icon />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const pathname = usePathname();
  const activeHashRef = useRef('');

  useEffect(() => {
    activeHashRef.current = activeHash;
  }, [activeHash]);

  useEffect(() => {
    const sections = NAV_ITEMS.filter((item) => item.href.startsWith('#'))
      .map((item): { id: string; el: HTMLElement | null } => ({
        id: item.href,
        el: document.querySelector(item.href) as HTMLElement | null,
      }))
      .filter((s): s is { id: string; el: HTMLElement } => s.el !== null);

    if (sections.length === 0) return;

    const compute = () => {
      const scrollPos = window.scrollY + 150;
      let current = '';
      for (const { id, el } of sections) {
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (scrollPos >= top && scrollPos < bottom) {
          current = id;
          break;
        }
      }
      if (current && current !== activeHashRef.current) {
        activeHashRef.current = current;
        setActiveHash(current);
      }
    };

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        compute();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    compute();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const firstLink = document.querySelector('#mobile-menu a');
      (firstLink as HTMLElement)?.focus();
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      role="banner"
      className="w-full fixed top-0 left-0 md:left-auto z-50 h-16 mt-0 md:mt-2.5"
    >
      <MobileNav
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onClose={() => setIsMobileMenuOpen(false)}
        activeHash={activeHash}
        currentPath={pathname}
      />
      <DesktopNav activeHash={activeHash} currentPath={pathname} />
    </header>
  );
}
