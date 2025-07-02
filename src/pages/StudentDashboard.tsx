
import Layout from '@/components/Layout';
import { Plus, Star, Users, Play, MessageCircle, TrendingUp, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useUser } from '@clerk/clerk-react';

const StudentDashboard = () => {
  const { user } = useAuth();
  const { user: clerkUser } = useUser();

  const isNewUser = clerkUser && clerkUser.createdAt && 
    (Date.now() - new Date(clerkUser.createdAt).getTime()) < (7 * 24 * 60 * 60 * 1000); // Less than 7 days

  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {isNewUser ? `Welcome to MasterJi, ${user?.name?.split(' ')[0] || 'there'}!` : 'Student Dashboard'}
          </h1>
          <p className="text-gray-400">
            {isNewUser 
              ? 'Ready to start your learning journey? Let\'s get you set up with your first course and project.'
              : 'Welcome back! Continue your learning journey.'
            }
          </p>
        </div>

        {/* New User Welcome Banner */}
        {isNewUser && (
          <Card className="bg-gradient-to-r from-[#E3583D]/10 to-[#E4593D]/10 border-[#E3583D]/30 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E3583D] rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#F1F1F1] font-semibold mb-2">Get Started with MasterJi</h3>
                  <p className="text-[#A1A1A1] text-sm mb-4">
                    Complete these steps to make the most of your learning experience
                  </p>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-[#E3583D] hover:bg-[#E4593D] text-white">
                      Browse Courses
                    </Button>
                    <Button size="sm" variant="outline" className="border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#131313]">
                      Complete Profile
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#1a1a1a] border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Projects</p>
                  <p className="text-2xl font-bold text-white">{isNewUser ? 0 : 12}</p>
                </div>
                <div className="w-12 h-12 bg-[#FF6B47]/20 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#FF6B47]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Connections</p>
                  <p className="text-2xl font-bold text-white">{isNewUser ? 0 : 156}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Courses</p>
                  <p className="text-2xl font-bold text-white">{isNewUser ? 0 : 8}</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Rank</p>
                  <p className="text-2xl font-bold text-white">{isNewUser ? 'New' : '#23'}</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Projects */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">My Projects</CardTitle>
                <Button className="bg-[#FF6B47] hover:bg-[#e55a3d] text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Project
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    {isNewUser ? 'Ready to showcase your skills?' : 'No projects uploaded yet'}
                  </div>
                  <p className="text-gray-500 text-sm mb-6">
                    {isNewUser 
                      ? 'Upload your first project to start building your portfolio and get feedback from the community.'
                      : 'Upload your first project to showcase your skills'
                    }
                  </p>
                  <Button className="bg-[#FF6B47] hover:bg-[#e55a3d] text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    {isNewUser ? 'Upload Your First Project' : 'Upload Your First Project'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Projects from Others */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">
                  {isNewUser ? 'Explore Community Projects' : 'Recent Projects from Community'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: 'E-commerce Website', author: 'Alex Johnson', rating: 4.8, description: 'A full-stack e-commerce platform built with React and Node.js', tags: ['React', 'Node.js'] },
                    { title: 'Task Management App', author: 'Sara Kim', rating: 4.9, description: 'Clean and intuitive task management with drag-and-drop functionality', tags: ['React', 'TypeScript'] },
                    { title: 'Weather Dashboard', author: 'Mike Chen', rating: 4.7, description: 'Beautiful weather app with real-time data and forecasts', tags: ['Vue.js', 'API'] }
                  ].map((project, i) => (
                    <div key={i} className="border border-gray-700 rounded-lg p-4 hover:border-[#FF6B47]/50 transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-semibold">{project.title}</h3>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm">{project.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-[#FF6B47] rounded-full flex items-center justify-center text-white text-xs">
                            {project.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-gray-400 text-sm">{project.author}</span>
                        </div>
                        <div className="flex gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Courses */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">
                  {isNewUser ? 'Recommended Courses' : 'Current Courses'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isNewUser ? (
                  <div className="space-y-4">
                    {[
                      { title: 'React Fundamentals', difficulty: 'Beginner', duration: '4 weeks' },
                      { title: 'JavaScript Basics', difficulty: 'Beginner', duration: '3 weeks' },
                      { title: 'HTML & CSS', difficulty: 'Beginner', duration: '2 weeks' }
                    ].map((course, i) => (
                      <div key={i} className="p-3 border border-gray-700 rounded-lg hover:border-[#FF6B47]/30 transition-all cursor-pointer">
                        <h4 className="text-white font-medium text-sm">{course.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[#FF6B47] text-xs">{course.difficulty}</span>
                          <span className="text-gray-500 text-xs">•</span>
                          <span className="text-gray-400 text-xs">{course.duration}</span>
                        </div>
                      </div>
                    ))}
                    <Button className="w-full bg-[#FF6B47] hover:bg-[#e55a3d] text-white mt-4">
                      Browse All Courses
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {[
                      { title: 'React Fundamentals', progress: 75 },
                      { title: 'Node.js Backend', progress: 45 },
                      { title: 'Database Design', progress: 30 }
                    ].map((course, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">{course.title}</span>
                          <span className="text-gray-400 text-xs">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-[#FF6B47] h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:text-white hover:border-[#FF6B47]">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {isNewUser ? 'Join Community Chat' : 'Join Community Chat'}
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:text-white hover:border-[#FF6B47]">
                  <Users className="w-4 h-4 mr-2" />
                  {isNewUser ? 'Find Study Partners' : 'Find Study Partners'}
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:text-white hover:border-[#FF6B47]">
                  <Play className="w-4 h-4 mr-2" />
                  {isNewUser ? 'Explore Courses' : 'Browse Courses'}
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card className="bg-[#1a1a1a] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">
                  {isNewUser ? 'Getting Started' : 'Upcoming Sessions'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isNewUser ? (
                  <div className="space-y-3">
                    <div className="p-3 bg-[#E3583D]/10 rounded-lg border border-[#E3583D]/20">
                      <h4 className="text-[#E3583D] font-medium text-sm mb-1">Complete Your Profile</h4>
                      <p className="text-[#A1A1A1] text-xs">Add bio, skills, and social links</p>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <h4 className="text-blue-400 font-medium text-sm mb-1">Choose Your First Course</h4>
                      <p className="text-[#A1A1A1] text-xs">Pick a course that matches your goals</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-400 text-sm">No upcoming sessions</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
