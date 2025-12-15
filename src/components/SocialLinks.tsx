'use client';

import { useState, useRef, useEffect } from 'react';
import { Link2 } from 'lucide-react';

const socialLinks = [
  {
    name: '小红书',
    url: 'https://xhslink.com/m/9iviBLm7Nfs',
    icon: '📕',
  },
  {
    name: 'Bilibili',
    url: 'https://b23.tv/7lIULIh',
    icon: '📺',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Ulanxx/rematrix-doc',
    icon: '🐙',
  },
];

export function SocialLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer inline-flex size-8 items-center justify-center rounded-md text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        aria-label="社交媒体链接"
      >
        <Link2 className="size-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg bg-fd-popover border border-fd-border shadow-lg overflow-hidden z-50">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-xs text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-sm">{link.icon}</span>
              <span className="flex-1">{link.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

