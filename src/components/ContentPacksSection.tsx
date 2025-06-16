import { useState } from 'react';
import { contentPacks } from '../data/contentPacks';
import { ArrowRight, Play, X, ArrowLeft, Lock, Crown } from 'lucide-react';
import { ContentPack, Clip } from '../types';
import { useSubscription } from '../contexts/SubscriptionContext';

const ContentPacksSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPack, setSelectedPack] = useState<ContentPack | null>(null);
  const [hoveredClip, setHoveredClip] = useState<string | null>(null);
  const [previewClip, setPreviewClip] = useState<Clip | null>(null);
  const { isSubscribed, setShowSubscriptionGate } = useSubscription();
  
  const filteredPacks = activeCategory === 'all' 
    ? contentPacks 
    : contentPacks.filter(pack => pack.category === activeCategory);

  const handlePackClick = (pack: ContentPack) => {
    if (!isSubscribed) {
      setShowSubscriptionGate(true);
      return;
    }
    setSelectedPack(pack);
  };

  const handleClipPreview = (clip: Clip) => {
    if (!isSubscribed) {
      setShowSubscriptionGate(true);
      return;
    }
    setPreviewClip(clip);
  };

  const closePreview = () => {
    setPreviewClip(null);
  };

  const backToPacks = () => {
    setSelectedPack(null);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate additional clips to reach 50 per pack
  const generateClips = (pack: ContentPack): Clip[] => {
    const baseClips = pack.clips || [];
    const additionalClips = [];
    
    for (let i = baseClips.length; i < 50; i++) {
      additionalClips.push({
        id: `${pack.id}-${i + 1}`,
        title: `${pack.title} Clip ${i + 1} - Copyright Free`,
        thumbnail: pack.image,
        duration: Math.floor(Math.random() * 60) + 30,
        previewUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
      });
    }
    
    return [...baseClips, ...additionalClips];
  };

  if (selectedPack && isSubscribed) {
    const allClips = generateClips(selectedPack);
    
    return (
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <button
              onClick={backToPacks}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-4"
            >
              <ArrowLeft size={20} />
              <span>Back to Content Packs</span>
            </button>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
              {selectedPack.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              {selectedPack.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {allClips.length} copyright-free clips available
            </p>
            
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Crown size={20} className="text-green-600 dark:text-green-400" />
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">Premium Access Active</h3>
              </div>
              <p className="text-green-700 dark:text-green-300">
                You have full access to all copyright-free clips. Download and use them in your content without restrictions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {allClips.map((clip) => (
              <div
                key={clip.id}
                className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredClip(clip.id)}
                onMouseLeave={() => setHoveredClip(null)}
                onClick={() => handleClipPreview(clip)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={clip.thumbnail}
                    alt={clip.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {hoveredClip === clip.id && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play size={20} className="text-white ml-1" />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {Math.floor(clip.duration / 60)}:{(clip.duration % 60).toString().padStart(2, '0')}
                  </div>
                  
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Copyright Free
                  </div>
                </div>
                
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                    {clip.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Preview Modal */}
        {previewClip && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {previewClip.title}
                </h3>
                <button
                  onClick={closePreview}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-4">
                <video
                  src={previewClip.previewUrl}
                  controls
                  autoPlay
                  className="w-full aspect-video rounded-lg"
                >
                  Your browser does not support the video tag.
                </video>
                
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Duration: {Math.floor(previewClip.duration / 60)}:{(previewClip.duration % 60).toString().padStart(2, '0')}
                    </span>
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                      Copyright Free
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Download Clip
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }

  return (
    <section id="packs" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
            Copyright-Free Content Packs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready-to-use copyright-free content collections for your next viral post
          </p>
        </div>

        {!isSubscribed && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-lg mb-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Lock size={24} className="text-yellow-600 dark:text-yellow-400" />
              <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-300">Premium Content</h3>
            </div>
            <p className="text-yellow-700 dark:text-yellow-300 mb-4">
              Access to all copyright-free clips requires a subscription. Choose your plan to unlock unlimited downloads and use them in your content without restrictions.
            </p>
            <button 
              onClick={scrollToPricing}
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium"
            >
              View Pricing Plans
            </button>
          </div>
        )}

        {/* Category filters */}
        <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2">
          {['all', 'gaming', 'anime', 'nature'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Content packs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPacks.map((pack) => (
            <div 
              key={pack.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer relative"
              onClick={() => handlePackClick(pack)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={pack.image} 
                  alt={pack.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                      {pack.category.charAt(0).toUpperCase() + pack.category.slice(1)}
                    </span>
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                      {pack.clipCount} clips
                    </span>
                  </div>
                </div>
                
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Copyright Free
                </div>

                {!isSubscribed && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center">
                      <Lock size={32} className="text-white mx-auto mb-2" />
                      <span className="text-white text-sm font-medium">Premium Access Required</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  {pack.title}
                  {!isSubscribed && <Lock size={16} className="ml-2 text-yellow-500" />}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {pack.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {isSubscribed ? (
                      <>Explore pack <ArrowRight size={16} /></>
                    ) : (
                      <>Get Access <Lock size={16} /></>
                    )}
                  </button>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {pack.isNew ? 'New' : 'Copyright Free'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentPacksSection;