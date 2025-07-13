import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useRole } from '@/hooks/useRole';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, ArrowRight, BookOpen, Users, Trophy, Code, Palette, Zap, CheckCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import HorizontalTwitterTestimonials from '@/components/HorizontalTwitterTestimonials';

const Home = () => {
  const { isSignedIn } = useAuth();
  const { isAdmin } = useRole();
  const navigate = useNavigate();

  // Redirect admin users to admin dashboard
  useEffect(() => {
    if (isSignedIn && isAdmin) {
      navigate('/admin/dashboard');
    }
  }, [isSignedIn, isAdmin, navigate]);

  const features = [
    {
      icon: Code,
      title: "Peer Reviews",
      description: "Collaborative learning through structured peer feedback and code reviews to enhance your programming skills."
    },
    {
      icon: Palette,
      title: "Blog Writing", 
      description: "Share your knowledge and experiences through our integrated blogging platform designed for learners."
    },
    {
      icon: Zap,
      title: "Assignments",
      description: "Hands-on projects and assignments that help you apply theoretical knowledge to real-world scenarios."
    },
    {
      icon: Users,
      title: "AI Integration",
      description: "Advanced AI tools to provide personalized learning paths and intelligent feedback on your progress."
    }
  ];

  const metrics = [
    { number: "88%", label: "Success Rate", description: "Projects completed successfully" },
    { number: "1,247", label: "Active Users", description: "Learning daily" },
    { number: "156", label: "Certificates", description: "Available courses" }
  ];

  const studentProjects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack React application with payment integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop"
    },
    {
      title: "Machine Learning Dashboard",
      description: "Data visualization tool for ML models",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      title: "Mobile App Design",
      description: "UI/UX design for social networking app",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop"
    },
    {
      title: "Blockchain Project",
      description: "Decentralized application for secure transactions",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop"
    }
  ];

  const blogPosts = [
    {
      title: "AI Powered Assistants Are the Future of Programming",
      date: "Jan 15, 2024",
      description: "Exploring how AI is transforming the way we write and debug code."
    },
    {
      title: "Why This Platform is Different from Traditional LMS",
      date: "Jan 10, 2024", 
      description: "Understanding the unique approach to peer-based learning."
    },
    {
      title: "Building Your First Full-Stack Application",
      date: "Jan 05, 2024",
      description: "A comprehensive guide to modern web development."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      username: "@sarahdev",
      content: "MasterJi transformed my coding journey! The peer review system helped me learn faster than any traditional course.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b213?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Alex Rodriguez",
      username: "@alexcodes",
      content: "The AI integration is incredible. It's like having a personal mentor available 24/7 to guide my learning path.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Maria Santos",
      username: "@maria_learns",
      content: "Best investment in my career! The hands-on projects and community feedback accelerated my growth exponentially.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    }
  ];

  const faqItems = [
    { 
      q: "How do I schedule a program?", 
      a: "You can enroll in any program by browsing our course catalog and clicking the enroll button. Most courses start immediately after enrollment with flexible scheduling options." 
    },
    { 
      q: "How does peer review work?", 
      a: "Our peer review system allows you to receive and give feedback on projects and assignments, fostering collaborative learning and skill development through structured evaluation criteria." 
    },
    { 
      q: "Can I get a certificate?", 
      a: "Yes! Upon successful completion of any course you'll receive a verified certificate that you can share with employers and on professional networks like LinkedIn." 
    },
    { 
      q: "What if I need a custom deadline?", 
      a: "We offer flexible deadlines for most assignments. You can request extensions through your dashboard or contact our support team for personalized scheduling assistance." 
    }
  ];

  const handleStartLearning = () => {
    if (isSignedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  // Show landing page for non-admin users and guests
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F1F1F1]">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-[#0B0B0B] via-[#1a0d1a] to-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge variant="outline" className="mb-8 px-6 py-2 text-sm font-medium bg-[#131313] border-[#2B2B2B] text-[#E3583D]">
            <span className="mr-2">🚀</span>
            Trusted by 500+ students worldwide
          </Badge>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none tracking-tight">
            Empower Your Learning Journey<br />
            with <span className="text-[#E3583D]">MasterJi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#A1A1A1] mb-12 max-w-4xl mx-auto leading-relaxed">
            Access top-tier content covering subjects, peer reviews, and grow 
            your network—all in one place, a learning platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              size="lg" 
              onClick={handleStartLearning}
              className="bg-[#E4593D] hover:bg-[#E3583D] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Learning Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#131313] transition-all duration-300"
            >
              Browse Courses
            </Button>
          </div>

          {/* Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#131313] to-[#1a1a1a] border-[#2B2B2B] hover:border-[#E3583D]/30 hover:shadow-lg transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-[#E3583D] mb-4">
                    {metric.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">{metric.label}</h3>
                  <p className="text-[#A1A1A1] leading-relaxed">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Learning with AI Section */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
              Smart Learning with <span className="text-[#E3583D]">AI</span>
            </h2>
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
              Harness artificial intelligence to enhance your learning experience with personalized 
              feedback and intelligent course recommendations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 hover:shadow-lg transition-all duration-300 rounded-2xl group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#E3583D]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#E3583D]/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-[#E3583D]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F1F1F1] mb-3">{feature.title}</h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase & Inspire Section */}
      <section className="py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
              Showcase & <span className="text-[#E3583D]">Inspire</span>
            </h2>
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
              Explore amazing student projects and get inspired by our community's latest blog posts and achievements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#F1F1F1] mb-8">Student Projects</h3>
              <div className="grid grid-cols-2 gap-4">
                {studentProjects.map((project, index) => (
                  <Card key={index} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all duration-300 rounded-xl overflow-hidden group">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-[#F1F1F1] text-sm mb-1">{project.title}</h4>
                      <p className="text-[#A1A1A1] text-xs">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#F1F1F1] mb-8">Latest Blog Posts</h3>
              <div className="space-y-4">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all duration-300 rounded-xl">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-[#F1F1F1] mb-2">{post.title}</h4>
                      <p className="text-[#A1A1A1] text-sm mb-3">{post.description}</p>
                      <p className="text-[#E3583D] text-sm font-medium">{post.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Twitter-style Testimonials Section */}
      <HorizontalTwitterTestimonials />

      {/* Pricing Section */}
      <section className="py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
              Pricing for <span className="text-[#E3583D]">Everyone</span>
            </h2>
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
              Flexible pricing options to fit every learner's budget and goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: "Free Plan", 
                price: "$0", 
                features: ["5 active peer-reviews", "1 GB total uploads", "10 monthly peer graders", "Basic AI assistance"],
                cta: "Get Started Free"
              },
              { 
                name: "Standard Plan", 
                price: "$49", 
                period: "/mo",
                features: ["30 active peer-reviews", "25 GB total uploads", "25 monthly peer graders", "Advanced AI features", "Priority support"],
                cta: "Choose Standard",
                popular: true
              },
              { 
                name: "Pro Plan", 
                price: "$99", 
                period: "/mo",
                features: ["Unlimited peer-reviews", "100 GB total uploads", "Unlimited peer graders", "Full AI suite", "1-on-1 mentoring"],
                cta: "Choose Pro"
              }
            ].map((plan, index) => (
              <Card key={index} className={`bg-[#131313] border-[#2B2B2B] rounded-2xl relative ${plan.popular ? 'border-[#E3583D]' : 'hover:border-[#E3583D]/30'} transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#E3583D] text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-[#F1F1F1] mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#E3583D]">{plan.price}</span>
                    {plan.period && <span className="text-[#A1A1A1]">{plan.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-[#A1A1A1]">
                        <CheckCircle className="w-4 h-4 text-[#3FCF8E] mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-[#E4593D] hover:bg-[#E3583D] text-white' 
                        : 'bg-transparent border border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#131313]'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
              Everything You <span className="text-[#E3583D]">Need to Know</span>
            </h2>
            <p className="text-xl text-[#A1A1A1]">
              Common questions about our platform and learning experience.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <Card key={index} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all duration-300 rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#F1F1F1] mb-3">{faq.q}</h3>
                  <p className="text-[#A1A1A1] leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#0B0B0B] via-[#1a0d1a] to-[#0B0B0B] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-[#F1F1F1]">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-[#A1A1A1] mb-12 max-w-2xl mx-auto">
            Join thousands of learners who are already advancing their skills with MasterJi's comprehensive learning platform.
          </p>
          <Button 
            size="lg" 
            onClick={handleStartLearning}
            className="bg-[#E4593D] hover:bg-[#E3583D] text-white px-12 py-5 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0B0B] text-[#F1F1F1] py-16 border-t border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#E3583D] rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">MasterJi</span>
              </div>
              <p className="text-[#A1A1A1] mb-6 max-w-md leading-relaxed">
                Building modern learning experiences that solve real problems and create meaningful educational outcomes for the next generation of learners.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-[#F1F1F1]">Platform</h4>
              <ul className="space-y-3 text-[#A1A1A1]">
                <li><a href="/courses" className="hover:text-[#E3583D] transition-colors">Courses</a></li>
                <li><a href="/blogs" className="hover:text-[#E3583D] transition-colors">Blogs</a></li>
                <li><a href="/peer-reviews" className="hover:text-[#E3583D] transition-colors">Peer Reviews</a></li>
                <li><a href="/dashboard" className="hover:text-[#E3583D] transition-colors">Dashboard</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-[#F1F1F1]">Support</h4>
              <ul className="space-y-3 text-[#A1A1A1]">
                <li><a href="#" className="hover:text-[#E3583D] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#E3583D] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#E3583D] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#E3583D] transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#2B2B2B] mt-12 pt-8 text-center text-[#A1A1A1]">
            <p>&copy; 2025 MasterJi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
