import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Instagram, Star, Quote, Loader } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { fetchInstagramMedia, getMediaUrl } from '../services/instagramService';

// Component for enhanced image comparison slider
const BeforeAfterSlider: React.FC<{ beforeImage: string; afterImage: string; beforeLabel?: string; afterLabel?: string }> = ({ 
  beforeImage, 
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      let x = ((e.clientX - rect.left) / rect.width) * 100;
      x = Math.min(Math.max(x, 0), 100);
      setSliderPosition(x);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (sliderRef.current && e.touches[0]) {
      const rect = sliderRef.current.getBoundingClientRect();
      let x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
      x = Math.min(Math.max(x, 0), 100);
      setSliderPosition(x);
    }
  };

  return (
    <div 
      ref={sliderRef}
      className="relative overflow-hidden w-full h-full rounded-lg cursor-col-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before image (full width) */}
      <div className="absolute inset-0">
        <img src={beforeImage} alt="Before" className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-black/50 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
          {beforeLabel}
        </div>
      </div>
      
      {/* After image (clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={afterImage} 
          alt="After" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-[#2D2D2B]/80 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
          {afterLabel}
        </div>
      </div>
      
      {/* Slider handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="flex space-x-0.5">
            <ChevronLeft size={12} className="text-[#2D2D2B]" />
            <ChevronRight size={12} className="text-[#2D2D2B]" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Gallery Item component
const EnhancedGalleryItem: React.FC<{
  beforeImage: string;
  afterImage: string;
  category: string;
  onClick: () => void;
  testimonial?: {
    text: string;
    author: string;
  };
}> = ({ beforeImage, afterImage, category, onClick, testimonial }) => {
  return (
    <div className="relative overflow-hidden group rounded-lg shadow-medium hover:shadow-lg transition-all duration-500 bg-white h-full">
      <div className="aspect-[4/5]">
        <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} />
      </div>
      
      <div className="p-4 relative">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium bg-[#E6DAD2] text-[#2D2D2B] px-3 py-1 rounded-full">
            {category}
          </span>
          <button 
            onClick={onClick}
            className="bg-[#2D2D2B] text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:bg-[#2D2D2B]/80"
          >
            View Details
          </button>
        </div>
        
        {testimonial && (
          <div className="mt-3 border-t border-[#E6DAD2] pt-3">
            <div className="flex items-start">
              <Quote size={16} className="text-[#2D2D2B]/40 mt-1 mr-2 flex-shrink-0" />
              <div>
                <p className="text-sm text-[#2D2D2B]/80 italic line-clamp-2">{testimonial.text}</p>
                <p className="text-xs font-medium text-[#2D2D2B] mt-1">— {testimonial.author}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedImage, setSelectedImage] = useState<{
    beforeImage: string;
    afterImage: string;
    category: string;
    testimonial?: {
      text: string;
      author: string;
    };
  } | null>(null);

  const filters = [
    { id: 'all', name: 'All Work', icon: '✨' },
    { id: 'ombre-brows', name: 'Ombre Powder Brows', icon: '🖌️' },
    { id: 'corrections', name: 'Corrections', icon: '✓' },
    { id: 'touch-ups', name: 'Touch-Ups', icon: '✎' },
    { id: 'nano-brows', name: 'Nano Brows', icon: '🪶' },
  ];

  const galleryItems = [
    {
      beforeImage: 'https://live.staticflickr.com/65535/54366216764_db37388bbe_c_d.jpg',
      afterImage: 'https://live.staticflickr.com/65535/54366013611_5cc68ab55d_c_d.jpg',
      category: 'ombre-brows',
      label: 'Ombre Powder Brows',
      testimonial: {
        text: "Absolutely love my new brows! They frame my face perfectly and look so natural.",
        author: "Sarah K."
      }
    },
    {
      beforeImage: 'https://live.staticflickr.com/65535/54366410465_36d16e6c76_c_d.jpg',
      afterImage: 'https://live.staticflickr.com/65535/54366242388_db37388bbe_c_d.jpg',
      category: 'ombre-brows',
      label: 'Ombre Powder Brows',
      testimonial: {
        text: "I'm so happy with the results! I can finally wake up with perfect brows.",
        author: "Michelle T."
      }
    },
    {
      beforeImage: 'https://live.staticflickr.com/65535/54366013651_f914f378af_c_d.jpg',
      afterImage: 'https://live.staticflickr.com/65535/54366410490_6e3bac2287_c_d.jpg',
      category: 'corrections',
      label: 'Corrections',
      testimonial: {
        text: "Thank you for fixing my botched brows. You're truly an artist!",
        author: "Jessica R."
      }
    },
    {
      beforeImage: 'https://live.staticflickr.com/65535/54366013656_643067f7b0_c_d.jpg',
      afterImage: 'https://live.staticflickr.com/65535/54366410485_9d137ccfb4_c_d.jpg',
      category: 'touch-ups',
      label: 'Touch-Ups',
      testimonial: {
        text: "The refresh looks amazing, even better than the first time!",
        author: "Amanda P."
      }
    },
    {
      beforeImage: 'https://live.staticflickr.com/65535/54366236564_a0f3a59599_c_d.jpg',
      afterImage: 'https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg',
      category: 'ombre-brows',
      label: 'Ombre Powder Brows',
      testimonial: {
        text: "My confidence has soared since getting my brows done here.",
        author: "Kate M."
      }
    },
    {
      beforeImage: 'https://live.staticflickr.com/65535/54408289026_3826bdb05b_c_d.jpg',
      afterImage: 'https://live.staticflickr.com/65535/54408668740_7465ce5ee8_c_d.jpg',
      category: 'corrections',
      label: 'Corrections',
      testimonial: {
        text: "After three failed attempts elsewhere, I finally have brows I love!",
        author: "Nicole S."
      }
    },
    {
      beforeImage: 'https://live.staticflickr.com/65535/54408533403_ffd6a50432_c_d.jpg',
      afterImage: 'https://live.staticflickr.com/65535/54408670015_5b248eb7d2_c_d.jpg',
      category: 'nano-brows',
      label: 'Nano Brows',
      testimonial: {
        text: "The precision and attention to detail is remarkable. Best brows ever!",
        author: "Rachel L."
      }
    },
    {
      beforeImage: 'https://live.staticflickr.com/65535/54408702135_e8d00acc8f_c_d.jpg',
      afterImage: 'https://live.staticflickr.com/65535/54408565368_8a48233c1c_c_d.jpg',
      category: 'nano-brows',
      label: 'Nano Brows',
      testimonial: {
        text: "These brows have changed my morning routine completely. So natural!",
        author: "Emily W."
      }
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openModal = (item: typeof galleryItems[0], index: number) => {
    setSelectedImage(item);
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
    setZoomLevel(1);
    document.body.style.overflow = 'auto';
  };

  const navigateGallery = (direction: 'next' | 'prev') => {
    if (!filteredItems.length) return;
    
    setZoomLevel(1); // Reset zoom when changing images
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const toggleZoom = () => {
    setZoomLevel(zoomLevel === 1 ? 2 : 1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      
      switch(e.key) {
        case 'ArrowRight':
          navigateGallery('next');
          break;
        case 'ArrowLeft':
          navigateGallery('prev');
          break;
        case 'Escape':
          closeModal();
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, currentImageIndex, filteredItems]);

  // Get stats for categories
  const getCategoryCount = (categoryId: string) => {
    return galleryItems.filter(item => categoryId === 'all' || item.category === categoryId).length;
  };

  // Testimonials for hero section
  const testimonials = [
    {
      text: "The experience was fantastic from start to finish. My brows are perfect now!",
      author: "Jennifer K.",
      rating: 5
    },
    {
      text: "After years of struggling with thin brows, I finally have the perfect shape and fullness.",
      author: "Stephanie L.",
      rating: 5
    },
    {
      text: "Worth every penny! I get compliments on my brows all the time now.",
      author: "Maria R.",
      rating: 5
    }
  ];

  // Instagram feed state
  const [instagramPosts, setInstagramPosts] = useState<any[]>([]);
  const [instagramLoading, setInstagramLoading] = useState(true);
  const [instagramError, setInstagramError] = useState<string | null>(null);
  
  // Fetch Instagram posts
  useEffect(() => {
    const fetchInstagram = async () => {
      try {
        setInstagramLoading(true);
        setInstagramError(null);
        
        // Get Instagram token from environment variables
        const token = process.env.REACT_APP_INSTAGRAM_TOKEN;
        
        if (!token) {
          setInstagramError('Instagram API token not found');
          setInstagramLoading(false);
          return;
        }
        
        const posts = await fetchInstagramMedia(token);
        setInstagramPosts(posts);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        setInstagramError('Failed to load Instagram posts');
      } finally {
        setInstagramLoading(false);
      }
    };
    
    fetchInstagram();
  }, []);

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Before & After Gallery | Brow Artistry Transformations</title>
        <meta name="description" content="Browse our stunning before and after permanent makeup transformations. See real results from our ombre powder brows, nano brows, corrections, and touch-ups." />
        <meta name="keywords" content="permanent makeup gallery, PMU before and after, ombre brows results, microblading results, eyebrow transformations" />
        <meta property="og:title" content="Brow Transformation Gallery | Permanent Makeup Results" />
        <meta property="og:description" content="See the dramatic difference our permanent makeup services can make. Browse our gallery of real client transformations." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section with Enhanced Design */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F0E4D8] to-[#F9F7F5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-2 text-[#2D2D2B]">
              Transformation Gallery
            </h1>
            <div className="w-24 h-1 bg-[#E6DAD2] mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto">
              Witness the artistry of our permanent makeup through stunning before & after results
            </p>
          </AnimatedSection>
          
          {/* Testimonial Carousel */}
          <AnimatedSection delay={0.2} className="max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg shadow-soft">
              <div className="flex items-center justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="#F0B67F" color="#F0B67F" className="mx-0.5" />
                ))}
              </div>
              <div className="text-center italic text-[#2D2D2B]/80">
                "{testimonials[0].text}"
              </div>
              <div className="mt-3 text-center font-medium text-sm text-[#2D2D2B]">
                — {testimonials[0].author}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Gallery */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          {/* Enhanced Filters */}
          <AnimatedSection className="mb-12">
            <div className="flex justify-center mb-4">
              <div className="inline-block bg-white p-1.5 rounded-full shadow-soft">
                <div className="flex flex-wrap justify-center gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center ${
                        activeFilter === filter.id
                          ? 'bg-[#2D2D2B] text-white shadow-inner'
                          : 'bg-transparent text-[#2D2D2B] hover:bg-[#E6DAD2]/50'
                      }`}
                      aria-label={`Filter by ${filter.name}`}
                    >
                      <span className="mr-1.5">{filter.icon}</span>
                      <span>{filter.name}</span>
                      <span className="ml-2 bg-[#2D2D2B]/10 text-xs px-2 py-0.5 rounded-full">
                        {getCategoryCount(filter.id)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Gallery Grid with Animations */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <AnimatedSection key={index} delay={index % 3 * 0.1}>
                  <EnhancedGalleryItem
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    category={item.label}
                    onClick={() => openModal(item, index)}
                    testimonial={item.testimonial}
                  />
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state if no results */}
          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-2">No results found</h3>
              <p className="text-[#2D2D2B]/70">Try selecting a different category</p>
              <button 
                onClick={() => setActiveFilter('all')} 
                className="mt-4 px-4 py-2 bg-[#2D2D2B] text-white rounded-lg hover:bg-[#2D2D2B]/80 transition-colors"
              >
                View all work
              </button>
            </div>
          )}

          {/* Enhanced Modal */}
          <AnimatePresence>
            {modalOpen && selectedImage && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              >
                <div className="absolute top-4 right-4 z-30 flex gap-2">
                  <button
                    onClick={toggleZoom}
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
                    aria-label={zoomLevel > 1 ? "Zoom out" : "Zoom in"}
                  >
                    {zoomLevel > 1 ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
                    aria-label="Close gallery"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                {/* Navigation buttons */}
                <button
                  onClick={() => navigateGallery('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors z-30"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={() => navigateGallery('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors z-30"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                >
                  <div className="p-6 border-b border-[#E6DAD2]">
                    <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B]">
                      {selectedImage.label}
                    </h3>
                    <div className="text-sm text-[#2D2D2B]/60 mt-1">
                      Image {currentImageIndex + 1} of {filteredItems.length}
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-auto relative">
                    <div 
                      className={`w-full h-full transition-transform duration-300 flex flex-col md:flex-row ${
                        zoomLevel > 1 ? 'cursor-move' : ''
                      }`}
                    >
                      <div className="flex-1 h-[300px] md:h-auto min-h-[300px] md:min-h-0 relative">
                        <div 
                          className={`w-full h-full transition-transform duration-300 ${
                            zoomLevel > 1 ? 'scale-150 origin-center' : 'scale-100'
                          }`}
                        >
                          <BeforeAfterSlider 
                            beforeImage={selectedImage.beforeImage} 
                            afterImage={selectedImage.afterImage}
                            beforeLabel="Before"
                            afterLabel="After"
                          />
                        </div>
                      </div>
                      
                      {selectedImage.testimonial && (
                        <div className="md:w-64 flex-shrink-0 p-6 bg-[#F9F7F5] border-t md:border-t-0 md:border-l border-[#E6DAD2]">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-[#E6DAD2] flex items-center justify-center mr-3">
                              <Quote size={16} className="text-[#2D2D2B]/40" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-[#2D2D2B]">Client Testimonial</div>
                              <div className="flex mt-1">
                                {[1, 2, 3, 4, 5].map(star => (
                                  <Star key={star} size={12} fill="#F0B67F" color="#F0B67F" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-[#2D2D2B]/80 italic mb-2">"{selectedImage.testimonial.text}"</p>
                          <p className="text-xs font-medium text-[#2D2D2B]">— {selectedImage.testimonial.author}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6 border-t border-[#E6DAD2] text-center">
                    <Link to="/booking" className="btn bg-[#2D2D2B] hover:bg-[#2D2D2B]/80 text-white">
                      Book This Service
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Instagram Feed - Updated with live data */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title text-[#2D2D2B]">Follow Our Journey</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Stay updated with our latest work on Instagram
            </p>
          </AnimatedSection>

          {instagramLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader size={32} className="text-[#2D2D2B]/50 animate-spin" />
              <span className="ml-2 text-[#2D2D2B]/70">Loading Instagram feed...</span>
            </div>
          ) : instagramError ? (
            <div className="text-center py-12">
              <p className="text-[#2D2D2B]/70 mb-4">{instagramError}</p>
              <a 
                href="https://www.instagram.com/browsby.mugi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn border-[#2D2D2B] text-[#2D2D2B] hover:bg-[#2D2D2B]/5 inline-flex items-center"
              >
                <Instagram size={18} className="mr-2" />
                Visit Our Instagram
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {instagramPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index % 4 * 0.1}>
                  <a 
                    href={post.permalink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg transition-all duration-300 hover:opacity-90 relative group aspect-square"
                  >
                    <img 
                      src={getMediaUrl(post)}
                      alt={post.caption ? post.caption.slice(0, 50) + "..." : "Instagram post"} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Instagram size={24} className="text-white" />
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          )}

          <AnimatedSection className="text-center mt-8">
            <a 
              href="https://www.instagram.com/browsby.mugi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn border-[#2D2D2B] text-[#2D2D2B] hover:bg-[#2D2D2B]/5 inline-flex items-center"
            >
              <Instagram size={18} className="mr-2" />
              Follow @browsby.mugi
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block text-[#E6DAD2] font-light tracking-wider mb-4 uppercase text-sm">Get Started</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6 leading-tight">
                Ready to Transform Your Brows?
              </h2>
              <p className="text-lg text-[#F9F7F5]/90 mb-10 max-w-2xl mx-auto">
                Book your consultation today and take the first step towards effortlessly beautiful brows that enhance your natural features.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link to="/booking" className="btn bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-medium transition-all duration-300 transform hover:translate-y-[-2px]">
                  Book Now
                </Link>
                <Link to="/contact" className="btn bg-transparent border border-[#F9F7F5] hover:bg-white/10 text-white transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;