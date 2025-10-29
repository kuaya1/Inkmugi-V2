import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet';
import { blogPosts } from '../data/blogData';
import ReactMarkdown from 'react-markdown';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

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
        <title>{post.title} | Brow Artistry Blog</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://yourdomain.com/blog/${post.slug}`} />
        <link rel="canonical" href={`https://yourdomain.com/blog/${post.slug}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-10 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection>
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
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <AnimatedSection>
                {/* Featured Image */}
                <div className="mb-10 rounded-lg overflow-hidden shadow-medium">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-auto"
                  />
                </div>

                {/* Updated Body Content */}
                <div className="prose prose-xl max-w-none">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
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
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <AnimatedSection delay={0.2}>
                <div className="bg-[#F9F7F5] p-6 rounded-lg shadow-soft">
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
                  </div>
                  <Link to="/blog" className="mt-4 inline-flex items-center text-[#2D2D2B] font-medium text-sm group">
                    <span>View all articles</span>
                    <ArrowLeft size={14} className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </Link>
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