import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, type Variants } from 'framer-motion';

/**
 * Animation variant presets.
 * Each preset defines a hidden → visible transform pair.
 *
 * 'fade-up'   — default (existing behaviour)
 * 'fade-down' — slides down into view
 * 'slide-left'  — enters from the right, slides left
 * 'slide-right' — enters from the left, slides right
 * 'scale'     — subtle grow-in from 95 %
 * 'fade'      — opacity only (no movement)
 */
export type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale'
  | 'fade';

const ease = [0.22, 1, 0.36, 1] as const;

const variantPresets: Record<AnimationVariant, { hidden: object; visible: object }> = {
  'fade-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-down': {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Delay multiplier — divided by 10 for seconds (e.g. 2 → 0.2 s) */
  delay?: number;
  /** Choose an animation preset. Default: 'fade-up' */
  variant?: AnimationVariant;
  /** Override default duration in seconds */
  duration?: number;
  /** When true, child items stagger automatically (container mode) */
  stagger?: boolean;
  /** Stagger interval in seconds (default 0.1) */
  staggerInterval?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  variant = 'fade-up',
  duration = 0.6,
  stagger = false,
  staggerInterval = 0.1,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const preset = variantPresets[variant];

  // Stagger container mode — animate children in sequence
  if (stagger) {
    const containerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerInterval,
          delayChildren: delay / 10,
        },
      },
    };

    const childVariants: Variants = {
      hidden: preset.hidden,
      visible: {
        ...preset.visible,
        transition: { duration, ease: [...ease] },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className={className}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child) ? (
            <motion.div variants={childVariants}>{child}</motion.div>
          ) : (
            child
          ),
        )}
      </motion.div>
    );
  }

  // Standard single-element mode (backwards-compatible)
  const variants: Variants = {
    hidden: preset.hidden,
    visible: {
      ...preset.visible,
      transition: {
        duration,
        ease: [...ease],
        delay: delay / 10,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;