import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Nano Brows vs Microblading: Which Lasts Longer in DMV Humidity? (523+ Procedures Analyzed)",
      slug: "nano-brows-vs-microblading-comparison", 
      excerpt: "After performing 523+ procedures in Northern Virginia's humid climate, here's what I've seen firsthand about how nano brows and microblading actually hold up.",
      metaDescription: "Licensed VA artist compares nano brows vs microblading with data from 523+ procedures. See which technique lasts longer in DMV humidity, real complication rates, and healed results.",
      image: "https://live.staticflickr.com/65535/54364179271_ab1319693c_o_d.jpg",
      alt: "Nano brows vs microblading comparison showing healed results at Ink Mugi in Annandale VA",
      category: "Techniques",
      tags: ["nano brows", "microblading", "PMU comparison", "permanent makeup", "DMV permanent makeup", "Northern Virginia PMU"],
      author: "Mugi",
      authorTitle: "Licensed Permanent Cosmetic Tattooer",
      date: "March 1, 2025",
      readTime: "10 min read",
      featured: true,
      content: `## Why DMV Climate Changes the Equation

After performing 523+ procedures in Northern Virginia, I've learned that our humid summers (70–80% humidity, 90°F+) change everything about how semi-permanent brow techniques perform. Humidity accelerates pigment migration, sweat production on the brow bone increases 2–3x, and UV exposure during our long summers fades pigment faster.

## Nano Brows: What I've Seen in Practice

Nano brows use a digital PMU machine with a single ultra-fine needle. In my practice, **92% of nano brow clients retain strong color at their 6-week check-in** — even through DMV summers. The deeper pigment placement in the mid-dermis makes all the difference.

## Why I Don't Offer Microblading

Microblading uses manual blades to scratch the epidermis (upper skin layer). After analyzing my outcomes data, I focus exclusively on machine-based techniques because:

- **DMV humidity** causes microblading strokes to blur faster
- My **0.19% complication rate** is 13x safer than the industry average of 2.5%
- Machine precision eliminates the variability of hand pressure
- Less skin trauma = faster healing, prettier results

## Side-by-Side Comparison

| Factor | Nano Brows | Microblading |
|--------|------------|--------------|
| **Tool** | Digital machine, single needle | Manual blade, multiple needles |
| **Humidity Retention** | Excellent | Fair — strokes can blur |
| **Skin Types** | All types including oily/mature | Best for dry/normal only |
| **Longevity** | 2–3 years | 1–1.5 years in our climate |
| **Complication Rate** | 0.19% (my practice) | Industry avg: 2.5% |
| **Cost at Ink Mugi** | Starting at $600 | Not offered |

## DMV-Specific Aftercare

- **Days 1–7**: Keep brows completely dry. In summer, blot sweat immediately
- **Days 7–14**: Light moisturizing. Avoid pools, saunas, direct sun
- **Weeks 3–6**: True color settles. Apply SPF 30+ on brows when outdoors
- **Long-term**: Annual SPF protection extends results by 6–12 months

## The Bottom Line

If you're in the DMV and considering semi-permanent brows, nano brows (or ombre powder brows) will outperform microblading in our climate. That's not marketing — it's what I've documented across 523+ procedures.

**Ready to see what's possible?** View my healed results gallery or book a free consultation. Virginia License #1231002471 · (571) 283-8228 · Annandale, VA`
    },
    {
      id: 2,
      title: "Ombre Powder Brows: What 523+ Procedures Taught Me About Healing, Cost & Results",
      slug: "ombre-powder-brows-complete-guide",
      excerpt: "I've performed 523+ ombre powder brow procedures in Annandale, VA. Here's my honest guide to preparation, pain, healing stages, and what results actually look like at 6 weeks.",
      metaDescription: "Licensed VA artist shares firsthand ombre powder brows guide based on 523+ procedures. Real healing timeline, honest cost breakdown, DMV-specific aftercare, and healed photos.",
      image: "https://live.staticflickr.com/65535/54364396583_48d38e3d93_o_d.jpg",
      alt: "Healed ombre powder brows result showing soft gradient at Ink Mugi Annandale VA",
      category: "Guides",
      tags: ["ombre brows", "powder brows", "PMU aftercare", "brow transformation", "ombre brows cost", "ombre brows healing"],
      author: "Mugi",
      authorTitle: "Licensed Permanent Cosmetic Tattooer",
      date: "February 15, 2025",
      readTime: "12 min read",
      featured: true
    },
    {
      id: 3,
      title: "PMU Pigments: Why I Switched to Vegan & What It Means for Your Results",
      slug: "pmu-pigment-science-quality-importance",
      excerpt: "Not all PMU pigments are equal. After testing dozens of brands across 523+ procedures, here's why I exclusively use EU-compliant vegan pigments — and why you should care.",
      metaDescription: "Licensed VA PMU artist explains the science behind pigment quality after 523+ procedures. Learn why vegan, EU-compliant pigments heal better, last longer, and never turn orange.",
      image: "https://live.staticflickr.com/65535/54364392854_9d155b0510_o_d.png",
      alt: "Premium vegan PMU pigments used at Ink Mugi studio in Annandale VA",
      category: "Education",
      tags: ["PMU pigments", "permanent makeup", "pigment quality", "vegan pigments", "PMU safety"],
      author: "Mugi",
      authorTitle: "Licensed Permanent Cosmetic Tattooer",
      date: "January 28, 2025",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 4,
      title: "PMU Healing Timeline: What Actually Happens Week by Week (With Real Data)",
      slug: "pmu-healing-timeline-week-by-week",
      excerpt: "The healing process scares more people out of PMU than anything else. Here's an honest, data-backed week-by-week timeline from 523+ procedures.",
      metaDescription: "Week-by-week PMU healing timeline based on 523+ real procedures. Licensed VA artist explains each healing phase honestly, including the scary ghost phase.",
      image: "https://live.staticflickr.com/65535/54364170391_5f7424c0b6_o_d.jpg",
      alt: "Week by week healing stages of ombre powder brows at Ink Mugi",
      category: "Aftercare",
      tags: ["PMU healing", "aftercare", "healing timeline", "permanent makeup recovery", "powder brows healing"],
      author: "Mugi",
      authorTitle: "Licensed Permanent Cosmetic Tattooer",
      date: "January 10, 2025",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 5,
      title: "How to Choose the Perfect Brow Shape for Your Face (Pro Mapping Guide)",
      slug: "perfect-brow-shape-face-mapping-guide",
      excerpt: "As a licensed PMU artist with 523+ procedures, here's how I use facial mapping and the golden ratio to design brows that complement every face shape.",
      metaDescription: "Licensed PMU artist reveals the brow mapping process used in 523+ procedures. Learn how face shape, golden ratio, and bone structure determine your perfect brow shape.",
      image: "https://live.staticflickr.com/65535/54363151472_699bd8a642_o_d.jpg",
      alt: "Face mapping demonstration for perfect brow shape at Ink Mugi",
      category: "Design",
      tags: ["brow mapping", "face shape", "brow design", "golden ratio", "brow shape guide"],
      author: "Mugi",
      authorTitle: "Licensed Permanent Cosmetic Tattooer",
      date: "December 20, 2024",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 6,
      title: "12 PMU Myths I Hear Every Week (And the Data That Proves Them Wrong)",
      slug: "pmu-myths-versus-facts-expert-guide",
      excerpt: "From 'permanent makeup looks fake' to 'it's basically a tattoo' — I've heard every myth after 523+ procedures. Here are the facts, backed by actual data.",
      metaDescription: "Licensed VA PMU artist debunks 12 common permanent makeup myths with real data from 523+ procedures. Facts about pain, fading, safety, and what PMU actually looks like healed.",
      image: "https://live.staticflickr.com/65535/54363190627_a16b921317_o_d.jpg",
      alt: "Before and after healed permanent makeup showing natural results at Ink Mugi",
      category: "Education",
      tags: ["PMU myths", "permanent makeup facts", "microblading truth", "PMU misconceptions", "permanent makeup safety"],
      author: "Mugi",
      authorTitle: "Licensed Permanent Cosmetic Tattooer",
      date: "November 30, 2024",
      readTime: "10 min read",
      featured: false
    }
  ];
  
  // Enhanced categories with count information
  const categories = [
    { name: "Techniques", count: blogPosts.filter(post => post.category === "Techniques").length },
    { name: "Guides", count: blogPosts.filter(post => post.category === "Guides").length },
    { name: "Aftercare", count: blogPosts.filter(post => post.category === "Aftercare").length },
    { name: "Education", count: blogPosts.filter(post => post.category === "Education").length },
    { name: "Design", count: blogPosts.filter(post => post.category === "Design").length },
    { name: "Industry News", count: blogPosts.filter(post => post.category === "Industry News").length }
  ];
  
  // All tags for tag cloud
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  // Enhanced filtering with category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !activeCategory || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const regularFilteredPosts = filteredPosts.filter(post => !post.featured || searchQuery || activeCategory);

  // For SEO purposes - dynamic page title based on active category or search
  const getPageTitle = () => {
    if (activeCategory) {
      return `${activeCategory} PMU Articles | Brow Artistry Blog`;
    }
    if (searchQuery) {
      return `Search Results for "${searchQuery}" | Brow Artistry Blog`;
    }
    return "Expert Permanent Makeup Insights | Brow Artistry Blog";
  };

  // Reset search when selecting a category for better UX
  const handleCategorySelect = (category: string) => {
    setSearchQuery('');
    setActiveCategory(category === activeCategory ? '' : category);
  };
  
  // Clear filters function
  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory('');
  };

  // Scroll to top on filter changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCategory]);

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content="Expert guides on ombre brows vs microblading, PMU healing timelines, cost breakdowns, and aftercare tips. Evidence-based insights from a licensed VA artist with 523+ procedures." />
        <meta name="keywords" content="permanent makeup blog, ombre brows vs microblading, nano brows cost, PMU healing timeline, powder brows aftercare, permanent makeup guide DMV" />
        <link rel="canonical" href="https://www.inkmugi.com/blog" />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content="Expert insights on permanent makeup techniques, aftercare, and beauty trends from professional PMU artists." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inkmugi.com/blog" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Permanent Makeup Insights
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto">
              Expert guides, tutorials, and industry knowledge to help you understand the world of PMU
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative max-w-2xl mx-auto mt-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-[#2D2D2B]/50" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border-2 border-[#2D2D2B]/20 rounded-lg focus:border-[#2D2D2B]/40 focus:ring-0 bg-white/80 backdrop-blur-sm text-[#2D2D2B] placeholder-[#2D2D2B]/50"
                placeholder="Search for techniques, tips, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog articles"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Active Filters Display */}
      {(searchQuery || activeCategory) && (
        <div className="bg-[#F9F7F5] py-4 border-b border-[#E6DAD2]">
          <div className="container-custom">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#2D2D2B]/70">Active filters:</span>
                {searchQuery && (
                  <span className="bg-[#E6DAD2] text-[#2D2D2B] text-sm px-3 py-1 rounded-full flex items-center">
                    Search: {searchQuery}
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="ml-2 hover:text-[#2D2D2B]/60"
                      aria-label="Clear search filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {activeCategory && (
                  <span className="bg-[#E6DAD2] text-[#2D2D2B] text-sm px-3 py-1 rounded-full flex items-center">
                    Category: {activeCategory}
                    <button 
                      onClick={() => setActiveCategory('')}
                      className="ml-2 hover:text-[#2D2D2B]/60"
                      aria-label="Clear category filter"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
              <button 
                onClick={clearFilters}
                className="text-sm text-[#2D2D2B]/70 hover:text-[#2D2D2B] underline"
                aria-label="Clear all filters"
              >
                Clear all filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Featured Posts */}
      {!searchQuery && !activeCategory && featuredPosts.length > 0 && (
        <section className="py-20 bg-[#F9F7F5]">
          <div className="container-custom">
            <AnimatedSection className="mb-10">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-cormorant font-medium text-[#2D2D2B] relative inline-block">
                  Featured Articles
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E6DAD2]"></span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <AnimatedSection key={post.id} delay={0.1}>
                  <article className="h-full">
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="block group h-full"
                      aria-label={`Read article: ${post.title}`}
                    >
                      <div className="bg-white rounded-lg overflow-hidden shadow-medium h-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                        <div className="relative h-64 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.alt} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#E6DAD2] text-[#2D2D2B] text-xs font-medium px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-4 text-sm text-[#2D2D2B]/70">
                            <div className="flex items-center mr-4">
                              <User size={14} className="mr-1" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center mr-4">
                              <Calendar size={14} className="mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock size={14} className="mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-medium text-[#2D2D2B] mb-3 font-cormorant line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-[#2D2D2B]/80 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center text-[#2D2D2B] font-medium">
                            <span>Read article</span>
                            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
            {/* Blog Posts Column */}
            <div className="md:col-span-2">
              <AnimatedSection className="mb-8">
                <h2 className="text-3xl font-cormorant font-medium text-[#2D2D2B] relative inline-block">
                  {searchQuery 
                    ? `Search Results for "${searchQuery}"` 
                    : activeCategory 
                      ? `${activeCategory} Articles` 
                      : 'Latest Articles'}
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E6DAD2]"></span>
                </h2>
              </AnimatedSection>

              {regularFilteredPosts.length > 0 ? (
                <div className="space-y-10">
                  {regularFilteredPosts.map((post, index) => (
                    <AnimatedSection key={post.id} delay={index * 0.1}>
                      <article>
                        <Link 
                          to={`/blog/${post.slug}`} 
                          className="block group" 
                          aria-label={`Read article: ${post.title}`}
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#F9F7F5] rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                            <div className="sm:col-span-1 h-48 sm:h-full">
                              <img 
                                src={post.image} 
                                alt={post.alt} 
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div className="sm:col-span-2 p-6">
                              <div className="flex flex-wrap items-center mb-3 text-sm text-[#2D2D2B]/70">
                                <span className="bg-[#E6DAD2]/70 text-[#2D2D2B] text-xs px-3 py-1 rounded-full mr-3">
                                  {post.category}
                                </span>
                                <div className="flex items-center mr-4">
                                  <User size={14} className="mr-1" />
                                  <span>{post.author}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                  <Calendar size={14} className="mr-1" />
                                  <span>{post.date}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock size={14} className="mr-1" />
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                              <h3 className="text-xl font-medium text-[#2D2D2B] mb-2 font-cormorant group-hover:text-[#2D2D2B]/80 transition-colors">
                                {post.title}
                              </h3>
                              <p className="text-[#2D2D2B]/80 mb-4 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.slice(0, 3).map((tag, i) => (
                                  <span key={i} className="text-xs text-[#2D2D2B]/60 flex items-center">
                                    <Tag size={12} className="mr-1" />
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center text-[#2D2D2B] font-medium">
                                <span>Read article</span>
                                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </article>
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center bg-[#F9F7F5] rounded-lg">
                  <h3 className="text-xl text-[#2D2D2B]">No articles found matching your criteria</h3>
                  <p className="text-[#2D2D2B]/70 mt-2">Try adjusting your search terms or browse other categories</p>
                  <button 
                    onClick={clearFilters}
                    className="mt-4 px-4 py-2 bg-[#E6DAD2] text-[#2D2D2B] rounded-md hover:bg-[#E6DAD2]/80 transition-colors"
                  >
                    View all articles
                  </button>
                </div>
              )}
              
              {/* Pagination for future implementation */}
              {regularFilteredPosts.length > 6 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-[#F9F7F5] text-[#2D2D2B] rounded-md hover:bg-[#E6DAD2]/80 transition-colors">
                      1
                    </button>
                    <button className="px-4 py-2 bg-[#F9F7F5] text-[#2D2D2B] rounded-md hover:bg-[#E6DAD2]/80 transition-colors">
                      2
                    </button>
                    <button className="px-4 py-2 bg-[#F9F7F5] text-[#2D2D2B] rounded-md hover:bg-[#E6DAD2]/80 transition-colors">
                      3
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Sidebar */}
            <div className="md:col-span-1">
              {/* Book Consultation CTA */}
              <AnimatedSection delay={0.05}>
                <div className="bg-[#2D2D2B] p-6 rounded-lg shadow-soft mb-8 text-white">
                  <h3 className="text-xl font-medium mb-3 font-cormorant">Ready for Your Brow Transformation?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    523+ procedures. 0.19% complication rate. Virginia-licensed and insured. See why clients across the DMV trust Ink Mugi.
                  </p>
                  <Link 
                    to="/booking" 
                    className="block w-full text-center bg-[#E6DAD2] text-[#2D2D2B] font-medium py-3 px-4 rounded-md hover:bg-[#F0E4D8] transition-colors mb-3"
                  >
                    Book Free Consultation
                  </Link>
                  <div className="flex items-center justify-center gap-4 mt-3">
                    <Link to="/gallery" className="text-white/70 hover:text-white text-xs underline transition-colors">View Results</Link>
                    <span className="text-white/30">|</span>
                    <Link to="/services" className="text-white/70 hover:text-white text-xs underline transition-colors">See Pricing</Link>
                  </div>
                </div>
              </AnimatedSection>

              {/* Author Profile */}
              <AnimatedSection delay={0.1}>
                <div className="bg-[#F9F7F5] p-6 rounded-lg shadow-soft mb-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" 
                      alt="Mugi - Licensed Permanent Cosmetic Tattooer" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-[#2D2D2B] font-cormorant">Mugi</h3>
                      <p className="text-sm text-[#2D2D2B]/70">Licensed Permanent Cosmetic Tattooer</p>
                    </div>
                  </div>
                  <p className="text-[#2D2D2B]/80 text-sm mb-2">
                    Virginia License #1231002471. Specializing in natural ombre powder brows with Korean precision techniques. 523+ procedures documented with clinical data tracking.
                  </p>
                  <p className="text-[#2D2D2B]/60 text-xs mb-4">
                    Bloodborne Pathogens Certified · OSHA Compliant · Premium Vegan Pigments
                  </p>
                  <Link to="/about" className="text-[#2D2D2B] font-medium flex items-center text-sm group">
                    <span>Meet Mugi</span>
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>

              {/* Categories */}
              <AnimatedSection delay={0.2}>
                <div className="bg-[#F9F7F5] p-6 rounded-lg shadow-soft mb-8">
                  <h3 className="text-xl font-medium text-[#2D2D2B] mb-4 font-cormorant">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button 
                          onClick={() => handleCategorySelect(category.name)}
                          className={`flex items-center justify-between w-full p-2 ${activeCategory === category.name ? 'bg-[#E6DAD2] text-[#2D2D2B] font-medium' : 'text-[#2D2D2B]/80 hover:bg-[#E6DAD2]/30'} rounded-md transition-all duration-200 text-left`}
                          aria-pressed={activeCategory === category.name}
                          aria-label={`Filter by ${category.name} category (${category.count} articles)`}
                        >
                          <span>{category.name}</span>
                          <span className="text-xs bg-[#2D2D2B]/10 px-2 py-1 rounded-full">{category.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Popular Tags */}
              <AnimatedSection delay={0.25}>
                <div className="bg-[#F9F7F5] p-6 rounded-lg shadow-soft mb-8">
                  <h3 className="text-xl font-medium text-[#2D2D2B] mb-4 font-cormorant">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag, index) => (
                      <button 
                        key={index}
                        onClick={() => setSearchQuery(tag)}
                        className="bg-[#E6DAD2]/50 text-[#2D2D2B] text-sm px-3 py-1 rounded-full hover:bg-[#E6DAD2]/70 transition-colors"
                        aria-label={`Filter by tag: ${tag}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;