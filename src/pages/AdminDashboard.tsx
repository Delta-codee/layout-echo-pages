
import { useState } from 'react';
import { Users, BookOpen, BarChart3, Search, Filter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'assignments' | 'analytics'>('students');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for demonstration - will be replaced with Supabase data
  const students = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      enrolledCourses: 3,
      completedAssignments: 12,
      avgGrade: 85,
      lastActive: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      enrolledCourses: 2,
      completedAssignments: 8,
      avgGrade: 92,
      lastActive: '2024-01-14',
      status: 'active'
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike@example.com',
      enrolledCourses: 4,
      completedAssignments: 15,
      avgGrade: 78,
      lastActive: '2024-01-10',
      status: 'inactive'
    }
  ];

  const assignments = [
    {
      id: 1,
      title: 'React Portfolio Project',
      course: 'Frontend Development',
      submissions: 45,
      avgGrade: 87,
      dueDate: '2024-01-20',
      status: 'active'
    },
    {
      id: 2,
      title: 'Database Design Project',
      course: 'Backend Development',
      submissions: 32,
      avgGrade: 82,
      dueDate: '2024-01-25',
      status: 'active'
    }
  ];

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return 'text-green-400';
    if (grade >= 80) return 'text-yellow-400';
    if (grade >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">Active</span>
      : <span className="bg-gray-500/20 text-gray-400 px-2 py-1 rounded-full text-xs">Inactive</span>;
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#F1F1F1]">Admin Dashboard</h1>
              <p className="text-[#A1A1A1]">Manage students, assignments, and track progress</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[#A1A1A1] text-sm font-medium">Total Students</h3>
              <Users className="w-5 h-5 text-[#E3583D]" />
            </div>
            <p className="text-3xl font-bold text-[#F1F1F1]">142</p>
            <p className="text-green-400 text-sm">+12% this month</p>
          </div>
          <div className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[#A1A1A1] text-sm font-medium">Active Assignments</h3>
              <BookOpen className="w-5 h-5 text-[#E3583D]" />
            </div>
            <p className="text-3xl font-bold text-[#F1F1F1]">24</p>
            <p className="text-blue-400 text-sm">8 due this week</p>
          </div>
          <div className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[#A1A1A1] text-sm font-medium">Avg Completion Rate</h3>
              <BarChart3 className="w-5 h-5 text-[#E3583D]" />
            </div>
            <p className="text-3xl font-bold text-[#F1F1F1]">87%</p>
            <p className="text-green-400 text-sm">+5% from last month</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('students')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'students'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Students
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'assignments'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Assignments
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <BarChart3 className="w-4 h-4 inline mr-2" />
            Analytics
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A1A1A1] w-5 h-5" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#131313] border border-[#2B2B2B] rounded-lg pl-12 pr-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D]"
            />
          </div>
          <Button variant="outline" className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Content */}
        {activeTab === 'students' && (
          <div className="bg-[#131313] border border-[#2B2B2B] rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0B0B0B] border-b border-[#2B2B2B]">
                  <tr>
                    <th className="text-left p-4 text-[#F1F1F1] font-medium">Student</th>
                    <th className="text-left p-4 text-[#F1F1F1] font-medium">Courses</th>
                    <th className="text-left p-4 text-[#F1F1F1] font-medium">Assignments</th>
                    <th className="text-left p-4 text-[#F1F1F1] font-medium">Avg Grade</th>
                    <th className="text-left p-4 text-[#F1F1F1] font-medium">Last Active</th>
                    <th className="text-left p-4 text-[#F1F1F1] font-medium">Status</th>
                    <th className="text-left p-4 text-[#F1F1F1] font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b border-[#2B2B2B] hover:bg-[#0B0B0B]/50">
                      <td className="p-4">
                        <div>
                          <p className="text-[#F1F1F1] font-medium">{student.name}</p>
                          <p className="text-[#A1A1A1] text-sm">{student.email}</p>
                        </div>
                      </td>
                      <td className="p-4 text-[#A1A1A1]">{student.enrolledCourses}</td>
                      <td className="p-4 text-[#A1A1A1]">{student.completedAssignments}</td>
                      <td className="p-4">
                        <span className={`font-bold ${getGradeColor(student.avgGrade)}`}>
                          {student.avgGrade}%
                        </span>
                      </td>
                      <td className="p-4 text-[#A1A1A1]">{student.lastActive}</td>
                      <td className="p-4">{getStatusBadge(student.status)}</td>
                      <td className="p-4">
                        <Button variant="outline" size="sm" className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'assignments' && (
          <div className="space-y-6">
            {assignments.map((assignment) => (
              <div key={assignment.id} className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#F1F1F1] mb-2">{assignment.title}</h3>
                    <p className="text-[#A1A1A1] mb-2">Course: {assignment.course}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#A1A1A1]">Due: {assignment.dueDate}</span>
                      <span className="text-[#A1A1A1]">Submissions: {assignment.submissions}</span>
                      <span className={`font-bold ${getGradeColor(assignment.avgGrade)}`}>
                        Avg Grade: {assignment.avgGrade}%
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
                      View Submissions
                    </Button>
                    <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
                      Grade All
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#F1F1F1] mb-4">Grade Distribution</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#A1A1A1]">A (90-100%)</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '35%'}}></div>
                    </div>
                    <span className="text-green-400 text-sm">35%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A1A1A1]">B (80-89%)</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <span className="text-yellow-400 text-sm">45%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A1A1A1]">C (70-79%)</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                      <div className="bg-orange-400 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                    <span className="text-orange-400 text-sm">15%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A1A1A1]">D (60-69%)</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{width: '5%'}}></div>
                    </div>
                    <span className="text-red-400 text-sm">5%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#F1F1F1] mb-4">Course Popularity</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#A1A1A1]">Frontend Development</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                      <div className="bg-[#E3583D] h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-[#E3583D] text-sm">85</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A1A1A1]">Backend Development</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                      <div className="bg-[#E3583D] h-2 rounded-full" style={{width: '72%'}}></div>
                    </div>
                    <span className="text-[#E3583D] text-sm">72</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A1A1A1]">Full Stack</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                      <div className="bg-[#E3583D] h-2 rounded-full" style={{width: '58%'}}></div>
                    </div>
                    <span className="text-[#E3583D] text-sm">58</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
