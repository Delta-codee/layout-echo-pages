
import React from 'react';
import TwitterTestimonial from './TwitterTestimonial';

const HorizontalTwitterTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Zeel Jasani",
      username: "zeeldesigns",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
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
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
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
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
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
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b3b2b8d0?w=150&h=150&fit=crop&crop=face",
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
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "From planning to deployment, everything felt professional and clear. We got early access builds within days and final versions faster than expected. These folks know how to manage timelines without compromising on quality.",
      timestamp: "12h",
      likes: 178,
      replies: 22,
      retweets: 56,
      verified: true
    },
    {
      name: "Sakshi",
      username: "sakshibuilds",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "I rarely write reviews, but this one deserves it. Every design was crafted to perfection, with clear logic and clean implementation. Also: best dev–client communication I've had in years.",
      timestamp: "1d",
      likes: 145,
      replies: 19,
      retweets: 41,
      verified: false
    },
    {
      name: "Ishita",
      username: "ishita_ui",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      content: "Honestly? This is the best user experience I've had on a dashboard product. Whether it's button placement or keyboard navigation — it all just works. The team is incredibly talented and humble.",
      timestamp: "1d",
      likes: 192,
      replies: 28,
      retweets: 73,
      verified: true
    },
    {
      name: "Rutvik",
      username: "rutviktech",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      content: "It's rare to find someone who understands both design and dev equally well. The delivery was fast, the design modern, and the codebase super clean. Already planning a second project with them.",
      timestamp: "2d",
      likes: 167,
      replies: 24,
      retweets: 52,
      verified: false
    },
    {
      name: "Raju",
      username: "rajuoncode",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "I shared the demo with our team, and everyone said the same thing — 'it looks like something Apple would build'. Minimal, bold, and purposeful. Can't wait to go live with this.",
      timestamp: "2d",
      likes: 234,
      replies: 36,
      retweets: 98,
      verified: true
    },
    {
      name: "Utsav",
      username: "utsavux",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Just launched our MVP using this UI setup and we're already getting user compliments. It's fast, lightweight, and perfectly responsive across all devices. Couldn't ask for more.",
      timestamp: "3d",
      likes: 189,
      replies: 29,
      retweets: 64,
      verified: false
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 lg:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What People Are <span className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] bg-clip-text text-transparent">Saying</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real feedback from our community of learners and developers
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Testimonials */}
          <div className="scroll-container group">
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

      <style jsx>{`
        .scroll-container {
          width: 100%;
          overflow: hidden;
        }

        .scroll-content {
          display: flex;
          animation: scroll 60s linear infinite;
          gap: 1.5rem;
        }

        .scroll-item {
          flex-shrink: 0;
          width: 400px;
        }

        .group:hover .scroll-content {
          animation-play-state: paused;
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
        }
      `}</style>
    </section>
  );
};

export default HorizontalTwitterTestimonials;
