import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock des variables CSS pour les tests
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop: string) => {
      // Retourner des valeurs par défaut pour les variables CSS
      const defaults: Record<string, string> = {
        '--background-neutral-faint-default': '#f7f7f7',
        '--text-base-bolder': '#2b2b2b',
        '--text-base-moderate': '#545454',
        '--border-default': '#d6d6d6',
        '--layout-padding-lg': '12px',
        '--layout-radius-xl': '12px',
        '--layout-gap-lg': '12px',
        '--layout-gap-xs': '2px',
        '--font-family-content': 'Inter, sans-serif',
        '--font-weight-accent': '500',
        '--font-weight-regular': '400',
        '--font-size-content-note': '14px',
        '--font-line-height-content-note': '20px',
      };
      return defaults[prop] || '';
    },
  }),
});

// Mock de ResizeObserver
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })),
});

// Mock de matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
