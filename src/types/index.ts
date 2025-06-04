import { ReactNode } from 'react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  emoji: string;
  icon: ReactNode;
  category: string;
  gradient: string;
  bgColor: string;
  bgColorHover: string;
  isNew: boolean;
}

export interface ContentPack {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  clipCount: number;
  downloads: number;
  isNew: boolean;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  benefits: string[];
}