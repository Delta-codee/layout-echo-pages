
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, GraduationCap, Star, FileText, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#F1F1F1] mb-2">Welcome to Admin Dashboard</h1>
          <p className="text-[#A1A1A1] text-lg">Manage your educational platform with complete control</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1] flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Total Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">245</div>
              <p className="text-xs text-green-400">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1] flex items-center gap-2">
                <Users className="w-4 h-4" />
                Active Teachers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">48</div>
              <p className="text-xs text-blue-400">All verified</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1] flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Total Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">24</div>
              <p className="text-xs text-purple-400">3 new this week</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1] flex items-center gap-2">
                <Star className="w-4 h-4" />
                Platform Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">4.8/5</div>
              <p className="text-xs text-green-400">Excellent feedback</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader>
              <CardTitle className="text-[#F1F1F1] flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-[#0B0B0B] rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-[#F1F1F1] text-sm">New teacher Dr. Sarah Johnson added</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#0B0B0B] rounded-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-[#F1F1F1] text-sm">Course "React Fundamentals" updated</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#0B0B0B] rounded-lg">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-[#F1F1F1] text-sm">25 new student registrations</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#0B0B0B] rounded-lg">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-[#F1F1F1] text-sm">Assignment review pending</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader>
              <CardTitle className="text-[#F1F1F1] flex items-center gap-2">
                <FileText className="w-5 h-5" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#A1A1A1]">Server Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A1A1A1]">Database Health</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">Healthy</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A1A1A1]">Active Sessions</span>
                  <span className="text-[#F1F1F1] font-medium">234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A1A1A1]">Response Time</span>
                  <span className="text-green-400 font-medium">125ms</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Overview */}
        <Card className="bg-[#131313] border-[#2B2B2B]">
          <CardHeader>
            <CardTitle className="text-[#F1F1F1]">Performance Overview</CardTitle>
            <CardDescription className="text-[#A1A1A1]">
              Key metrics and platform performance indicators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">92%</div>
                <p className="text-[#A1A1A1]">Student Completion Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4.7/5</div>
                <p className="text-[#A1A1A1]">Average Teacher Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">89%</div>
                <p className="text-[#A1A1A1]">Platform Satisfaction</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
