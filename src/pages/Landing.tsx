
import { Link } from 'react-router-dom';
import { GraduationCap, Users, BookOpen, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeSelector from '@/components/ThemeSelector';

const Landing = () => {
  const { currentTheme } = useTheme();

  return (
    <div className={`min-h-screen ${currentTheme.bg} text-white transition-all duration-500`}>
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B47]/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MasterJi</span>
          </div>
          
          <div className="flex items-center gap-6">
            <ThemeSelector />
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg px-6">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] hover:from-[#e55a3d] hover:to-[#d4493a] text-white shadow-lg shadow-[#FF6B47]/25 hover:shadow-xl hover:shadow-[#FF6B47]/30 transition-all duration-200 rounded-lg px-6">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Master Your Learning Journey with{' '}
            <span className="bg-gradient-to-r from-[#FF6B47] via-[#ff7a5c] to-[#e55a3d] bg-clip-text text-transparent">MasterJi</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Collaborate with peers, showcase your projects, share knowledge through blogs, 
            and track your progress with comprehensive evaluations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/register">
              <Button className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] hover:from-[#e55a3d] hover:to-[#d4493a] text-white px-10 py-4 text-lg font-semibold shadow-xl shadow-[#FF6B47]/25 hover:shadow-2xl hover:shadow-[#FF6B47]/30 transition-all duration-300 rounded-xl hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" className="px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Everything You Need to <span className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] bg-clip-text text-transparent">Excel</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-[#FF6B47]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FF6B47]/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#FF6B47]/20 group-hover:shadow-xl group-hover:shadow-[#FF6B47]/30 transition-all duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Peer Reviews</h3>
              <p className="text-white/70 leading-relaxed">
                Submit your work and receive detailed feedback from peers to improve your skills.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-[#FF6B47]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FF6B47]/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#FF6B47]/20 group-hover:shadow-xl group-hover:shadow-[#FF6B47]/30 transition-all duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Project Showcase</h3>
              <p className="text-white/70 leading-relaxed">
                Display your projects and discover amazing work from fellow learners.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-[#FF6B47]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FF6B47]/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#FF6B47]/20 group-hover:shadow-xl group-hover:shadow-[#FF6B47]/30 transition-all duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Blog Platform</h3>
              <p className="text-white/70 leading-relaxed">
                Share your knowledge and learn from others through engaging blog posts.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-[#FF6B47]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FF6B47]/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#FF6B47]/20 group-hover:shadow-xl group-hover:shadow-[#FF6B47]/30 transition-all duration-300">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Evaluations</h3>
              <p className="text-white/70 leading-relaxed">
                Track your performance with detailed assessments and progress reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black/20 backdrop-blur-sm border-t border-white/10 min-h-[400px] shadow-inner">
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to Start Learning?</h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Join thousands of learners who are already mastering their skills with MasterJi.
            </p>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] hover:from-[#e55a3d] hover:to-[#d4493a] text-white px-12 py-5 text-xl font-semibold shadow-2xl shadow-[#FF6B47]/25 hover:shadow-3xl hover:shadow-[#FF6B47]/30 transition-all duration-300 rounded-xl hover:scale-105">
                Create Your Account
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
