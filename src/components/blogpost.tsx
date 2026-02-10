import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, ArrowRight, Phone, MapPin, Shield, Share2, ChevronRight, RefreshCw, List } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogData';
import ReactMarkdown from 'react-markdown';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);
  const [readProgress, setReadProgress] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [tocOpen, setTocOpen] = useState(true);

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById('article-content');
      if (!article) return;
      const totalHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY - article.offsetTop;
      const progress = Math.min(Math.max((scrollTop / (totalHeight - windowHeight)) * 100, 0), 100);
      setReadProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extract headings for Table of Contents
  const headings = useMemo(() => {
    if (!post) return [];
    const regex = /^#{2,3}\s+(.+)$/gm;
    const matches: { text: string; level: number; id: string }[] = [];
    let match;
    while ((match = regex.exec(post.content)) !== null) {
      const text = match[1].replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const level = match[0].startsWith('### ') ? 3 : 2;
      matches.push({ text, level, id });
    }
    return matches;
  }, [post]);

  // Word count for schema
  const wordCount = useMemo(() => {
    if (!post) return 0;
    return post.content.replace(/[#*|\-\[\]()]/g, ' ').split(/\s+/).filter(w => w.length > 0).length;
  }, [post]);

  // Share functions
  const shareUrl = post ? `https://www.inkmugi.com/blog/${post.slug}` : '';
  const shareTitle = post?.title || '';
  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'pinterest':
        url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareTitle)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        setShowShareMenu(false);
        return;
    }
    window.open(url, '_blank', 'width=600,height=400');
    setShowShareMenu(false);
  };

  if (!post) {
    return (
      <div className="pt-32 pb-20 container-custom text-center">
        <h1 className="text-2xl font-medium mb-4">Article not found</h1>
        <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="btn bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] px-6 py-2 rounded-md">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Ink Mugi PMU Blog</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta name="author" content={post.author} />
        <meta property="article:published_time" content={(() => { const d = new Date(post.date); return isNaN(d.getTime()) ? post.date : d.toISOString(); })()} />
        {post.lastUpdated && <meta property="article:modified_time" content={(() => { const d = new Date(post.lastUpdated); return isNaN(d.getTime()) ? post.lastUpdated : d.toISOString(); })()} />}
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag, i) => <meta key={i} property="article:tag" content={tag} />)}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://www.inkmugi.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Ink Mugi" />
        <link rel="canonical" href={`https://www.inkmugi.com/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.metaDescription,
            "image": {
              "@type": "ImageObject",
              "url": post.image,
              "width": 1200,
              "height": 630
            },
            "author": {
              "@type": "Person",
              "@id": "https://www.inkmugi.com/#mugi",
              "name": post.author,
              "jobTitle": post.authorTitle,
              "url": "https://www.inkmugi.com/about",
              "sameAs": ["https://www.inkmugi.com/about", "https://www.inkmugi.com/authority"],
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Professional License",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Virginia Department of Health Professions"
                }
              }
            },
            "publisher": {
              "@type": "Organization",
              "@id": "https://www.inkmugi.com/#business",
              "name": "Ink Mugi",
              "url": "https://www.inkmugi.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
              }
            },
            "datePublished": (() => {
              const d = new Date(post.date);
              return isNaN(d.getTime()) ? post.date : d.toISOString().split('T')[0];
            })(),
            "dateModified": (() => {
              const dateStr = post.lastUpdated || post.date;
              const d = new Date(dateStr);
              return isNaN(d.getTime()) ? dateStr : d.toISOString().split('T')[0];
            })(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.inkmugi.com/blog/${post.slug}`
            },
            "keywords": post.tags.join(', '),
            "articleSection": post.category,
            "wordCount": wordCount,
            "inLanguage": "en-US"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.inkmugi.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.inkmugi.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://www.inkmugi.com/blog/${post.slug}`
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div 
          className="h-full bg-[#2D2D2B] transition-all duration-150 ease-out"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-10 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection>
            {/* Visible Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-1 text-sm text-[#2D2D2B]/60">
                <li><Link to="/" className="hover:text-[#2D2D2B] transition-colors">Home</Link></li>
                <li><ChevronRight size={14} /></li>
                <li><Link to="/blog" className="hover:text-[#2D2D2B] transition-colors">Blog</Link></li>
                <li><ChevronRight size={14} /></li>
                <li className="text-[#2D2D2B]/80 truncate max-w-[200px] sm:max-w-none">{post.category}</li>
              </ol>
            </nav>

            <Link to="/blog" className="inline-flex items-center text-[#2D2D2B]/70 hover:text-[#2D2D2B] mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to all articles
            </Link>
            {/* Updated Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              {post.title}
            </h1>

            {/* Updated Subtitle */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 text-base text-[#2D2D2B]/70">
              <span className="bg-[#E6DAD2] text-[#2D2D2B] text-sm px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}, {post.authorTitle}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              {post.lastUpdated && post.lastUpdated !== post.date && (
                <div className="flex items-center text-sm text-[#2D2D2B]/60">
                  <RefreshCw size={14} className="mr-1" />
                  <span>Updated {post.lastUpdated}</span>
                </div>
              )}
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
              {/* Share Button */}
              <div className="relative">
                <button 
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-1 text-[#2D2D2B]/70 hover:text-[#2D2D2B] transition-colors"
                  aria-label="Share this article"
                >
                  <Share2 size={16} />
                  <span className="text-sm">Share</span>
                </button>
                {showShareMenu && (
                  <div className="absolute top-8 right-0 bg-white rounded-lg shadow-lg p-2 z-20 min-w-[140px] border border-[#E6DAD2]">
                    <button onClick={() => handleShare('facebook')} className="block w-full text-left px-3 py-2 text-sm hover:bg-[#F9F7F5] rounded">Facebook</button>
                    <button onClick={() => handleShare('twitter')} className="block w-full text-left px-3 py-2 text-sm hover:bg-[#F9F7F5] rounded">X (Twitter)</button>
                    <button onClick={() => handleShare('pinterest')} className="block w-full text-left px-3 py-2 text-sm hover:bg-[#F9F7F5] rounded">Pinterest</button>
                    <button onClick={() => handleShare('copy')} className="block w-full text-left px-3 py-2 text-sm hover:bg-[#F9F7F5] rounded">Copy Link</button>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8" id="article-content">
              <AnimatedSection>
                {/* Featured Image */}
                <div className="mb-10 rounded-lg overflow-hidden shadow-medium">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-auto"
                  />
                </div>

                {/* Table of Contents */}
                {headings.length > 3 && (
                  <div className="mb-10 bg-[#F9F7F5] rounded-lg border border-[#E6DAD2]/50 overflow-hidden">
                    <button 
                      onClick={() => setTocOpen(!tocOpen)}
                      className="flex items-center justify-between w-full p-4 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <List size={18} className="text-[#2D2D2B]/70" />
                        <span className="font-medium text-[#2D2D2B]">Table of Contents</span>
                        <span className="text-xs text-[#2D2D2B]/50">({headings.length} sections)</span>
                      </div>
                      <ChevronRight size={16} className={`text-[#2D2D2B]/50 transition-transform ${tocOpen ? 'rotate-90' : ''}`} />
                    </button>
                    {tocOpen && (
                      <div className="px-4 pb-4">
                        <nav aria-label="Table of contents">
                          <ol className="space-y-1">
                            {headings.map((heading, i) => (
                              <li key={i}>
                                <a
                                  href={`#${heading.id}`}
                                  className={`block py-1 text-sm text-[#2D2D2B]/70 hover:text-[#2D2D2B] transition-colors ${heading.level === 3 ? 'pl-4 text-xs' : ''}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById(heading.id);
                                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                  }}
                                >
                                  {heading.text}
                                </a>
                              </li>
                            ))}
                          </ol>
                        </nav>
                      </div>
                    )}
                  </div>
                )}

                {/* Updated Body Content */}
                <div className="prose prose-xl max-w-none">
                  <ReactMarkdown
                    components={{
                      h2: ({ children }) => {
                        const text = typeof children === 'string' ? children : 
                          Array.isArray(children) ? children.map(c => typeof c === 'string' ? c : '').join('') : '';
                        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                        return <h2 id={id} className="scroll-mt-24">{children}</h2>;
                      },
                      h3: ({ children }) => {
                        const text = typeof children === 'string' ? children : 
                          Array.isArray(children) ? children.map(c => typeof c === 'string' ? c : '').join('') : '';
                        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                        return <h3 id={id} className="scroll-mt-24">{children}</h3>;
                      },
                      a: ({ href, children }) => {
                        if (href?.startsWith('/')) {
                          return <Link to={href} className="text-[#2D2D2B] underline decoration-[#E6DAD2] underline-offset-2 hover:decoration-[#2D2D2B] transition-colors">{children}</Link>;
                        }
                        return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
                      }
                    }}
                  >{post.content}</ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-[#E6DAD2]">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-[#2D2D2B]/70">Tags:</span>
                    {post.tags.map((tag, i) => (
                      <Link
                        key={i}
                        to={`/blog?tag=${tag}`}
                        className="bg-[#E6DAD2]/50 text-[#2D2D2B]/80 hover:bg-[#E6DAD2] hover:text-[#2D2D2B] px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Post-Article CTA */}
                <div className="mt-12 bg-gradient-to-br from-[#2D2D2B] to-[#3D3D3B] rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-cormorant font-medium mb-3">Ready to See What's Possible?</h3>
                  <p className="text-white/80 mb-2 text-sm">
                    I've performed 523+ ombre powder brow procedures with a 0.19% complication rate — 13x safer than the industry average. Every technique I use is backed by clinical data and years of refined precision.
                  </p>
                  <p className="text-white/60 text-xs mb-6">
                    Virginia Licensed #1231002471 · Bloodborne Pathogens Certified · Premium Vegan Pigments
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to="/booking" 
                      className="flex-1 text-center bg-[#E6DAD2] text-[#2D2D2B] font-medium py-3 px-6 rounded-md hover:bg-[#F0E4D8] transition-colors"
                    >
                      Book Free Consultation
                    </Link>
                    <Link 
                      to="/gallery" 
                      className="flex-1 text-center border border-white/30 text-white font-medium py-3 px-6 rounded-md hover:bg-white/10 transition-colors"
                    >
                      View Healed Results
                    </Link>
                  </div>
                  <div className="flex items-center justify-center gap-6 mt-4 text-xs text-white/50">
                    <span className="flex items-center gap-1"><Phone size={12} /> (571) 283-8228</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> Annandale, VA</span>
                  </div>
                </div>

                {/* Internal Navigation */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link to="/services" className="bg-[#F9F7F5] rounded-lg p-4 hover:bg-[#E6DAD2]/30 transition-colors group">
                    <h4 className="font-medium text-[#2D2D2B] text-sm mb-1 group-hover:text-[#2D2D2B]/80">Our Services</h4>
                    <p className="text-xs text-[#2D2D2B]/60">Pricing, process & what's included</p>
                  </Link>
                  <Link to="/authority" className="bg-[#F9F7F5] rounded-lg p-4 hover:bg-[#E6DAD2]/30 transition-colors group">
                    <h4 className="font-medium text-[#2D2D2B] text-sm mb-1 group-hover:text-[#2D2D2B]/80">Research Hub</h4>
                    <p className="text-xs text-[#2D2D2B]/60">523+ procedures data & safety studies</p>
                  </Link>
                  <Link to="/faq" className="bg-[#F9F7F5] rounded-lg p-4 hover:bg-[#E6DAD2]/30 transition-colors group">
                    <h4 className="font-medium text-[#2D2D2B] text-sm mb-1 group-hover:text-[#2D2D2B]/80">FAQ</h4>
                    <p className="text-xs text-[#2D2D2B]/60">Cost, pain, healing & more</p>
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Book Consultation CTA */}
              <AnimatedSection delay={0.1}>
                <div className="bg-[#2D2D2B] p-6 rounded-lg shadow-soft mb-8 text-white sticky top-28">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield size={18} className="text-[#E6DAD2]" />
                    <span className="text-xs text-[#E6DAD2] font-medium uppercase tracking-wide">Licensed & Insured</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3 font-cormorant">Book Your Consultation</h3>
                  <p className="text-white/80 text-sm mb-4">
                    523+ procedures with a 0.19% complication rate. Virginia License #1231002471.
                  </p>
                  <Link 
                    to="/booking" 
                    className="block w-full text-center bg-[#E6DAD2] text-[#2D2D2B] font-medium py-3 px-4 rounded-md hover:bg-[#F0E4D8] transition-colors mb-3"
                  >
                    Book Free Consultation
                  </Link>
                  <div className="flex items-center justify-center gap-1 text-white/50 text-xs mt-2">
                    <Phone size={12} />
                    <span>(571) 283-8228</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Related Articles */}
              <AnimatedSection delay={0.2}>
                <div className="bg-[#F9F7F5] p-6 rounded-lg shadow-soft mb-8">
                  <h3 className="text-xl font-medium text-[#2D2D2B] mb-4 font-cormorant">Related Articles</h3>
                  <div className="space-y-4">
                    {blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3).map(relatedPost => (
                      <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="block group">
                        <div className="flex gap-3">
                          <div className="w-20 h-20 flex-shrink-0">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.alt}
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-[#2D2D2B] group-hover:text-[#2D2D2B]/70 transition-colors">
                              {relatedPost.title}
                            </h4>
                            <span className="text-xs text-[#2D2D2B]/60">{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {blogPosts.filter(p => p.id !== post.id && p.category === post.category).length === 0 && (
                      <div className="space-y-4">
                        {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(relatedPost => (
                          <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="block group">
                            <div className="flex gap-3">
                              <div className="w-20 h-20 flex-shrink-0">
                                <img
                                  src={relatedPost.image}
                                  alt={relatedPost.alt}
                                  className="w-full h-full object-cover rounded-md"
                                />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-[#2D2D2B] group-hover:text-[#2D2D2B]/70 transition-colors">
                                  {relatedPost.title}
                                </h4>
                                <span className="text-xs text-[#2D2D2B]/60">{relatedPost.readTime}</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link to="/blog" className="mt-4 inline-flex items-center text-[#2D2D2B] font-medium text-sm group">
                    <span>View all articles</span>
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>

              {/* Quick Links */}
              <AnimatedSection delay={0.3}>
                <div className="bg-[#F9F7F5] p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium text-[#2D2D2B] mb-4 font-cormorant">Explore Ink Mugi</h3>
                  <div className="space-y-2">
                    <Link to="/gallery" className="flex items-center justify-between p-2 rounded-md hover:bg-[#E6DAD2]/30 transition-colors text-sm text-[#2D2D2B]/80 hover:text-[#2D2D2B]">
                      <span>Before & After Gallery</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link to="/services" className="flex items-center justify-between p-2 rounded-md hover:bg-[#E6DAD2]/30 transition-colors text-sm text-[#2D2D2B]/80 hover:text-[#2D2D2B]">
                      <span>Services & Pricing</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link to="/authority" className="flex items-center justify-between p-2 rounded-md hover:bg-[#E6DAD2]/30 transition-colors text-sm text-[#2D2D2B]/80 hover:text-[#2D2D2B]">
                      <span>PMU Research Hub</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link to="/permanent-makeup-safety-dmv" className="flex items-center justify-between p-2 rounded-md hover:bg-[#E6DAD2]/30 transition-colors text-sm text-[#2D2D2B]/80 hover:text-[#2D2D2B]">
                      <span>Safety & Credentials</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link to="/faq" className="flex items-center justify-between p-2 rounded-md hover:bg-[#E6DAD2]/30 transition-colors text-sm text-[#2D2D2B]/80 hover:text-[#2D2D2B]">
                      <span>FAQ</span>
                      <ArrowRight size={14} />
                    </Link>
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

export default BlogPost;