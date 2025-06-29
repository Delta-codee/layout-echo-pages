
import Layout from '@/components/Layout';
import { Users, Folder, FileText, GraduationCap, Calendar, CheckCircle2, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const stats = [
    {
      title: 'Peer Reviews',
      icon: Users,
      total: 0,
      pending: 0,
      completed: 0
    },
    {
      title: 'Projects',
      icon: Folder,
      total: 0,
      pending: 0,
      completed: 0
    },
    {
      title: 'Blogs',
      icon: FileText,
      total: 0,
      pending: 0,
      completed: 0
    },
    {
      title: 'Courses Enrolled',
      icon: GraduationCap,
      total: 0,
      ongoing: 0,
      completed: 0
    }
  ];

  const metrics = [
    { label: 'Marks Earned', value: '0' },
    { label: 'Peer Evaluations', value: '0' },
    { label: 'Code Quality Rating', value: '0.0/5' },
    { label: 'Writing Rating', value: '0.0/5' },
    { label: 'Evaluation Rating', value: '0.0/5' },
    { label: 'Penalty Marks', value: '0' }
  ];

  return (
    <Layout>
      <div className="p-8 bg-[#0B0B0B] min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-[#F1F1F1]">Dashboard</h1>
            </div>
            <p className="text-[#A1A1A1]">Overview of your progress and upcoming deadlines.</p>
          </div>
          <button className="text-[#E3583D] hover:text-[#E4593D] font-medium transition-colors px-4 py-2 border border-[#E3583D] rounded-lg hover:bg-[#E3583D]/10">
            View Notice Board
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#A1A1A1] text-sm font-medium">{stat.title}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-[#F1F1F1] mb-4">{stat.total}</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#A1A1A1] text-sm">
                        {stat.title === 'Courses Enrolled' ? 'Completed' : 'Total'}
                      </span>
                      <span className="text-[#3FCF8E] text-sm font-medium">0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#A1A1A1] text-sm">
                        {stat.title === 'Courses Enrolled' ? 'Ongoing' : 'Pending'}
                      </span>
                      <span className="text-[#E3583D] text-sm font-medium">0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#F1F1F1] mb-2">{metric.value}</div>
                <div className="text-[#A1A1A1] text-sm font-medium">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-[#F1F1F1]">
              <Calendar className="w-5 h-5 text-[#E3583D]" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-[#3FCF8E] mx-auto mb-4" />
              <p className="text-[#A1A1A1] italic">No upcoming deadlines. You're all caught up!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
