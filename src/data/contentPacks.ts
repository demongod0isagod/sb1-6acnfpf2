import { ContentPack } from '../types';

export const contentPacks: ContentPack[] = [
  {
    id: 'valorant-clips',
    title: 'Valorant Highlights',
    description: 'High-impact gaming moments from Valorant tournaments and pro players',
    category: 'gaming',
    image: 'https://images.pexels.com/photos/7915282/pexels-photo-7915282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    clipCount: 50,
    isNew: false,
    clips: [
      {
        id: 'val-1',
        title: 'Epic Ace Clutch',
        thumbnail: 'https://images.pexels.com/photos/7915282/pexels-photo-7915282.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        duration: 45,
        previewUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
      },
      {
        id: 'val-2',
        title: 'Insane Headshot Compilation',
        thumbnail: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        duration: 60,
        previewUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
      }
    ]
  },
  {
    id: 'gta-moments',
    title: 'GTA Viral Moments',
    description: 'Funny and unexpected moments from GTA online gameplay',
    category: 'gaming',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    clipCount: 50,
    isNew: false,
    clips: [
      {
        id: 'gta-1',
        title: 'Hilarious Car Chase',
        thumbnail: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        duration: 55,
        previewUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
      }
    ]
  },
  {
    id: 'anime-emotional',
    title: 'Anime Emotional Scenes',
    description: 'Touching and powerful emotional scenes from popular anime series',
    category: 'anime',
    image: 'https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    clipCount: 50,
    isNew: false,
    clips: [
      {
        id: 'anime-1',
        title: 'Emotional Farewell Scene',
        thumbnail: 'https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        duration: 40,
        previewUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
      }
    ]
  },
  {
    id: 'anime-action',
    title: 'Anime Action Sequences',
    description: 'High-energy fight scenes and action sequences from top anime',
    category: 'anime',
    image: 'https://images.pexels.com/photos/7241628/pexels-photo-7241628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    clipCount: 50,
    isNew: true,
    clips: [
      {
        id: 'anime-action-1',
        title: 'Epic Battle Sequence',
        thumbnail: 'https://images.pexels.com/photos/7241628/pexels-photo-7241628.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        duration: 50,
        previewUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
      }
    ]
  },
  {
    id: 'movie-cinematic',
    title: 'Cinematic Movie Clips',
    description: 'Visually stunning scenes from blockbuster movies',
    category: 'movie',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    clipCount: 50,
    isNew: false,
    clips: [
      {
        id: 'movie-1',
        title: 'Dramatic Action Scene',
        thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        duration: 35,
        previewUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
      }
    ]
  },
  {
    id: 'minecraft-parkour',
    title: 'Minecraft Parkour Pack',
    description: 'Epic parkour runs and challenging obstacle courses in Minecraft',
    category: 'gaming',
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    clipCount: 50,
    isNew: true,
    clips: [
      {
        id: 'minecraft-1',
        title: 'Insane Parkour Run',
        thumbnail: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
        duration: 42,
        previewUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
      }
    ]
  }
];