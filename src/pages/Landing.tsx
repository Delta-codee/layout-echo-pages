
import { Link } from 'react-router-dom';
import { GraduationCap, Users, BookOpen, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <header className="border-b border-gray-700 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FF6B47] rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">MasterJi</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-[#FF6B47] hover:bg-[#e55a3d] text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Master Your Learning Journey with{' '}
          <span className="text-[#FF6B47]">MasterJi</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Collaborate with peers, showcase your projects, share knowledge through blogs, 
          and track your progress with comprehensive evaluations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register">
            <Button className="bg-[#FF6B47] hover:bg-[#e55a3d] text-white px-8 py-3 text-lg">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg">
              View Dashboard
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">
          Everything You Need to <span className="text-[#FF6B47]">Excel</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 text-center hover:border-[#FF6B47] transition-colors">
            <div className="w-12 h-12 bg-[#FF6B47] rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Peer Reviews</h3>
            <p className="text-gray-400">
              Submit your work and receive detailed feedback from peers to improve your skills.
            </p>
          </div>
          
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 text-center hover:border-[#FF6B47] transition-colors">
            <div className="w-12 h-12 bg-[#FF6B47] rounded-lg mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Project Showcase</h3>
            <p className="text-gray-400">
              Display your projects and discover amazing work from fellow learners.
            </p>
          </div>
          
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 text-center hover:border-[#FF6B47] transition-colors">
            <div className="w-12 h-12 bg-[#FF6B47] rounded-lg mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Blog Platform</h3>
            <p className="text-gray-400">
              Share your knowledge and learn from others through engaging blog posts.
            </p>
          </div>
          
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 text-center hover:border-[#FF6B47] transition-colors">
            <div className="w-12 h-12 bg-[#FF6B47] rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Evaluations</h3>
            <p className="text-gray-400">
              Track your performance with detailed assessments and progress reports.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a1a1a] border-t border-gray-700">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already mastering their skills with MasterJi.
          </p>
          <Link to="/register">
            <Button className="bg-[#FF6B47] hover:bg-[#e55a3d] text-white px-8 py-3 text-lg">
              Create Your Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
