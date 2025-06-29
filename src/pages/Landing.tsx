
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
    { number: "100%", label: "Client Satisfaction", description: "Every project delivered on time" },
    { number: "121%", label: "Performance Boost", description: "Average speed improvement" },
    { number: "2x", label: "Faster Development", description: "Using modern frameworks" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge variant="outline" className="mb-8 px-6 py-2 text-sm font-medium bg-white border-gray-200">
            <span className="mr-2">{'>'}</span>
            Trusted by 500+ businesses worldwide
          </Badge>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none tracking-tight">
            Web Apps that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Make Sense.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            We build modern, performant web applications that solve real problems. 
            From design to deployment, we handle the technical complexity so you can focus on your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link to="/courses">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section - Dark Theme (Steamline Style) */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Performance</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our development process delivers measurable results that matter to your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {metric.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">{metric.label}</h3>
                  <p className="text-gray-400">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of projects we've built for clients across different industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {recentWork.map((project, index) => (
              <Card key={index} className="bg-gray-50 border-0 hover:bg-gray-100 transition-all duration-300 rounded-2xl group">
                <CardContent className="p-8">
                  <Badge variant="outline" className="mb-4 text-xs font-medium bg-white">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <Button variant="outline" className="rounded-full font-medium">
                    Live Preview
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Star className="w-8 h-8 text-gray-600" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              "Applabs helped us build our website from scratch to production in 3 months. Worth it too. They took our messy brief and delivered a product so refined that even our team-mates swore we were faking it."
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900 text-lg">Joel Sutton</p>
              <p className="text-gray-600">Co-owner at Heart Software</p>
            </div>
          </div>
        </div>
      </section>

      {/* Twitter Testimonials */}
      <HorizontalTwitterTestimonials />

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              We handle just about <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">everything!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to final deployment, we provide comprehensive web development services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 rounded-2xl group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <service.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Dark Theme */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Let's build your website today!
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Turn your ideas into reality with our expert development team. 
            We're ready to bring your vision to life.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-5 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Get Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold">{'>'}</span>
                <span className="text-2xl font-bold">Applabs</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Building modern web applications that solve real problems and create meaningful user experiences.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Applabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
