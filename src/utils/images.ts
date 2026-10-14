/**
 * Client-provided brand photos (docs/source-assets/image/), optimized by Astro
 * into AVIF/WebP at build time. Keys are referenced from src/data/services.ts.
 */
import inHome from '../assets/brand/in-home-aba.jpg';
import whatIs from '../assets/blog/what-is-aba-therapy.jpg';
import routines from '../assets/blog/aba-in-everyday-family-routines.jpg';
import goals from '../assets/blog/aba-therapy-goals.jpg';
import reinforcement from '../assets/blog/positive-reinforcement-in-aba.jpg';
import data from '../assets/blog/data-driven-aba-therapy.jpg';
import headerBanner from '../assets/brand/header-banner.jpg';
import logo from '../assets/brand/logo.png';
import programAba from '../assets/brand/program-aba.jpg';
import programSpeech from '../assets/brand/program-speech.jpg';
import programOt from '../assets/brand/program-ot.jpg';

export const PROGRAM_IMAGES = { 'program-aba': programAba, 'program-speech': programSpeech, 'program-ot': programOt } as const;

export const IMAGES = {
  'in-home': { src: inHome, alt: 'ABA therapist sitting on a living-room rug showing a picture card to a smiling toddler while his father watches from the couch' },
  'what-is': { src: whatIs, alt: 'Therapist and preschool boy stacking colorful blocks at home while his mother watches' },
  routines: { src: routines, alt: 'Therapist and mother with a boy at the kitchen table using a visual schedule and picture cards' },
  goals: { src: goals, alt: 'Therapist showing an apple picture card to a boy on the living-room floor, his father on the couch' },
  reinforcement: { src: reinforcement, alt: 'Therapist giving a thumbs-up and a star sticker to a smiling boy at a table with a star chart' },
  data: { src: data, alt: 'Therapist showing a star-rating progress chart on a clipboard to a smiling boy' },
} as const;

export type ImageKey = keyof typeof IMAGES;
export { headerBanner, logo };
