
import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, BookOpen, BarChart3, UserPlus, BookPlus, FileText, TrendingUp, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@clerk/clerk-react';

const AdminLanding = () => {
  const { signOut } = useAuth();

  const stats = [
    { number: "245", label: "Total Students", description: "Enrolled learners" },
    { number: "18", label: "Total Teachers", description: "Active instructors" },
    { number: "12", label: "Active Courses", description: "Running programs" }
  ];

  const adminTools = [
    {
      icon: UserPlus,
      title: "Manage Users",
      description: "Add, edit, and manage student and teacher accounts",
      link: "/admin/students"
    },
    {
      icon: BookPlus,
      title: "Add Courses",
      description: "Create and manage course content and curriculum",
      link: "/admin/add-course"
    },
    {
      icon: FileText,
      title: "Review Assignments",
      description: "Monitor assignment submissions and grading",
      link: "/admin/assignments"
    },
    {
      icon: BarChart3,
      title: "Performance Reports",
      description: "Track learning analytics and progress metrics",
      link: "/admin/dashboard"
    }
  ];

  const insights = [
    { title: "Student Engagement", value: "92%", trend: "+5%" },
    { title: "Course Completion", value: "78%", trend: "+12%" },
    { title: "Teacher Satisfaction", value: "4.8/5", trend: "+0.3%" }
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F1F1F1]">
      {/* Header */}
      <header className="bg-[#131313] border-b border-[#2B2B2B] px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E3583D] rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#F1F1F1]">MasterJi</h1>
              <p className="text-xs text-[#A1A1A1]">Admin Panel</p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => signOut()}
            className="border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#1A1A1A]"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-[#0B0B0B] via-[#1a0d1a] to-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge variant="outline" className="mb-8 px-6 py-2 text-sm font-medium bg-[#131313] border-[#2B2B2B] text-[#E3583D]">
            <span className="mr-2">🔧</span>
            Administrative Control Panel
          </Badge>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none tracking-tight">
            Empower Your Management Journey<br />
            with <span className="text-[#E3583D]">MasterJi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#A1A1A1] mb-12 max-w-4xl mx-auto leading-relaxed">
            Monitor, manage, and improve your platform's learning experience with comprehensive administrative tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link to="/admin/dashboard">
              <Button 
                size="lg" 
                className="bg-[#E4593D] hover:bg-[#E3583D] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Go to Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/admin/add-course">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#131313] transition-all duration-300"
              >
                Manage Courses
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-[#131313] to-[#1a1a1a] border-[#2B2B2B] hover:border-[#E3583D]/30 hover:shadow-lg transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-[#E3583D] mb-4">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">{stat.label}</h3>
                  <p className="text-[#A1A1A1] leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Tools Section */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
              Administrative <span className="text-[#E3583D]">Tools</span>
            </h2>
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
              Comprehensive tools to manage users, courses, and monitor platform performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adminTools.map((tool, index) => (
              <Link key={index} to={tool.link}>
                <Card className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 hover:shadow-lg transition-all duration-300 rounded-2xl group h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#E3583D]/10 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#E3583D]/20 transition-colors">
                      <tool.icon className="w-8 h-8 text-[#E3583D]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#F1F1F1] mb-3">{tool.title}</h3>
                    <p className="text-[#A1A1A1] text-sm leading-relaxed">{tool.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Feedback Section */}
      <section className="py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1F1F1]">
              Platform <span className="text-[#E3583D]">Insights</span>
            </h2>
            <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
              Real-time metrics and performance indicators to track your platform's success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all duration-300 rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-[#F1F1F1]">{insight.title}</h3>
                    <div className="flex items-center text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {insight.trend}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-[#E3583D]">{insight.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gradient-to-br from-[#0B0B0B] via-[#1a0d1a] to-[#0B0B0B] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-[#F1F1F1]">
            Ready to Manage?
          </h2>
          <p className="text-xl text-[#A1A1A1] mb-12 max-w-2xl mx-auto">
            Access all administrative tools and start managing your educational platform effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admin/dashboard">
              <Button 
                size="lg" 
                className="bg-[#E4593D] hover:bg-[#E3583D] text-white px-12 py-5 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Access Dashboard
              </Button>
            </Link>
            <Link to="/admin/students">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-12 py-5 text-xl font-semibold rounded-xl border-2 border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#131313] transition-all duration-300"
              >
                Manage Users
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131313] text-[#F1F1F1] py-16 border-t border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#E3583D] rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">MasterJi Admin</span>
              </div>
              <p className="text-[#A1A1A1] mb-6 max-w-md leading-relaxed">
                Comprehensive administrative control for managing your educational platform effectively.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-[#F1F1F1]">Quick Links</h4>
              <ul className="space-y-3 text-[#A1A1A1]">
                <li><Link to="/admin/dashboard" className="hover:text-[#E3583D] transition-colors">Dashboard</Link></li>
                <li><Link to="/admin/students" className="hover:text-[#E3583D] transition-colors">Manage Students</Link></li>
                <li><Link to="/admin/teachers" className="hover:text-[#E3583D] transition-colors">Manage Teachers</Link></li>
                <li><Link to="/admin/add-course" className="hover:text-[#E3583D] transition-colors">Course Management</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-[#F1F1F1]">Support</h4>
              <ul className="space-y-3 text-[#A1A1A1]">
                <li><a href="#" className="hover:text-[#E3583D] transition-colors">Admin Help Center</a></li>
                <li><a href="#" className="hover:text-[#E3583D] transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-[#E3583D] transition-colors">System Status</a></li>
                <li><button onClick={() => signOut()} className="hover:text-[#E3583D] transition-colors">Logout</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#2B2B2B] mt-12 pt-8 text-center text-[#A1A1A1]">
            <p>&copy; 2025 MasterJi Admin Panel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminLanding;
