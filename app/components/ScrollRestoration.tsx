'use client';

import { useEffect } from 'react';

export default function ScrollRestoration() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Prevent smooth scrolling behavior
      document.documentElement.style.scrollBehavior = 'auto';
      
      // Disable default scroll restoration
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      }
    }
  }, []);

  return null;
}