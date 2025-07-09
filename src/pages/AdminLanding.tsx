
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, GraduationCap, BookOpen, BarChart3 } from 'lucide-react';

const AdminLanding = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#F1F1F1]">Welcome, Admin</h1>
          <p className="text-[#A1A1A1] mt-2">
            Use the sidebar to manage courses, teachers, students, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">
                Total Students
              </CardTitle>
              <Users className="h-4 w-4 text-[#E3583D]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">245</div>
            </CardContent>
          </Card>

          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">
                Total Teachers
              </CardTitle>
              <GraduationCap className="h-4 w-4 text-[#E3583D]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">18</div>
            </CardContent>
          </Card>

          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">
                Active Courses
              </CardTitle>
              <BookOpen className="h-4 w-4 text-[#E3583D]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">12</div>
            </CardContent>
          </Card>

          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">
                Assignments
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-[#E3583D]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">89</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#131313] border-[#2B2B2B]">
          <CardHeader>
            <CardTitle className="text-[#F1F1F1]">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#A1A1A1]">
              Get started by selecting an option from the sidebar to manage your platform.
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminLanding;
