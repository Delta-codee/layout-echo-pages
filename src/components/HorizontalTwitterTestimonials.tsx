
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const HorizontalTwitterTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      username: "@sarahdev",
      content: "MasterJi transformed my coding journey! The peer review system helped me learn faster than any traditional course.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b213?w=40&h=40&fit=crop&crop=face",
      verified: true
    },
    {
      name: "Alex Rodriguez", 
      username: "@alexcodes",
      content: "The AI integration is incredible. It's like having a personal mentor available 24/7 to guide my learning path.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      verified: true
    },
    {
      name: "Maria Santos",
      username: "@maria_learns", 
      content: "Best investment in my career! The hands-on projects and community feedback accelerated my growth exponentially.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      verified: false
    },
    {
      name: "David Kim",
      username: "@davidcodes",
      content: "The platform's approach to peer learning is revolutionary. I've made connections that extend far beyond just coursework.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      verified: true
    },
    {
      name: "Emily Watson",
      username: "@emilydev",
      content: "From complete beginner to landing my dream job in 6 months. The structured learning path and mentorship made all the difference.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      verified: false
    },
    {
      name: "James Park",
      username: "@jamesbuilds",
      content: "The real-world projects and instant feedback loop helped me build a portfolio that actually impressed employers.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
            What Our <span className="text-[#E3583D]">Community Says</span>
          </h2>
          <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
            Real feedback from real students who have transformed their careers with MasterJi.
          </p>
        </div>
        
        {/* Sliding testimonials container */}
        <div className="relative">
          <div className="flex animate-scroll-left space-x-6">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <Card key={`first-${index}`} className="flex-shrink-0 w-80 bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all duration-300 rounded-xl">
                <CardContent className="p-6">
                  {/* Twitter-style header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-semibold text-[#F1F1F1] text-sm">{testimonial.name}</h4>
                          {testimonial.verified && (
                            <div className="w-4 h-4 bg-[#1DA1F2] rounded-full ml-1 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <p className="text-[#A1A1A1] text-xs">{testimonial.username}</p>
                      </div>
                    </div>
                    <div className="text-[#A1A1A1]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Tweet content */}
                  <p className="text-[#F1F1F1] leading-relaxed mb-4 text-sm">{testimonial.content}</p>
                  
                  {/* Twitter-style engagement */}
                  <div className="flex items-center gap-6 text-[#A1A1A1] text-sm">
                    <div className="flex items-center gap-1 hover:text-[#1DA1F2] cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>12</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-[#17BF63] cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>24</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-[#E91E63] cursor-pointer">
                      <Star className="w-4 h-4 fill-current text-[#E3583D]" />
                      <span>89</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <Card key={`second-${index}`} className="flex-shrink-0 w-80 bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all duration-300 rounded-xl">
                <CardContent className="p-6">
                  {/* Twitter-style header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-semibold text-[#F1F1F1] text-sm">{testimonial.name}</h4>
                          {testimonial.verified && (
                            <div className="w-4 h-4 bg-[#1DA1F2] rounded-full ml-1 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <p className="text-[#A1A1A1] text-xs">{testimonial.username}</p>
                      </div>
                    </div>
                    <div className="text-[#A1A1A1]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Tweet content */}
                  <p className="text-[#F1F1F1] leading-relaxed mb-4 text-sm">{testimonial.content}</p>
                  
                  {/* Twitter-style engagement */}
                  <div className="flex items-center gap-6 text-[#A1A1A1] text-sm">
                    <div className="flex items-center gap-1 hover:text-[#1DA1F2] cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>12</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-[#17BF63] cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>24</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-[#E91E63] cursor-pointer">
                      <Star className="w-4 h-4 fill-current text-[#E3583D]" />
                      <span>89</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalTwitterTestimonials;
