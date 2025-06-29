import React, { useRef, useEffect } from 'react';
import TwitterTestimonial from './TwitterTestimonial';

const HorizontalTwitterTestimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Zeel Jasani",
      username: "zeeljasani.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Building Masterji has been the most rewarding journey. Watching students grow into professionals, and now even teachers, proves we're doing something right. From HR to product to classroom — I wear all hats proudly.",
      timestamp: "2h",
      likes: 324,
      replies: 48,
      retweets: 89,
      verified: true,
      role: "Founder, HR & Teacher at MasterJi, CEO & Founder of Delta.codee"
    },
    {
      name: "Kunj Jarsaniya",
      username: "kunjcodes",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      content: "Masterji started as a dream between two college friends. Today, it's a platform shaping real developers. As CEO, I've made it my mission to deliver structured, high-quality tech education — fast, hands-on, and modern.",
      timestamp: "4h",
      likes: 289,
      replies: 42,
      retweets: 76,
      verified: false,
      role: "Co-founder, CEO & Teacher at MasterJi"
    },
    {
      name: "Krish Jasani",
      username: "krish_js",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "From student to faculty — my journey with Masterji is special. Now I help students master DevOps, DSA, and Java the same way I did. If you're serious about learning, this is the place.",
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
      content: "I remember when Zeel and Kunj pitched the first version of Masterji over chai. Fast forward: I now handle the finance and marketing strategy that scaled this beast. True passion and process win.",
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
      content: "System design, SQL, APIs, Python — I love teaching these at Masterji. This isn't just a job; it's my way to help students build backend intuition with clarity. Grateful to be part of something this impactful.",
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
      content: "Data Science isn't scary — not when you break it down right. That's what I do at Masterji. From beginner to pro, I make sure students get hands-on with the tools that matter in the real world.",
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
    },
    {
      name: "Parth Soni",
      username: "parthcodes",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Got placed off-campus thanks to Masterji! I was struggling after college, but their DSA & Java crash course gave me the confidence to crack the interview. No fake promises — just proper learning and mentorship.",
      timestamp: "2d",
      likes: 278,
      replies: 42,
      retweets: 87,
      verified: false,
      role: "Student"
    },
    {
      name: "Mitali Rana",
      username: "mitali_rana",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b3b2b8d0?w=150&h=150&fit=crop&crop=face",
      content: "The teachers at Masterji are honestly better than my university profs. We worked on real-world projects, not just theory. My portfolio actually got noticed by a startup — I'm joining next week!",
      timestamp: "3d",
      likes: 321,
      replies: 56,
      retweets: 112,
      verified: false,
      role: "Student"
    },
    {
      name: "Aman Vyas",
      username: "amanontech",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "Everyone says they prepare you for the industry. Masterji actually does. I was part of a weekend batch and got hands-on with API design, SQL optimization, and live debugging sessions.",
      timestamp: "4d",
      likes: 445,
      replies: 73,
      retweets: 156,
      verified: false,
      role: "Student"
    },
    {
      name: "Charmi Patel",
      username: "charmitech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Other platforms just give you videos. Masterji gave me feedback, mentorship, and real competition. I won a MacBook Air M4 during our internal project championship — best learning experience ever!",
      timestamp: "5d",
      likes: 389,
      replies: 67,
      retweets: 134,
      verified: false,
      role: "Student"
    },
    {
      name: "Raj Chauhan",
      username: "rajcodesx",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      content: "I joined Masterji with 0 confidence in coding. Today, I'm interning at a US-based SaaS company — all because of their structured roadmap and personal support. It felt like family.",
      timestamp: "6d",
      likes: 267,
      replies: 38,
      retweets: 89,
      verified: false,
      role: "Student"
    },
    {
      name: "Nirali Desai",
      username: "niralionweb",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "I wasn't expecting this much attention from the mentors — every small doubt got answered, even late at night. They treat students like teammates. Very different vibe from normal courses.",
      timestamp: "1w",
      likes: 312,
      replies: 45,
      retweets: 78,
      verified: false,
      role: "Student"
    },
    {
      name: "Tushar Panchal",
      username: "tusharlearns",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "We built a full-stack health tracker with React + Node in the capstone project. The best part? I got shortlisted at a product company because of that project. Thank you Masterji team!",
      timestamp: "1w",
      likes: 234,
      replies: 33,
      retweets: 67,
      verified: false,
      role: "Student"
    },
    {
      name: "Dhruvi Modi",
      username: "dhruvi_ui",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "I joined only for UI/UX, but ended up falling in love with frontend dev too. Ishita ma'am's way of explaining flows & system design is just chef's kiss. Can't wait to take the backend batch now!",
      timestamp: "2w",
      likes: 189,
      replies: 28,
      retweets: 54,
      verified: false,
      role: "Student"
    },
    {
      name: "Jay Parmar",
      username: "jaywritescode",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Masterji doesn't just teach — they build you. The resume sessions, mock interviews, and coding weekends made me ready for my first job. Also, Kunj sir's DSA playlist is gold.",
      timestamp: "2w",
      likes: 345,
      replies: 52,
      retweets: 98,
      verified: false,
      role: "Student"
    },
    {
      name: "Ananya Rao",
      username: "ananyarao_dev",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "I applied for 7 jobs using my Masterji project repo. Got 3 callbacks within a week. Real projects + proper Git workflow + mentor support = guaranteed confidence boost.",
      timestamp: "3w",
      likes: 278,
      replies: 41,
      retweets: 89,
      verified: false,
      role: "Student"
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isScrollPaused = false;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }
      
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
            What Our <span className="text-[#E3583D]">Community Says</span>
          </h2>
          <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
            Real feedback from our team, teachers, and students who are building the future of education together
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none"></div>
          
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
          animation: scroll 240s linear infinite;
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
            animation: scroll 160s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default HorizontalTwitterTestimonials;
