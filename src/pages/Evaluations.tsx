
import Layout from '@/components/Layout';
import { Search, BarChart3, Filter, Calendar, CheckCircle2, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

const Evaluations = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const { toast } = useToast();

  const evaluationStats = [
    {
      title: 'Total Evaluations',
      value: '24',
      icon: BarChart3,
      color: 'from-[#E3583D] to-[#E4593D]',
      change: '+12%'
    },
    {
      title: 'Completed',
      value: '18',
      icon: CheckCircle2,
      color: 'from-[#3FCF8E] to-[#2ECC71]',
      change: '+8%'
    },
    {
      title: 'In Progress',
      value: '4',
      icon: Clock,
      color: 'from-[#3A8EFF] to-[#2980B9]',
      change: '+2%'
    },
    {
      title: 'Average Score',
      value: '8.5',
      icon: TrendingUp,
      color: 'from-[#E3583D] to-[#E4593D]',
      change: '+0.5'
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Evaluations', count: 24 },
    { id: 'completed', label: 'Completed', count: 18 },
    { id: 'progress', label: 'In Progress', count: 4 },
    { id: 'pending', label: 'Pending', count: 2 }
  ];

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Evaluations Updated",
        description: "Your evaluation data has been refreshed successfully.",
        variant: "default",
      });
    }, 1500);
  };

  const mockEvaluations = [
    {
      id: 1,
      title: "React Advanced Concepts",
      type: "Code Review",
      score: 9.2,
      status: "completed",
      submittedDate: "2024-01-15",
      feedback: "Excellent implementation of hooks and state management"
    },
    {
      id: 2,
      title: "Database Design Project",
      type: "Project",
      score: 8.8,
      status: "completed",
      submittedDate: "2024-01-10",
      feedback: "Good normalization, could improve indexing"
    },
    {
      id: 3,
      title: "API Integration Task",
      type: "Peer Review",
      score: null,
      status: "in-progress",
      submittedDate: "2024-01-20",
      feedback: "Pending review from peers"
    }
  ];

  return (
    <Layout>
      <div className="p-8 bg-[#0B0B0B] min-h-screen">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-[#F1F1F1]">Evaluations</h1>
          </div>
          <p className="text-[#A1A1A1]">Track your performance and receive detailed assessments on your work.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {evaluationStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 bg-gradient-to-br ${stat.color} rounded-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[#3FCF8E] text-sm font-medium">{stat.change}</span>
                  </div>
                  <div className="text-3xl font-bold text-[#F1F1F1] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#A1A1A1]">{stat.title}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Search and Filter Section */}
        <Card className="bg-[#131313] border-[#2B2B2B] mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A1A1A1] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search evaluations by course, project, or type..."
                  className="w-full bg-[#0B0B0B] border border-[#2B2B2B] rounded-lg pl-12 pr-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D] transition-colors"
                />
              </div>
              <div className="flex gap-3">
                <select className="bg-[#0B0B0B] border border-[#2B2B2B] rounded-lg px-4 py-3 text-[#F1F1F1] focus:outline-none focus:border-[#E3583D] min-w-[150px] transition-colors">
                  <option>All Batches</option>
                  <option>Batch 2024-A</option>
                  <option>Batch 2024-B</option>
                </select>
                <select className="bg-[#0B0B0B] border border-[#2B2B2B] rounded-lg px-4 py-3 text-[#F1F1F1] focus:outline-none focus:border-[#E3583D] min-w-[150px] transition-colors">
                  <option>All Categories</option>
                  <option>Code Review</option>
                  <option>Project</option>
                  <option>Peer Review</option>
                </select>
                <Button 
                  onClick={handleRefresh}
                  className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white px-6"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Filter className="w-4 h-4 mr-2" />
                  )}
                  {loading ? 'Loading...' : 'Filter'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 border-b border-[#2B2B2B]">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-[#E3583D] text-[#E3583D]'
                  : 'border-transparent text-[#A1A1A1] hover:text-[#F1F1F1] hover:border-[#2B2B2B]'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Evaluations List */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-[#131313] border-[#2B2B2B]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-3/4 bg-[#2B2B2B]" />
                      <Skeleton className="h-3 w-1/2 bg-[#2B2B2B]" />
                    </div>
                    <Skeleton className="h-8 w-16 bg-[#2B2B2B]" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {mockEvaluations.map((evaluation) => (
              <Card key={evaluation.id} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-[#F1F1F1]">{evaluation.title}</h3>
                        <span className="px-2 py-1 bg-[#E3583D]/20 text-[#E3583D] text-xs rounded-full">
                          {evaluation.type}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          evaluation.status === 'completed' 
                            ? 'bg-[#3FCF8E]/20 text-[#3FCF8E]'
                            : 'bg-[#3A8EFF]/20 text-[#3A8EFF]'
                        }`}>
                          {evaluation.status === 'completed' ? 'Completed' : 'In Progress'}
                        </span>
                      </div>
                      <p className="text-[#A1A1A1] text-sm mb-2">{evaluation.feedback}</p>
                      <p className="text-[#A1A1A1] text-xs">Submitted: {evaluation.submittedDate}</p>
                    </div>
                    <div className="text-right">
                      {evaluation.score && (
                        <div className="text-2xl font-bold text-[#F1F1F1] mb-1">
                          {evaluation.score}/10
                        </div>
                      )}
                      <Button variant="outline" size="sm" className="border-[#2B2B2B] text-[#A1A1A1] hover:bg-[#2B2B2B] hover:text-[#F1F1F1]">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#E3583D]/20 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-[#E3583D]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#F1F1F1] mb-2">How Evaluations Work</h4>
                  <p className="text-sm text-[#A1A1A1] leading-relaxed">
                    Your work is assessed by instructors and peers. You'll receive detailed feedback, 
                    scores, and suggestions for improvement on each submission.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#3FCF8E]/20 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#3FCF8E]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#F1F1F1] mb-2">Evaluation Criteria</h4>
                  <p className="text-sm text-[#A1A1A1] leading-relaxed">
                    Code quality, design principles, functionality, and documentation. 
                    Each aspect is scored to help you understand your strengths and areas for growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Evaluations;
