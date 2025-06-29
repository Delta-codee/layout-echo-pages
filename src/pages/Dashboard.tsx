
import Layout from '@/components/Layout';
import { Users, Folder, FileText, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
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
      <div className="p-8 h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Overview of your progress and upcoming deadlines.</p>
          </div>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            View Notice Board
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-[#FF6B47]" />
                    <span className="text-muted-foreground text-sm font-medium">{stat.title}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-foreground mb-4">{stat.total}</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">
                        {stat.title === 'Courses Enrolled' ? 'Completed' : 'Total'}
                      </span>
                      <span className="text-green-600 text-sm font-medium">0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">
                        {stat.title === 'Courses Enrolled' ? 'Ongoing' : 'Pending'}
                      </span>
                      <span className="text-red-500 text-sm font-medium">0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-foreground" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground italic">No upcoming deadlines. You're all caught up!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
