
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useRole } from '@/hooks/useRole';
import { Button } from '@/components/ui/button';
import { GraduationCap, ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';

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

  // Show landing page for non-admin users and guests
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F1F1F1]">
      {/* Header */}
      <header className="bg-[#131313] border-b border-[#2B2B2B] px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E3583D] rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#F1F1F1]">MasterJi</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/about" className="text-[#A1A1A1] hover:text-[#F1F1F1] transition-colors">About</a>
            <a href="/courses" className="text-[#A1A1A1] hover:text-[#F1F1F1] transition-colors">Courses</a>
            <a href="/pricing" className="text-[#A1A1A1] hover:text-[#F1F1F1] transition-colors">Pricing</a>
            {!isSignedIn && (
              <>
                <a href="/login" className="text-[#A1A1A1] hover:text-[#F1F1F1] transition-colors">Login</a>
                <a href="/register">
                  <Button className="bg-[#E3583D] hover:bg-[#E4593D] text-white">
                    Get Started
                  </Button>
                </a>
              </>
            )}
            {isSignedIn && !isAdmin && (
              <a href="/dashboard">
                <Button className="bg-[#E3583D] hover:bg-[#E4593D] text-white">
                  Dashboard
                </Button>
              </a>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-[#0B0B0B] via-[#1a0d1a] to-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none tracking-tight">
            Master Your Learning Journey<br />
            with <span className="text-[#E3583D]">MasterJi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#A1A1A1] mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your skills with personalized courses, expert instructors, and cutting-edge learning technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            {!isSignedIn ? (
              <>
                <a href="/register">
                  <Button 
                    size="lg" 
                    className="bg-[#E4593D] hover:bg-[#E3583D] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Learning Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="/courses">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#131313] transition-all duration-300"
                  >
                    Explore Courses
                  </Button>
                </a>
              </>
            ) : (
              <a href="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-[#E4593D] hover:bg-[#E3583D] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
              Why Choose <span className="text-[#E3583D]">MasterJi</span>?
            </h2>
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
              Experience learning like never before with our comprehensive platform designed for success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#131313] border border-[#2B2B2B] rounded-2xl p-8 text-center hover:border-[#E3583D]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#E3583D]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-[#E3583D]" />
              </div>
              <h3 className="text-xl font-bold text-[#F1F1F1] mb-3">Expert-Led Courses</h3>
              <p className="text-[#A1A1A1] leading-relaxed">
                Learn from industry professionals with years of experience in their respective fields.
              </p>
            </div>
            
            <div className="bg-[#131313] border border-[#2B2B2B] rounded-2xl p-8 text-center hover:border-[#E3583D]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#E3583D]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-[#E3583D]" />
              </div>
              <h3 className="text-xl font-bold text-[#F1F1F1] mb-3">Community Learning</h3>
              <p className="text-[#A1A1A1] leading-relaxed">
                Connect with fellow learners, share knowledge, and grow together in our vibrant community.
              </p>
            </div>
            
            <div className="bg-[#131313] border border-[#2B2B2B] rounded-2xl p-8 text-center hover:border-[#E3583D]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#E3583D]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-[#E3583D]" />
              </div>
              <h3 className="text-xl font-bold text-[#F1F1F1] mb-3">Certified Success</h3>
              <p className="text-[#A1A1A1] leading-relaxed">
                Earn industry-recognized certificates and showcase your achievements to employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#0B0B0B] via-[#1a0d1a] to-[#0B0B0B] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-[#F1F1F1]">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-[#A1A1A1] mb-12 max-w-2xl mx-auto">
            Join thousands of learners who have already started their journey to success with MasterJi.
          </p>
          {!isSignedIn ? (
            <a href="/register">
              <Button 
                size="lg" 
                className="bg-[#E4593D] hover:bg-[#E3583D] text-white px-12 py-5 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Now
              </Button>
            </a>
          ) : (
            <a href="/dashboard">
              <Button 
                size="lg" 
                className="bg-[#E4593D] hover:bg-[#E3583D] text-white px-12 py-5 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Continue Learning
              </Button>
            </a>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131313] text-[#F1F1F1] py-16 border-t border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#E3583D] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">MasterJi</span>
            </div>
            <p className="text-[#A1A1A1] mb-6 max-w-md mx-auto leading-relaxed">
              Empowering learners worldwide with quality education and expert guidance.
            </p>
            <div className="border-t border-[#2B2B2B] pt-8 text-center text-[#A1A1A1]">
              <p>&copy; 2025 MasterJi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
