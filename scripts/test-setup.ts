/*
eslint

{
  '@typescript-eslint/no-explicit-any': 'off',
}
*/

// =======
// Before.
// =======

beforeEach((): void => {
  // Clear content.
  document.body.textContent = '';

  // Clear mocks.
  vi.clearAllMocks();
});

// ========================================
// Override: `globalThis.MutationObserver`.
// ========================================

Object.defineProperty(globalThis, 'MutationObserver', {
  writable: true,
  value: class MutationObserver {
    private callback: (list: any[]) => void;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(callback: typeof this.callback, _options: Record<string, any>) {
      // Set callback.
      this.callback = callback;
    }

    public observe = (element: HTMLElement): void => {
      // Fire callback.
      this.callback([
        {
          target: element,
          type: 'childList',
        },
      ]);
    };

    public disconnect = (): void => undefined;
  },
});

// ============================================
// Override: `globalThis.IntersectionObserver`.
// ============================================

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: class IntersectionObserver {
    private callback: (list: any[]) => void;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(callback: typeof this.callback, _options: Record<string, any>) {
      // Set callback.
      this.callback = callback;
    }

    public observe = (element: HTMLElement): void => {
      // Fire callback.
      this.callback([
        {
          isIntersecting: true,
          target: element,
        },
      ]);
    };

    public disconnect = (): void => undefined;
  },
});

// =============================================
// Override: `globalThis.requestAnimationFrame`.
// =============================================

Object.defineProperty(globalThis, 'requestAnimationFrame', {
  writable: true,
  value: (callback: unknown) => {
    // Callback exists: YES.
    if (typeof callback === 'function') {
      // Fire callback.
      callback();
    }
  },
});

// Force "module" mode.
export {};
