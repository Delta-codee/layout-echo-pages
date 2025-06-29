
import React, { useRef, useEffect } from 'react';
import TwitterTestimonial from './TwitterTestimonial';

const HorizontalTwitterTestimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Zeel Jasani",
      username: "zeeldesigns",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Absolutely blown away by the UI and performance. Every screen transition feels intentional, and the dark theme is the cleanest I've seen in any modern dashboard app. Highly recommend this team to anyone building a design-driven product.",
      timestamp: "2h",
      likes: 124,
      replies: 18,
      retweets: 45,
      verified: true
    },
    {
      name: "Jasani Krish",
      username: "krish_js",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "What I loved most was the attention to small details — from hover states to button feedback. These aren't just coders, they're design thinkers. We shipped faster than expected and without a single last-minute panic. That says a lot.",
      timestamp: "4h",
      likes: 89,
      replies: 12,
      retweets: 34,
      verified: false
    },
    {
      name: "Jarsaniya Kunj",
      username: "kunjcodes",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      content: "I've worked with several design teams over the past year. This one is different — fast, extremely responsive, and deadly accurate. They delivered exactly what we discussed in our first call, down to the micro-interactions.",
      timestamp: "6h",
      likes: 156,
      replies: 25,
      retweets: 67,
      verified: true
    },
    {
      name: "Jagani Abhi",
      username: "abhiux",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "The UX experience was flawless. Not just good-looking UI — real flow, purpose-driven placement, and fast loading everywhere. No fluff. This is how modern web apps should be built.",
      timestamp: "8h",
      likes: 203,
      replies: 31,
      retweets: 89,
      verified: false
    },
    {
      name: "Nitu",
      username: "nitu_dev",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b3b2b8d0?w=150&h=150&fit=crop&crop=face",
      content: "From planning to deployment, everything felt professional and clear. We got early access builds within days and final versions faster than expected. These folks know how to manage timelines without compromising on quality.",
      timestamp: "12h",
      likes: 178,
      replies: 22,
      retweets: 56,
      verified: true
    },
    {
      name: "Sakshi Patel",
      username: "sakshibuilds",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "I rarely write reviews, but this one deserves it. Every design was crafted to perfection, with clear logic and clean implementation. Also: best dev–client communication I've had in years.",
      timestamp: "1d",
      likes: 145,
      replies: 19,
      retweets: 41,
      verified: false
    },
    {
      name: "Ishita Sharma",
      username: "ishita_ui",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "Honestly? This is the best user experience I've had on a dashboard product. Whether it's button placement or keyboard navigation — it all just works. The team is incredibly talented and humble.",
      timestamp: "1d",
      likes: 192,
      replies: 28,
      retweets: 73,
      verified: true
    },
    {
      name: "Rutvik Shah",
      username: "rutviktech",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      content: "It's rare to find someone who understands both design and dev equally well. The delivery was fast, the design modern, and the codebase super clean. Already planning a second project with them.",
      timestamp: "2d",
      likes: 167,
      replies: 24,
      retweets: 52,
      verified: false
    },
    {
      name: "Raju Kumar",
      username: "rajuoncode",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "I shared the demo with our team, and everyone said the same thing — 'it looks like something Apple would build'. Minimal, bold, and purposeful. Can't wait to go live with this.",
      timestamp: "2d",
      likes: 234,
      replies: 36,
      retweets: 98,
      verified: true
    },
    {
      name: "Utsav Gupta",
      username: "utsavux",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Just launched our MVP using this UI setup and we're already getting user compliments. It's fast, lightweight, and perfectly responsive across all devices. Couldn't ask for more.",
      timestamp: "3d",
      likes: 189,
      replies: 29,
      retweets: 64,
      verified: false
    },
    {
      name: "Arjun Mehra",
      username: "arjunbuilds",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      content: "Bhai, finally found a platform that actually teaches you real skills! The assignments are challenging but doable, and the peer reviews helped me see my code from different perspectives. Worth every rupee 💯",
      timestamp: "4d",
      likes: 278,
      replies: 42,
      retweets: 87,
      verified: false
    },
    {
      name: "Priya Agarwal",
      username: "priya_codes",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b3b2b8d0?w=150&h=150&fit=crop&crop=face",
      content: "As someone who switched from commerce to tech, MasterJi made the transition so much smoother. The community support is incredible - seniors actually help juniors here. Best decision of 2024! 🚀",
      timestamp: "5d",
      likes: 321,
      replies: 56,
      retweets: 112,
      verified: true
    },
    {
      name: "Rohit Singh",
      username: "rohit_dev",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "Got placed at a startup in Bangalore thanks to the projects I built here. The AI feedback system is next level - it's like having a senior developer reviewing your code 24/7. Highly recommend!",
      timestamp: "6d",
      likes: 445,
      replies: 73,
      retweets: 156,
      verified: false
    },
    {
      name: "Sneha Reddy",
      username: "sneha_tech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The DSA course here is pure gold! Went from struggling with arrays to solving medium LeetCode problems in 3 months. The step-by-step approach and Indian context examples made all the difference 📈",
      timestamp: "1w",
      likes: 389,
      replies: 67,
      retweets: 134,
      verified: true
    },
    {
      name: "Vikram Joshi",
      username: "vikram_learns",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      content: "Being from a Tier-3 city, I was worried about quality education. MasterJi proved me wrong! The instructors understand our struggles and the content is world-class. Already got 2 freelance clients 💪",
      timestamp: "1w",
      likes: 267,
      replies: 38,
      retweets: 89,
      verified: false
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isScrollPaused = false;

    // Mouse wheel horizontal scrolling
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // Already horizontal scroll, let it pass
        return;
      }
      
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    // Pause/resume animation on hover
    const handleMouseEnter = () => {
      isScrollPaused = true;
      const scrollContent = container.querySelector('.scroll-content') as HTMLElement;
      if (scrollContent) {
        scrollContent.style.animationPlayState = 'paused';
      }
    };

    const handleMouseLeave = () => {
      isScrollPaused = false;
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
    <section className="py-20 lg:py-32 bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
            What Our <span className="text-[#E3583D]">Students Say</span>
          </h2>
          <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
            Real feedback from our community of learners and developers who've transformed their careers with MasterJi
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Testimonials */}
          <div ref={scrollContainerRef} className="scroll-container">
            <div className="scroll-content">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={index} className="scroll-item">
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
          width: 100%;
          overflow: hidden;
          cursor: grab;
        }

        .scroll-container:active {
          cursor: grabbing;
        }

        .scroll-content {
          display: flex;
          animation: scroll 120s linear infinite;
          gap: 1.5rem;
          width: max-content;
        }

        .scroll-item {
          flex-shrink: 0;
          width: 400px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .scroll-item {
            width: 320px;
          }
          
          .scroll-content {
            animation: scroll 90s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default HorizontalTwitterTestimonials;
