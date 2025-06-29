
import Layout from '@/components/Layout';
import { Search, BarChart3, Filter, Calendar, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Evaluations = () => {
  const evaluationStats = [
    {
      title: 'Total Evaluations',
      value: '0',
      icon: BarChart3,
      color: 'text-primary'
    },
    {
      title: 'Completed',
      value: '0',
      icon: CheckCircle2,
      color: 'text-green-600'
    },
    {
      title: 'In Progress',
      value: '0',
      icon: Clock,
      color: 'text-yellow-600'
    },
    {
      title: 'Pending',
      value: '0',
      icon: AlertCircle,
      color: 'text-gray-500'
    }
  ];

  const filterTabs = [
    { label: 'All Evaluations', count: 0, active: true },
    { label: 'Completed', count: 0, active: false },
    { label: 'In Progress', count: 0, active: false },
    { label: 'Pending', count: 0, active: false }
  ];

  return (
    <Layout>
      <div className="p-8 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Evaluations</h1>
            <p className="text-gray-600">Track your performance and receive detailed assessments on your work.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {evaluationStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-gray-50 border-gray-200 hover:shadow-sm transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 bg-white rounded-lg ${stat.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.title}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Search and Filter Section */}
          <Card className="bg-gray-50 border-gray-200 mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search evaluations by course, project, or type..."
                    className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
                <div className="flex gap-3">
                  <select className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 min-w-[150px] transition-colors">
                    <option>All Batches</option>
                    <option>Batch 2024-A</option>
                    <option>Batch 2024-B</option>
                  </select>
                  <select className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 min-w-[150px] transition-colors">
                    <option>All Categories</option>
                    <option>Code Review</option>
                    <option>Project</option>
                    <option>Peer Review</option>
                  </select>
                  <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 px-6">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-6 border-b border-gray-200">
            {filterTabs.map((tab, index) => (
              <button
                key={index}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  tab.active
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-200'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Empty State */}
          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-xl mx-auto mb-6 flex items-center justify-center border border-gray-200">
                  <BarChart3 className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">No evaluations available</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  There are currently no evaluations in this category. 
                  Check back later or try a different filter to see your assessment history.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6">
                    View All Courses
                  </Button>
                  <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 px-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Assessment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How Evaluations Work</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Your work is assessed by instructors and peers. You'll receive detailed feedback, 
                      scores, and suggestions for improvement on each submission.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-pink-50 border-pink-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-pink-100 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Evaluation Criteria</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Code quality, design principles, functionality, and documentation. 
                      Each aspect is scored to help you understand your strengths and areas for growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Evaluations;
