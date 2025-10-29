import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Nano Brows vs Microblading: A Comprehensive Comparison Guide",
      slug: "nano-brows-vs-microblading-comparison", 
      excerpt: "Discover the key differences between nano brows and microblading techniques to help you make an informed decision for your perfect brow transformation.",
      metaDescription: "Compare nano brows and microblading techniques side by side. Learn about healing time, pain levels, longevity, and which technique is best for your skin type.",
      image: "https://live.staticflickr.com/65535/54364179271_ab1319693c_o_d.jpg",
      alt: "Side by side comparison of nano brows and microblading results",
      category: "Techniques",
      tags: ["nano brows", "microblading", "PMU comparison", "permanent makeup"],
      author: "Jessica Anderson",
      authorTitle: "Master PMU Artist",
      date: "March 1, 2025",
      readTime: "8 min read",
      featured: true,
      content: `## Introduction
Eyebrows frame the face, define expressions, and enhance natural beauty. With semi-permanent makeup trends on the rise, microblading and nano brows have emerged as leading techniques for achieving flawless, low-maintenance brows. But how do these methods differ, and which is right for you? This guide breaks down their tools, processes, results, and more to help you choose confidently.

## What is Microblading?
### Procedure:
Microblading uses a handheld tool with ultra-fine needles to manually etch hair-like strokes into the epidermis (upper skin layer). Pigment is deposited to mimic natural brow hairs.

### Ideal Candidates:
- Those with normal to dry skin.
- Individuals seeking a soft, natural look.
- People wanting semi-permanent results (1–2 years).

### Pros:
- Natural, feathery appearance.
- Less invasive than traditional tattooing.
- Customizable shape and pigment.

### Cons:
- May blur or fade faster on oily skin.
- Requires touch-ups every 12–18 months.
- Slight discomfort during the procedure.

## What are Nano Brows?
### Procedure:
Nano brows utilize a digital machine with a single needle to implant pigment into the dermis (deeper skin layer). The technique allows for hyper-precise, hair-like strokes or shading.

### Ideal Candidates:
- All skin types, including oily or mature skin.
- Those seeking longer-lasting results (2–3 years).
- Individuals desiring detailed, defined brows.

### Pros:
- Superior precision and consistency.
- Longer-lasting than microblading.
- Suitable for sensitive or problematic skin.

### Cons:
- Typically more expensive.
- Requires a highly skilled technician.
- Slightly longer procedure time.

## Nano Brows vs Microblading: Side-by-Side Comparison

| Factor | Microblading | Nano Brows |
|--------|-------------|------------|
| Tool | Manual handheld blade | Digital machine with a single needle |
| Technique | Hand-drawn strokes | Machine-assisted precision |
| Pain Level | Moderate (topical numbing used) | Mild to moderate (numbing applied) |
| Healing Time | 7–14 days (scabbing common) | 7–10 days (less scabbing) |
| Longevity | 1–2 years | 2–3 years |
| Skin Suitability | Best for normal/dry skin | Works for all skin types, including oily |
| Cost | $300–$800 | $500–$1,200+ |

## Which Should You Choose? Key Considerations

- **Skin Type**: Oily or acne-prone skin? Nano brows' deeper pigment retention makes them a better choice.
- **Desired Look**: Prefer soft, natural brows? Microblading excels here. For defined, intricate strokes, opt for nano.
- **Budget**: Microblading is more affordable upfront, but nano's longevity may offer better value over time.
- **Pain Tolerance**: Both use numbing agents, but nano's machine may cause less tugging sensation.
- **Maintenance**: Nano brows require fewer touch-ups, ideal for low-maintenance lifestyles.

## Aftercare Tips for Both Techniques

1. Avoid water, sweating, and makeup on brows for 7–10 days.
2. Apply recommended ointments to aid healing.
3. Skip sun exposure and retinoids until fully healed.
4. Schedule a touch-up 4–6 weeks post-procedure.

## Final Thoughts

Both nano brows and microblading deliver stunning, natural-looking results, but their differences in technique, cost, and longevity matter. If you prioritize precision and durability, nano brows are worth the investment. For a budget-friendly, natural option (and non-oily skin), microblading remains a classic choice.

Always consult a certified, experienced artist and review their portfolio before committing. Your perfect brows are just a session away!`
    },
    {
      id: 2,
      title: "Ombre Powder Brows: Complete Pre and Post-Procedure Guide",
      slug: "ombre-powder-brows-complete-guide",
      excerpt: "Everything you need to know about ombre powder brows - from preparation to aftercare. Make your appointment a success with our expert advice.",
      metaDescription: "Learn what to expect before, during and after your ombre powder brows procedure. Expert tips on preparation, healing process, and maintenance for lasting results.",
      image: "https://live.staticflickr.com/65535/54364396583_48d38e3d93_o_d.jpg",
      alt: "Beautiful ombre powder brows result on client",
      category: "Guides",
      tags: ["ombre brows", "powder brows", "PMU aftercare", "brow transformation"],
      author: "Jessica Anderson",
      authorTitle: "Master PMU Artist",
      date: "February 15, 2025",
      readTime: "10 min read",
      featured: true
    },
    {
      id: 3,
      title: "The Science of PMU Pigments: Why Quality Makes All the Difference",
      slug: "pmu-pigment-science-quality-importance",
      excerpt: "Learn about the composition of permanent makeup pigments and why investing in premium, medical-grade products is essential for safe, long-lasting results.",
      metaDescription: "Discover the science behind PMU pigments and how they affect your results. Learn about ingredients, safety standards, and why premium pigments are worth the investment.",
      image: "https://live.staticflickr.com/65535/54364392854_9d155b0510_o_d.png",
      alt: "Professional PMU pigments used in permanent makeup procedures",
      category: "Education",
      tags: ["PMU pigments", "permanent makeup", "pigment quality", "medical-grade pigments"],
      author: "Jessica Anderson",
      authorTitle: "Master PMU Artist",
      date: "January 28, 2025",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 4,
      title: "PMU Healing Timeline: Week-by-Week Recovery Process Explained",
      slug: "pmu-healing-timeline-week-by-week",
      excerpt: "A comprehensive guide to the permanent makeup healing journey - what to expect each week, how to care for your PMU, and when to schedule touch-ups.",
      metaDescription: "Follow our detailed PMU healing timeline to understand what happens during each phase of recovery. Expert tips for managing the healing process and achieving optimal results.",
      image: "https://live.staticflickr.com/65535/54364170391_5f7424c0b6_o_d.jpg",
      alt: "Healing stages of permanent makeup procedure",
      category: "Aftercare",
      tags: ["PMU healing", "aftercare", "healing timeline", "permanent makeup recovery"],
      author: "Jessica Anderson",
      authorTitle: "Master PMU Artist",
      date: "January 10, 2025",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "Finding Your Perfect Brow Shape: Face Mapping Techniques for Flattering Results",
      slug: "perfect-brow-shape-face-mapping-guide",
      excerpt: "Master the art of face mapping to determine your ideal brow shape. Learn how facial proportions influence brow design for harmonious, flattering results.",
      metaDescription: "Learn professional face mapping techniques to find your perfect brow shape. Discover how your unique facial structure should guide your brow design for the most flattering look.",
      image: "https://live.staticflickr.com/65535/54363151472_699bd8a642_o_d.jpg",
      alt: "Face mapping demonstration for perfect brow shape",
      category: "Design",
      tags: ["brow mapping", "face shape", "brow design", "golden ratio"],
      author: "Jessica Anderson",
      authorTitle: "Master PMU Artist",
      date: "December 20, 2024",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 6,
      title: "PMU Myths vs. Facts: What Every Client Needs to Know",
      slug: "pmu-myths-versus-facts-expert-guide",
      excerpt: "A professional PMU artist debunks common misconceptions about permanent makeup, helping you make informed decisions about your beauty treatments.",
      metaDescription: "Separate PMU facts from fiction with our expert guide. Learn the truth about pain, longevity, touch-ups, and other common permanent makeup misconceptions.",
      image: "https://live.staticflickr.com/65535/54363190627_a16b921317_o_d.jpg",
      alt: "Before and after permanent makeup showing natural-looking results",
      category: "Education",
      tags: ["PMU myths", "permanent makeup facts", "microblading truth", "PMU misconceptions"],
      author: "Jessica Anderson",
      authorTitle: "Master PMU Artist",
      date: "November 30, 2024",
      readTime: "8 min read",
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
        <meta name="description" content="Expert insights on permanent makeup techniques, aftercare, and beauty trends from professional PMU artists. Learn about microblading, nano brows, powder brows and more." />
        <meta name="keywords" content="permanent makeup, PMU, microblading, nano brows, ombre brows, powder brows, eyebrow tattooing, beauty blog" />
        <link rel="canonical" href="https://yourdomain.com/blog" />
        <meta property="og:title" content={getPageTitle()} />
        <meta property="og:description" content="Expert insights on permanent makeup techniques, aftercare, and beauty trends from professional PMU artists." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/blog" />
        <meta property="og:image" content="https://yourdomain.com/images/blog-social-share.jpg" />
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
              {/* Author Profile */}
              <AnimatedSection delay={0.1}>
                <div className="bg-[#F9F7F5] p-6 rounded-lg shadow-soft mb-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://live.staticflickr.com/65535/54363190627_a16b921317_o_d.jpg" 
                      alt="Jessica Anderson - PMU Artist" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-[#2D2D2B] font-cormorant">Jessica Anderson</h3>
                      <p className="text-sm text-[#2D2D2B]/70">Master PMU Artist & Educator</p>
                    </div>
                  </div>
                  <p className="text-[#2D2D2B]/80 text-sm mb-4">
                    With over 8 years of experience in permanent makeup, Jessica shares her expertise, industry insights, and professional tips on this blog.
                  </p>
                  <Link to="/about" className="text-[#2D2D2B] font-medium flex items-center text-sm group">
                    <span>Read more about Jessica</span>
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