import { defineConfig, defineGlobalStyles } from '@pandacss/dev';
import { pandaPurgeKeyframes, pandaPurgeVars } from './panda.purge';

// ==============
// Export config.
// ==============

export default defineConfig({
  // =======
  // Config.
  // =======

  // File patterns to exclude from processing. Empty means nothing is excluded.
  exclude: [],

  // Enables hashing for generated class names and CSS variables.
  hash: true,

  // File patterns to include in processing. We target TypeScript and TSX files.
  include: ['./src/**/*.{ts,tsx}'],

  // Enables minification of generated CSS. Reduce file size and improves load time.
  minify: true,

  // Directory name for Panda's code bundle. Default is "styled-system".
  outdir: 'styled-system',

  // Enables browser reset and base styles.
  preflight: true,

  presets: [
    // Includes base preset with: conditions, patterns, utilities.
    '@pandacss/preset-base',

    // Includes Panda preset with theme: breakpoints, keyframes, text, tokens.
    '@pandacss/preset-panda',
  ],

  // Specifies the JSX framework for optimized output. We are using SolidJS.
  jsxFramework: 'solid',

  // Specifies which syntax to support. Default is "object-literal".
  syntax: 'object-literal',

  // ==============
  // Global styles.
  // ==============

  globalCss: defineGlobalStyles({
    '*': {
      outlineOffset: '2px',
      textWrap: 'pretty',

      '&:focus:not(:focus-visible)': {
        outline: '0',
      },
      '&::-webkit-scrollbar': {
        width: '{spacing.scrollbar}',
        height: '{spacing.scrollbar}',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'transparent',
      },
      '&:hover::-webkit-scrollbar-thumb': {
        backgroundColor: '{colors.neutral.400}',
      },
    },
    html: {
      overflow: 'hidden',
      fontSize: '14px',
    },
    body: {
      color: '#000',
      backgroundColor: '{colors.neutral.100}',
      lineHeight: '1.5',
    },
    button: {
      appearance: 'none',
      font: 'inherit',

      '& svg': {
        fill: 'currentColor',
      },

      '&:disabled': {
        cursor: 'not-allowed',

        '@media (hover: none)': {
          pointerEvents: 'none',
        },
      },

      '&:not(:disabled)': {
        cursor: 'pointer',
      },
    },
    h2: {
      fontSize: '{fontSizes.lg}',
      fontWeight: 'bold',

      // Media query.
      md: {
        fontSize: '{fontSizes.2xl}',
      },
    },
    h3: {
      fontSize: '{fontSizes.lg}',
      fontWeight: 'bold',

      // Media query.
      md: {
        fontSize: '{fontSizes.xl}',
      },
    },
    h4: {
      fontSize: '{fontSizes.lg}',
      fontWeight: 'bold',
    },
    hr: {
      borderTopColor: '{colors.neutral.300}',
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
    },
    img: {
      whiteSpace: 'nowrap',
    },
    input: {
      '&[type="checkbox"], &[type="radio"]': {
        accentColor: '{colors.indigo.500}',
        width: '1.5rem',
        height: '1.5rem',
      },
    },
    svg: {
      pointerEvents: 'none',

      '& > *': {
        pointerEvents: 'auto',
      },
    },
    table: {
      fontVariantNumeric: 'tabular-nums',
    },
    u: {
      cursor: 'not-allowed',
    },

    // =====================
    // Generic & fake links.
    // =====================

    'a:not([class]), u': {
      color: '#00f',
      display: 'inline-block',
      textDecoration: 'underline',
    },

    // ===================
    // High contrast mode.
    // ===================

    '@media (forced-colors: active)': {
      // TODO.
    },

    // ===================
    // Override animation.
    // ===================

    '@media (prefers-reduced-motion: reduce)': {
      '*, *:after, *:before': {
        animationDelay: '0s !important',
        animationDuration: '0s !important',

        transitionDelay: '0s !important',
        transitionDuration: '0s !important',
      },
    },
  }),

  // ======
  // Hooks.
  // ======

  hooks: {
    /*
    =====
    NOTE:
    =====

        This hook removes unused CSS keyframes and variables.

        https://panda-css.com/docs/concepts/hooks
    */
    'cssgen:done': ({ artifact, content }): string | void => {
      // Is style output: YES.
      if (artifact === 'styles.css') {
        // Get content.
        let newContent = pandaPurgeKeyframes(content);
        newContent = pandaPurgeVars(newContent);

        // Expose string.
        return newContent;
      }
    },
  },

  // ======
  // Theme.
  // ======

  theme: {
    extend: {
      keyframes: {
        ANIMATION_FADE_IN: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        ANIMATION_SHRINK_HORIZONTAL: {
          '0%': {
            width: '100%',
          },
          '100%': {
            width: '0',
          },
        },
      },
      tokens: {
        shadows: {
          drop: {
            value: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25))',
          },
          text: {
            value: '0 1px 2px rgba(0, 0, 0, 0.5)',
          },
        },
        spacing: {
          scrollbar: {
            value: '6px',
          },
        },
      },
    },
  },
});
