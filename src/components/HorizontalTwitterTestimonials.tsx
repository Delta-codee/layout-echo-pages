
import React, { useRef, useEffect } from 'react';
import TwitterTestimonial from './TwitterTestimonial';

const HorizontalTwitterTestimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Zeel Jasani",
      username: "zeeldesigns",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Building MasterJi has been an incredible journey! Seeing students transform from beginners to confident developers makes every late night worth it. Our focus on peer reviews and AI-powered feedback is revolutionizing how people learn to code. 🚀",
      timestamp: "2h",
      likes: 324,
      replies: 48,
      retweets: 89,
      verified: true,
      role: "Founder, HR & Teacher at MasterJi"
    },
    {
      name: "Kunj Jarsaniya",
      username: "kunjcodes",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      content: "Co-founding MasterJi with Zeel has been the best decision of my life. We're not just building another ed-tech platform - we're creating a community where every student gets personalized attention and real-world skills. The future of education is here! 💡",
      timestamp: "4h",
      likes: 289,
      replies: 42,
      retweets: 76,
      verified: true,
      role: "CEO & Co-founder at MasterJi"
    },
    {
      name: "Krish Jasani",
      username: "krish_js",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "From being one of MasterJi's first students to now teaching DevOps, Java, and DSA - this platform changed my life! The structured peer review system and hands-on projects prepared me for the real world. Now I get to pay it forward by teaching the next generation. 🎯",
      timestamp: "6h",
      likes: 456,
      replies: 73,
      retweets: 134,
      verified: false,
      role: "Teacher (DevOps, Java, DSA) at MasterJi"
    },
    {
      name: "Abhi Jagani",
      username: "abhiux",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "Watching Zeel and Kunj build MasterJi from our college days to now has been amazing! Handling marketing and finance for this revolutionary platform feels like contributing to India's education revolution. Every student success story validates our mission. 📈",
      timestamp: "8h",
      likes: 203,
      replies: 31,
      retweets: 67,
      verified: false,
      role: "Marketing & Finance at MasterJi"
    },
    {
      name: "Ishita Faldu",
      username: "ishita_ui",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "Teaching System Design, SQL, APIs, and Python at MasterJi has been incredibly rewarding! Our students don't just learn syntax - they understand real-world applications. The collaborative learning environment we've created here is something special. 🔧",
      timestamp: "12h",
      likes: 378,
      replies: 56,
      retweets: 98,
      verified: true,
      role: "Teacher (System Design, SQL, APIs, Python) at MasterJi"
    },
    {
      name: "Nitu (BigBuffalo)",
      username: "nitu_dev",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b3b2b8d0?w=150&h=150&fit=crop&crop=face",
      content: "Teaching Data Science at MasterJi is a dream job! Our students go from zero to building ML models that solve real problems. The AI-powered feedback system helps them understand concepts deeply, not just memorize formulas. Data science education done right! 📊",
      timestamp: "1d",
      likes: 445,
      replies: 67,
      retweets: 123,
      verified: false,
      role: "Data Science Teacher at MasterJi"
    },
    {
      name: "Arjun Mehra",
      username: "arjunbuilds",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      content: "Bhai, finally found a platform that actually teaches you real skills! The assignments are challenging but doable, and the peer reviews helped me see my code from different perspectives. Worth every rupee 💯",
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
      content: "Got placed at a startup in Bangalore thanks to the projects I built here. The AI feedback system is next level - it's like having a senior developer reviewing your code 24/7. Highly recommend!",
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
      content: "The DSA course here is pure gold! Went from struggling with arrays to solving medium LeetCode problems in 3 months. The step-by-step approach and Indian context examples made all the difference 📈",
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
      content: "Being from a Tier-3 city, I was worried about quality education. MasterJi proved me wrong! The instructors understand our struggles and the content is world-class. Already got 2 freelance clients 💪",
      timestamp: "6d",
      likes: 267,
      replies: 38,
      retweets: 89,
      verified: false,
      role: "Student"
    },
    {
      name: "Ananya Sharma",
      username: "ananya_codes",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "The peer review system at MasterJi is genius! Getting feedback from classmates and giving reviews helped me understand code quality standards. Now I write cleaner, more maintainable code naturally 🎯",
      timestamp: "1w",
      likes: 312,
      replies: 45,
      retweets: 78,
      verified: false,
      role: "Student"
    },
    {
      name: "Rahul Kumar",
      username: "rahul_fullstack",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Built my first full-stack app using React and Node.js thanks to MasterJi's project-based learning. The mentors don't just teach syntax - they teach you how to think like a developer. Game changer! 🔥",
      timestamp: "1w",
      likes: 234,
      replies: 33,
      retweets: 67,
      verified: false,
      role: "Student"
    },
    {
      name: "Kavya Patel",
      username: "kavya_designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The UI/UX design principles taught here are top-notch! From wireframing to prototyping, every concept is explained with real examples. My portfolio improved dramatically after just 2 months ✨",
      timestamp: "2w",
      likes: 189,
      replies: 28,
      retweets: 54,
      verified: true,
      role: "Student"
    },
    {
      name: "Dev Sharma",
      username: "dev_blockchain",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The blockchain development course opened up a whole new world for me! Smart contracts, DApps, Web3 - everything explained clearly with hands-on projects. Already working on my first DeFi project 🌐",
      timestamp: "2w",
      likes: 345,
      replies: 52,
      retweets: 98,
      verified: false,
      role: "Student"
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
            What Our <span className="text-[#E3583D]">Community Says</span>
          </h2>
          <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
            Real feedback from our team, teachers, and students who are building the future of education together
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
          width: 100%;
          overflow: hidden;
          cursor: grab;
        }

        .scroll-container:active {
          cursor: grabbing;
        }

        .scroll-content {
          display: flex;
          animation: scroll 180s linear infinite;
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
            animation: scroll 120s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default HorizontalTwitterTestimonials;
