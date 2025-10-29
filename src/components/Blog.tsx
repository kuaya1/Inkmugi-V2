import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { blogPosts } from '../data/blogData'; // Import from the new data file

const Blog: React.FC = () => {
  // Your Blog component code here
  return (
    <section className="py-20">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-12 text-center">Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <AnimatedSection key={post.id}>
              {/* Blog post card */}
              <article className="bg-white rounded-lg overflow-hidden shadow-soft h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.alt} 
                    className="w-full h-64 object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#E6DAD2] text-[#2D2D2B] text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-[#2D2D2B]/70 mb-3 gap-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">{post.title}</h3>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="mt-auto inline-flex items-center text-[#2D2D2B] font-medium text-sm group"
                  >
                    <span>Read more</span>
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
