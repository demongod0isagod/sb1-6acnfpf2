import { 
  MessageSquare, 
  FileText, 
  Palette, 
  Phone, 
  TrendingUp, 
  Bot, 
  FileSpreadsheet, 
  MessageCircle, 
  Radio,
  Video
} from 'lucide-react';
import { Tool } from '../types';

export const AITools: Tool[] = [
  {
    id: 'reel-factory',
    name: 'Reel Factory',
    description: 'Transform your ideas into engaging reels in seconds',
    emoji: '🏭',
    icon: <Video size={24} />,
    category: 'Video',
    gradient: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500',
    bgColorHover: 'bg-purple-600',
    isNew: true
  },
  {
    id: 'hook-magnet',
    name: 'HookMagnet',
    description: 'Generate viral hooks that grab attention instantly',
    emoji: '🎣',
    icon: <MessageSquare size={24} />,
    category: 'Copywriting',
    gradient: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500',
    bgColorHover: 'bg-blue-600',
    isNew: false
  },
  {
    id: 'reel-writer',
    name: 'ReelWriter',
    description: 'Create engaging scripts for short-form videos',
    emoji: '📝',
    icon: <FileText size={24} />,
    category: 'Content',
    gradient: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500',
    bgColorHover: 'bg-purple-600',
    isNew: false
  },
  {
    id: 'brand-brew',
    name: 'BrandBrew',
    description: 'Generate logos and complete brand kits in seconds',
    emoji: '🎨',
    icon: <Palette size={24} />,
    category: 'Design',
    gradient: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500',
    bgColorHover: 'bg-green-600',
    isNew: false
  },
  {
    id: 'story-reel',
    name: 'StoryReel',
    description: 'Convert WhatsApp stories to engaging reels',
    emoji: '📱',
    icon: <Phone size={24} />,
    category: 'Conversion',
    gradient: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-500',
    bgColorHover: 'bg-yellow-600',
    isNew: false
  },
  {
    id: 'trend-snipe',
    name: 'TrendSnipe',
    description: 'Finding trending topics so you don\'t miss',
    emoji: '📈',
    icon: <TrendingUp size={24} />,
    category: 'Strategy',
    gradient: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500',
    bgColorHover: 'bg-indigo-600',
    isNew: false
  },
  {
    id: 'auto-agency',
    name: 'AutoAgency',
    description: 'Post videos automatically',
    emoji: '🤖',
    icon: <Bot size={24} />,
    category: 'Automation',
    gradient: 'from-blue-600 to-indigo-600',
    bgColor: 'bg-blue-600',
    bgColorHover: 'bg-blue-700',
    isNew: true
  },
  {
    id: 'smart-resume',
    name: 'SmartResume AI',
    description: 'Create professional resumes tailored to job descriptions',
    emoji: '📄',
    icon: <FileSpreadsheet size={24} />,
    category: 'Career',
    gradient: 'from-slate-500 to-gray-500',
    bgColor: 'bg-slate-500',
    bgColorHover: 'bg-slate-600',
    isNew: false
  },
  {
    id: 'ad-copy-x',
    name: 'AdCopyX',
    description: 'Generate ad copy for Instagram, Facebook, and Google',
    emoji: '💬',
    icon: <MessageCircle size={24} />,
    category: 'Marketing',
    gradient: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-500',
    bgColorHover: 'bg-pink-600',
    isNew: false
  },
  {
    id: 'podcast-scripter',
    name: 'PodcastScripter',
    description: 'Convert podcasts into shareable content snippets',
    emoji: '🎙️',
    icon: <Radio size={24} />,
    category: 'Audio',
    gradient: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500',
    bgColorHover: 'bg-violet-600',
    isNew: false
  }
];