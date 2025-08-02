import React, { useRef, useEffect } from 'react';
import TwitterTestimonial from './TwitterTestimonial';

const HorizontalTwitterTestimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Zeel Jasani",
      username: "zeeljasani.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Building Masterji has been the most rewarding journey. Watching students grow into professionals proves we're doing something right.",
      timestamp: "2h",
      likes: 324,
      replies: 48,
      retweets: 89,
      verified: true,
      role: "Founder & Teacher at MasterJi"
    },
    {
      name: "Kunj Jarsaniya",
      username: "kunjcodes",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      content: "Masterji started as a dream between two college friends. Today, it's a platform shaping real developers with structured, high-quality tech education.",
      timestamp: "4h",
      likes: 289,
      replies: 42,
      retweets: 76,
      verified: false,
      role: "Co-founder & CEO at MasterJi"
    },
    {
      name: "Krish Jasani",
      username: "krish_js",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "From student to faculty — my journey with Masterji is special. Now I help students master DevOps, DSA, and Java the same way I did.",
      timestamp: "6h",
      likes: 456,
      replies: 73,
      retweets: 134,
      verified: false,
      role: "Teacher (DevOps, Java, DSA) at MasterJi"
    },
    {
      name: "Arjun Mehra",
      username: "arjunbuilds",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      content: "Finally found a platform that actually teaches you real skills! The assignments are challenging but doable, and the peer reviews helped me see my code from different perspectives. Worth every rupee 💯",
      timestamp: "2d",
      likes: 278,
      replies: 42,
      retweets: 87,
      verified: false,
      role: "Student"
    },
    {
      name: "Priya Agarwal",
      username: "priya_codes",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b3b2b8d0?w=150&h=150&fit=crop&crop=face",
      content: "As someone who switched from commerce to tech, MasterJi made the transition so much smoother. The community support is incredible - seniors actually help juniors here. Best decision of 2024! 🚀",
      timestamp: "3d",
      likes: 321,
      replies: 56,
      retweets: 112,
      verified: true,
      role: "Student"
    },
    {
      name: "Rohit Singh",
      username: "rohit_dev",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "Got placed at a startup in Bangalore thanks to the projects I built here. The AI feedback system is next level - it's like having a senior developer reviewing your code 24/7.",
      timestamp: "4d",
      likes: 445,
      replies: 73,
      retweets: 156,
      verified: false,
      role: "Student"
    },
    {
      name: "Sneha Reddy",
      username: "sneha_tech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The DSA course here is pure gold! Went from struggling with arrays to solving medium LeetCode problems in 3 months. The step-by-step approach made all the difference 📈",
      timestamp: "5d",
      likes: 389,
      replies: 67,
      retweets: 134,
      verified: true,
      role: "Student"
    },
    {
      name: "Vikram Joshi",
      username: "vikram_learns",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      content: "Being from a Tier-3 city, I was worried about quality education. MasterJi proved me wrong! The instructors understand our struggles and the content is world-class.",
      timestamp: "6d",
      likes: 267,
      replies: 38,
      retweets: 89,
      verified: false,
      role: "Student"
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }
      
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    const handleMouseEnter = () => {
      const scrollContent = container.querySelector('.scroll-content') as HTMLElement;
      if (scrollContent) {
        scrollContent.style.animationPlayState = 'paused';
      }
    };

    const handleMouseLeave = () => {
      const scrollContent = container.querySelector('.scroll-content') as HTMLElement;
      if (scrollContent) {
        scrollContent.style.animationPlayState = 'running';
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-12 bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#F1F1F1]">
            What Our <span className="text-[#E3583D]">Community Says</span>
          </h2>
          <p className="text-lg text-[#A1A1A1] max-w-2xl mx-auto">
            Real feedback from our team, teachers, and students
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for smooth fade */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-[#0B0B0B] via-[#0B0B0B]/90 to-transparent z-10 pointer-events-none"></div>
          
          <div ref={scrollContainerRef} className="scroll-container">
            <div className="scroll-content">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="scroll-item"
                  style={{
                    animationDelay: `${(index % testimonials.length) * 0.1}s`
                  }}
                >
                  <TwitterTestimonial
                    name={testimonial.name}
                    username={testimonial.username}
                    avatar={testimonial.avatar}
                    content={testimonial.content}
                    timestamp={testimonial.timestamp}
                    likes={testimonial.likes}
                    replies={testimonial.replies}
                    retweets={testimonial.retweets}
                    verified={testimonial.verified}
                    role={testimonial.role}
                    isHorizontal={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scroll-container {
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
          width: 100%;
        }

        .scroll-container::-webkit-scrollbar {
          display: none;
        }

        .scroll-content {
          display: flex;
          gap: 1rem;
          padding: 0.5rem 0;
          animation: scroll-horizontal 180s linear infinite;
          width: fit-content;
        }

        .scroll-item {
          flex-shrink: 0;
          width: 320px;
          opacity: 0;
          transform: translateY(-20px);
          animation: slideInFromTop 0.8s ease-out forwards;
        }

        @keyframes scroll-horizontal {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .scroll-content:hover {
          animation-play-state: paused;
        }

        .scroll-item:hover {
          transform: translateY(-4px) scale(1.02);
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default HorizontalTwitterTestimonials;