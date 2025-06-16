import {
  Share2,
  SplitSquareVertical,
  Tv2,
  Mic,
  Palette
} from 'lucide-react';
import { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'auto-publish',
    title: 'Auto Publish to Social Media',
    description: 'Schedule and publish your content directly to multiple platforms',
    icon: <Share2 size={24} />,
    benefits: [
      'Direct publishing to Instagram, TikTok, and YouTube Shorts',
      'Smart scheduling for optimal posting times',
      'Cross-platform content optimization',
      'Basic performance insights'
    ]
  },
  {
    id: 'split-screen',
    title: 'Split Screen Preview',
    description: 'Compare before and after edits with side-by-side preview',
    icon: <SplitSquareVertical size={24} />,
    benefits: [
      'Real-time comparison of original and edited content',
      'Interactive side-by-side view',
      'Adjust settings while comparing results',
      'Visual quality comparison tools'
    ]
  },
  {
    id: 'cinematic',
    title: 'Cinematic Transitions',
    description: 'Professional-grade transitions for your content',
    icon: <Tv2 size={24} />,
    benefits: [
      'Library of 50+ cinematic transitions',
      'Customizable duration and effects',
      'Smart scene detection for perfect timing',
      'Transition presets for different content types'
    ]
  },
  {
    id: 'voice-clone',
    title: 'AI Voice Cloning',
    description: 'Clone any voice for professional voiceovers',
    icon: <Mic size={24} />,
    benefits: [
      'Create voice clones with just 3 minutes of audio',
      'Adjust tone, pitch, and emotion',
      'Text-to-speech with natural inflection',
      'Multi-language support'
    ]
  },
  {
    id: 'theme-pack',
    title: 'Multiple Theme Options',
    description: 'Each content pack comes with customizable themes',
    icon: <Palette size={24} />,
    benefits: [
      'Multiple visual style options',
      'Custom color grading presets',
      'Audio-reactive visual elements',
      'Seasonal and trending theme updates'
    ]
  }
];