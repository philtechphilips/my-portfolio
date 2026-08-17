import type { Config } from 'tailwindcss'

/**
 * Design system: Nova Persona's token architecture, Aiko's visual language.
 *
 * Every colour resolves through a CSS custom property defined in globals.css,
 * so light/dark is handled once at the token layer rather than with `dark:`
 * variants on every element. Values are RGB triplets so Tailwind's opacity
 * modifiers (`bg-fg/10`) keep working.
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Semantic tokens (Nova architecture) ──
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        'bg-alt': 'rgb(var(--c-bg-alt) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        fg: 'rgb(var(--c-fg) / <alpha-value>)',
        'fg-muted': 'rgb(var(--c-fg-muted) / <alpha-value>)',
        'fg-subtle': 'rgb(var(--c-fg-subtle) / <alpha-value>)',
        rule: 'rgb(var(--c-rule) / <alpha-value>)',
        'rule-strong': 'rgb(var(--c-rule-strong) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        'accent-fg': 'rgb(var(--c-accent-fg) / <alpha-value>)',
        // Flips with the theme — solid dark button in light mode, solid light in dark.
        inverse: 'rgb(var(--c-inverse-bg) / <alpha-value>)',
        'inverse-fg': 'rgb(var(--c-inverse-fg) / <alpha-value>)',

        // ── Legacy keys, remapped onto the new palette ──
        // Kept so the project detail pages keep compiling; they now inherit
        // the new look instead of the old blue-slate scheme.
        primary: {
          DEFAULT: 'rgb(var(--c-inverse-bg) / <alpha-value>)',
          light: 'rgb(var(--c-accent) / <alpha-value>)',
          dark: 'rgb(var(--c-fg) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--c-fg-muted) / <alpha-value>)',
          light: 'rgb(var(--c-fg-subtle) / <alpha-value>)',
          dark: 'rgb(var(--c-fg) / <alpha-value>)',
        },
        neutral: {
          light: 'rgb(var(--c-fg-muted) / <alpha-value>)',
          DEFAULT: 'rgb(var(--c-fg-subtle) / <alpha-value>)',
          dark: 'rgb(var(--c-rule) / <alpha-value>)',
        },
        background: {
          light: '#fafafa',
          dark: '#161717',
        },
        text: {
          primary: 'rgb(var(--c-fg) / <alpha-value>)',
          secondary: 'rgb(var(--c-fg-muted) / <alpha-value>)',
        },
        success: '#3f9142',
        error: '#c2453d',
      },

      fontFamily: {
        // Aiko: Chillax carries every heading, at light weights only.
        display: ['Chillax', 'system-ui', 'sans-serif'],
        // Nova: Schibsted Grotesk for running text and UI.
        body: ['Schibsted Grotesk', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        // Legacy aliases
        heading: ['Chillax', 'system-ui', 'sans-serif'],
        brand: ['Chillax', 'system-ui', 'sans-serif'],
      },

      // Nova's responsive type scale, retuned to Aiko's proportions.
      // `meta` / `meta-lg` are Aiko's own `.text-meta-small` / `.text-meta`
      // verbatim: 12–13px, 0.5px tracking, uppercase, weight 400.
      fontSize: {
        meta: ['12px', { lineHeight: '1.3', letterSpacing: '0.5px' }],
        'meta-lg': ['13px', { lineHeight: '1.6', letterSpacing: '0.5px' }],
        'display-xl': ['clamp(3rem, 9vw, 8.5rem)', { lineHeight: '1.02', letterSpacing: '-0.045em' }],
        'display-l': ['clamp(2.5rem, 6.5vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        h1: ['clamp(2.25rem, 5.5vw, 4.5rem)', { lineHeight: '1.06', letterSpacing: '-0.038em' }],
        h2: ['clamp(1.875rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.032em' }],
        h3: ['clamp(1.5rem, 2.6vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.026em' }],
        h4: ['clamp(1.25rem, 1.9vw, 1.625rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h5: ['clamp(1.0625rem, 1.4vw, 1.25rem)', { lineHeight: '1.3', letterSpacing: '-0.012em' }],
      },

      // Aiko: essentially square.
      borderRadius: {
        card: '3px',
        btn: '4px',
        chip: '3px',
      },

      // Nova's spacing scale.
      spacing: {
        section: '7.5rem',
        'section-sm': '3.75rem',
        gutter: '1.25rem',
        'gutter-lg': '5rem',
      },

      maxWidth: {
        shell: '84rem',
        prose: '38rem',
      },

      transitionTimingFunction: {
        aiko: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'up-down': 'upDown 1.5s ease-in-out infinite',
        'rule-in': 'ruleIn 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ruleIn: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
