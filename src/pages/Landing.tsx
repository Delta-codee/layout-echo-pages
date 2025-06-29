
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Palette, Zap, Users, Award, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import HorizontalTwitterTestimonials from '@/components/HorizontalTwitterTestimonials';

const Landing = () => {
  const { currentTheme } = useTheme();

  const features = [
    {
      icon: Code,
      title: "Modern Web Apps",
      description: "Building responsive, fast-loading applications that work seamlessly across all devices and browsers."
    },
    {
      icon: Palette,
      title: "Tailored Design", 
      description: "Custom UI/UX design that reflects your brand identity and creates meaningful user experiences."
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimized code and architecture ensuring lightning-fast loading times and smooth interactions."
    }
  ];

  const recentWork = [
    {
      title: "Algorithm",
      description: "Data structures and algorithms learning platform with interactive coding challenges and real-time feedback.",
      category: "EdTech Platform"
    },
    {
      title: "Tailwind Master Kit",
      description: "Complete component library with 200+ pre-built Tailwind CSS components for rapid development.",
      category: "Developer Tools"
    },
    {
      title: "Cosmo Digital", 
      description: "Modern digital agency website with smooth animations, portfolio showcase, and client testimonials.",
      category: "Agency Website"
    },
    {
      title: "Invoicer Labs",
      description: "Invoice management system with automated billing, payment tracking, and financial reporting.",
      category: "SaaS Platform"
    }
  ];

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack development using modern technologies like React, Node.js, and cloud platforms."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design process from wireframes to high-fidelity prototypes and design systems."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Speed optimization, SEO improvements, and technical audits to maximize your site's potential."
    },
    {
      icon: Users,
      title: "Consultation & Strategy",
      description: "Technical consulting, architecture planning, and strategic guidance for your digital projects."
    },
    {
      icon: Award,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, security monitoring, and technical support for your applications."
    },
    {
      icon: Zap,
      title: "API Development",
      description: "RESTful APIs, database design, and third-party integrations to power your applications."
    }
  ];

  const metrics = [
    { number: "88%", label: "Success Rate", description: "Projects completed successfully" },
    { number: "1,247", label: "Active Users", description: "Learning daily" },
    { number: "24", label: "Certificates", description: "Available courses" }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F1F1F1]">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge variant="outline" className="mb-8 px-6 py-2 text-sm font-medium bg-[#131313] border-[#2B2B2B] text-[#E3583D]">
            <span className="mr-2">{'>'}</span>
            Trusted by 500+ businesses worldwide
          </Badge>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none tracking-tight text-[#F1F1F1]">
            MasterJi
          </h1>
          
          <p className="text-xl md:text-2xl text-[#A1A1A1] mb-12 max-w-4xl mx-auto leading-relaxed">
            Access top-tier content covering subjects, peer reviews, and grow 
            your network—all in one place, a learning platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link to="/register">
              <Button size="lg" className="bg-[#E4593D] hover:bg-[#E3583D] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#131313] transition-all duration-300">
                Explore Courses
              </Button>
            </Link>
          </div>

          {/* Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 hover:shadow-lg transition-all duration-300 rounded-2xl">
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

      {/* AI Section */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
              <span className="text-[#E3583D]">AI</span>
            </h2>
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
              Explore cutting-edge artificial intelligence in school curricula and subjects to 
              stay ahead of the curve.
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

      {/* Inspire Section */}
      <section className="py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
              <span className="text-[#E3583D]">Inspire</span>
            </h2>
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
              Discover diverse podcasts to expand your mind and elevate your 
              professional knowledge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#F1F1F1] mb-8">Student Projects</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-[#131313] rounded-xl aspect-square flex items-center justify-center border border-[#2B2B2B]">
                    <div className="w-8 h-8 bg-[#E3583D]/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#E3583D] rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#F1F1F1] mb-8">Latest Blog Posts</h3>
              <div className="space-y-4">
                {[
                  "AI Powered Assistants Are the Programmers",
                  "Why is This Different from a One-Stop LMS"
                ].map((title, index) => (
                  <Card key={index} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all duration-300 rounded-xl">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-[#F1F1F1] mb-2">{title}</h4>
                      <p className="text-[#A1A1A1] text-sm">Jan 06, 2024</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
              <span className="text-[#E3583D]">Students</span>
            </h2>
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
              Join thousands of learners who trust our experience. Real testimonials from satisfied 
              students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Brian Johnson", rating: 5, text: "Simply extraordinary web programming. I love the well-structured courses, which cover every aspect.", avatar: "BJ" },
              { name: "Marina Chen", rating: 5, text: "As a complete beginner I got foundational skills and understanding like no other course.", avatar: "MC" },  
              { name: "Rodriguez Lopez", rating: 5, text: "Incredibly well organized course content. It really sets a foundation that will benefit me the most.", avatar: "RL" }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all duration-300 rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#E3583D] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#F1F1F1]">{testimonial.name}</h4>
                      <div className="flex text-[#E3583D]">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
              <span className="text-[#E3583D]">Everyone</span>
            </h2>
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
              Simple pricing tailored to learners and creators.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: "Free Plan", 
                price: "Free", 
                features: ["5 active peer-reviews", "1 GB total uploads", "10 monthly peer graders"],
                cta: "Get Started Free"
              },
              { 
                name: "Standard Plan", 
                price: "$49", 
                period: "/mo",
                features: ["30 active peer-reviews", "25 GB total uploads", "25 monthly peer graders"],
                cta: "Choose Standard",
                popular: true
              },
              { 
                name: "Pro Plan", 
                price: "$99", 
                period: "/mo",
                features: ["Unlimited peer-reviews", "100 GB total uploads", "Unlimited peer graders"],
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
              Need to <span className="text-[#E3583D]">Know</span>
            </h2>
            <p className="text-xl text-[#A1A1A1]">
              Common questions about our platform and learning experience.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How do I start a program?", a: "You can enroll in any program by browsing our course catalog and clicking the enroll button. Most courses start immediately after enrollment." },
              { q: "How does peer review work?", a: "Our peer review system allows you to receive and give feedback on projects and assignments, fostering collaborative learning and skill development." },
              { q: "Can I get a certificate?", a: "Yes! Upon successful completion of any course you'll receive a certificate that you can share with employers and on professional networks." },
              { q: "What if I have technical difficulties?", a: "Our support team is available 24/7 to help with any technical issues. You can reach us through the help center or live chat." }
            ].map((faq, index) => (
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
      <section className="py-32 bg-[#0B0B0B] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-[#F1F1F1]">
            Join thousands of learners who are already, learning new skills with 
            <span className="text-[#E3583D]"> MasterJi</span>
          </h2>
          <Link to="/register">
            <Button size="lg" className="bg-[#E4593D] hover:bg-[#E3583D] text-white px-12 py-5 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-8">
              Start Your Learning Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0B0B] text-[#F1F1F1] py-16 border-t border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#E3583D] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-2xl font-bold">MasterJi</span>
              </div>
              <p className="text-[#A1A1A1] mb-6 max-w-md leading-relaxed">
                Building modern learning experiences that solve real problems and create meaningful educational outcomes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-[#F1F1F1]">Platform</h4>
              <ul className="space-y-3 text-[#A1A1A1]">
                <li><Link to="/courses" className="hover:text-[#E3583D] transition-colors">Courses</Link></li>
                <li><Link to="/blogs" className="hover:text-[#E3583D] transition-colors">Blogs</Link></li>
                <li><Link to="/dashboard" className="hover:text-[#E3583D] transition-colors">Dashboard</Link></li>
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

export default Landing;
