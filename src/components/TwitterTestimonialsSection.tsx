
import React from 'react';
import TwitterTestimonial from './TwitterTestimonial';

const TwitterTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      username: "johndesigns",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Absolutely loving the new UI revamp! It's slick, fast, and super intuitive. Big kudos to the team 👏",
      timestamp: "2h",
      likes: 47,
      replies: 12,
      retweets: 23,
      verified: true
    },
    {
      name: "Jane Pixel",
      username: "janepxl",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Working with this team was a breeze. Super fast turnarounds and killer design thinking. 10/10 recommend. 🚀",
      timestamp: "4h",
      likes: 89,
      replies: 18,
      retweets: 34,
      verified: false
    },
    {
      name: "Dev Singh",
      username: "devcoding",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Impressed by the attention to detail in every interaction. The UX feels like magic. ✨",
      timestamp: "6h",
      likes: 156,
      replies: 25,
      retweets: 67,
      verified: true
    },
    {
      name: "Alina UX",
      username: "alinamakes",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b3b2b8d0?w=150&h=150&fit=crop&crop=face",
      content: "These guys just get it. No long meetings, just results. Pure 🔥 design & dev.",
      timestamp: "8h",
      likes: 203,
      replies: 31,
      retweets: 89,
      verified: false
    },
    {
      name: "Alex Chen",
      username: "alexcodes",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "The performance improvements are incredible! Loading times cut in half. This is how you optimize properly 💯",
      timestamp: "12h",
      likes: 124,
      replies: 19,
      retweets: 45,
      verified: true
    },
    {
      name: "Sarah Design",
      username: "sarahux",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: "Clean, modern, and accessible. Finally a design system that doesn't compromise on usability. Brilliant work! 🎨",
      timestamp: "1d",
      likes: 78,
      replies: 14,
      retweets: 28,
      verified: false
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What People Are <span className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] bg-clip-text text-transparent">Saying</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real feedback from our community of learners and developers
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TwitterTestimonial
                key={index}
                name={testimonial.name}
                username={testimonial.username}
                avatar={testimonial.avatar}
                content={testimonial.content}
                timestamp={testimonial.timestamp}
                likes={testimonial.likes}
                replies={testimonial.replies}
                retweets={testimonial.retweets}
                verified={testimonial.verified}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Join thousands of happy learners</p>
            <button className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] hover:from-[#e55a3d] hover:to-[#d4493a] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwitterTestimonialsSection;
