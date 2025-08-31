import { describe, it, expect } from 'vitest';

describe('Test Setup', () => {
  it('should pass basic test', () => {
    expect(true).toBe(true);
  });

  it('should have access to console', () => {
    expect(console).toBeDefined();
  });

  it('should have access to window object', () => {
    expect(window).toBeDefined();
  });
});
