/**
 * Ink Mugi — Centralized Design Tokens
 * ─────────────────────────────────────
 * Single source of truth for every colour, radius, shadow,
 * spacing rhythm, and font reference used across the site.
 *
 * Usage:
 *   import { colors, fonts } from '@/utils/designTokens';
 *   <div style={{ color: colors.dark }} />
 *
 * Tailwind classes remain the primary styling method.
 * These tokens exist for:
 *   1. Quick visual reference / documentation
 *   2. Dynamic inline styles that can't use Tailwind
 *   3. Keeping every page in lockstep when the palette evolves
 */

// ───────────── COLOUR PALETTE ─────────────

export const colors = {
  /** Brand dark — headings, buttons, dark sections */
  dark: '#2D2D2B',
  darkHover: '#4A4A47',

  /** Warm accents — CTA backgrounds, badges, decorative fills */
  warmAccent: '#E6DAD2',
  warmAccentDeep: '#d4c4b0',
  warmGold: '#F7EDE6',
  warmGradientStart: '#F0E4D8',
  warmGradientEnd: '#F9F7F5',

  /** Backgrounds */
  offWhite: '#F9F7F5',
  cream: '#F0ECE8',
  lightBeige: '#E2DCD6',

  /** City-page accent */
  cityAccent: '#9A7B69',

  /** Tailwind-token primary (warm taupe) */
  primary: '#c7a790',
  primaryDark: '#b08e77',
  primaryLight: '#e2cfc1',

  /** Secondary */
  secondary: '#8c7569',

  /** Accent / dusty rose */
  accent: '#d6b9a5',

  /** Semantic */
  success: '#16a34a',   // green-600
  warning: '#d97706',   // amber-600
  error: '#dc2626',     // red-600

  /** Pure */
  white: '#FFFFFF',
  black: '#000000',
} as const;

// ───────────── TAILWIND CLASS SHORTCUTS ─────────────
// These map the same palette to the Tailwind classes used everywhere,
// making it trivial to audit consistency without a codebase-wide grep.

export const tw = {
  /** Text colours */
  textDark: 'text-[#2D2D2B]',
  textMuted: 'text-[#2D2D2B]/70',
  textSubtle: 'text-[#2D2D2B]/50',
  textFaint: 'text-[#2D2D2B]/60',
  textWhite: 'text-white',

  /** Backgrounds */
  bgDark: 'bg-[#2D2D2B]',
  bgOffWhite: 'bg-[#F9F7F5]',
  bgWarmAccent: 'bg-[#E6DAD2]',
  bgWarmGold: 'bg-[#F7EDE6]',
  bgWarmGradient: 'bg-gradient-to-b from-[#F0E4D8] to-[#F9F7F5]',
  bgWarmGradientBR: 'bg-gradient-to-br from-[#F0E4D8] via-[#E6DAD2] to-[#F9F7F5]',
  bgWhite: 'bg-white',

  /** Borders */
  borderAccent: 'border-[#E6DAD2]',
  borderAccentLight: 'border-[#E6DAD2]/30',
  borderAccentMedium: 'border-[#E6DAD2]/60',

  /** Rounded */
  roundedCard: 'rounded-2xl',
  roundedPill: 'rounded-full',
  roundedSection: 'rounded-xl',

  /** Shadows */
  shadowCard: 'shadow-lg',
  shadowCardHover: 'hover:shadow-2xl',
} as const;

// ───────────── TYPOGRAPHY ─────────────

export const fonts = {
  heading: '"Cormorant Garamond", serif',
  body: '"Jost", sans-serif',
} as const;

// ───────────── SPACING RHYTHM ─────────────

export const spacing = {
  /** Section padding (py) — ensures consistent vertical rhythm */
  sectionSm: 'py-16',
  sectionMd: 'py-16 md:py-24',
  sectionLg: 'py-16 md:py-24 lg:py-32',
  sectionXl: 'py-24',
} as const;

// ───────────── ANIMATION PRESETS ─────────────

export const motion = {
  /** Standard easing for framer-motion transitions */
  ease: [0.22, 1, 0.36, 1] as readonly [number, number, number, number],
  /** Default transition duration (seconds) */
  duration: 0.6,
  /** Standard fade-up for sections */
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    }),
  },
} as const;

// ───────────── BREAKPOINTS (reference only) ─────────────
// Matches tailwind.config.js defaults
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ───────────── BRAND CONSTANTS ─────────────

export const brand = {
  name: 'Ink Mugi',
  tagline: 'Intentional Artistry',
  phone: '+1-571-283-8228',
  phoneDisplay: '(571) 283-8228',
  address: '7857 Heritage Dr #330, Annandale, VA 22003',
  salonName: 'De Novo Salon Suites',
  license: '#1231002471',
  instagram: 'browsby.mugi',
  instagramUrl: 'https://www.instagram.com/browsby.mugi/',
  url: 'https://www.inkmugi.com',
  procedures: '523+',
  email: '', // fill when available
  booking: {
    /** Vagaro redirect path within the SPA */
    internalPath: '/booking',
  },
} as const;
