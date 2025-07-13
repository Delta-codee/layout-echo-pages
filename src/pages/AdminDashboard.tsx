import { useState } from 'react';
import { Users, BookOpen, BarChart3, Search, Filter, Download, Plus, Eye, Edit, Trash2, GraduationCap, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useRole } from '@/hooks/useRole';
import { Navigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { permissions } = useRole();
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'teachers' | 'cohorts' | 'students' | 'analytics'>('overview');
  const [searchQuery, setSearchQuery] = useState('');

  // Redirect if not admin
  if (!permissions.canViewAllData) {
    return <Navigate to="/dashboard-redirect" replace />;
  }

  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: 'React Fundamentals',
      description: 'Complete introduction to React framework',
      duration: '8 weeks',
      level: 'Beginner',
      enrolledStudents: 45,
      assignedTeacher: 'Dr. Sarah Johnson',
      teacherEmail: 'sarah@teacher.com',
      status: 'active',
      createdAt: '2024-01-15',
      completionRate: 85
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Deep dive into modern JavaScript features',
      duration: '10 weeks',
      level: 'Intermediate',
      enrolledStudents: 32,
      assignedTeacher: 'Prof. Mike Williams',
      teacherEmail: 'mike@teacher.com',
      status: 'active',
      createdAt: '2024-02-01',
      completionRate: 78
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      description: 'Building scalable server-side applications',
      duration: '12 weeks',
      level: 'Advanced',
      enrolledStudents: 28,
      assignedTeacher: 'Dr. Emily Carter',
      teacherEmail: 'emily@teacher.com',
      status: 'inactive',
      createdAt: '2024-03-10',
      completionRate: 92
    }
  ];

  // Mock data for teachers
  const teachers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      email: 'sarah@teacher.com',
      specialization: 'Frontend Development',
      assignedCourses: ['React Fundamentals', 'Advanced JavaScript'],
      totalStudents: 78,
      avgRating: 4.8,
      activeHours: 32,
      joinedDate: '2024-01-10',
      status: 'active',
      performance: 95
    },
    {
      id: 2,
      name: 'Prof. Mike Williams',
      email: 'mike@teacher.com',
      specialization: 'Backend Development',
      assignedCourses: ['Node.js Backend Development'],
      totalStudents: 55,
      avgRating: 4.5,
      activeHours: 28,
      joinedDate: '2024-02-01',
      status: 'active',
      performance: 88
    },
    {
      id: 3,
      name: 'Dr. Emily Carter',
      email: 'emily@teacher.com',
      specialization: 'Full Stack Development',
      assignedCourses: [],
      totalStudents: 0,
      avgRating: 4.9,
      activeHours: 35,
      joinedDate: '2024-03-15',
      status: 'inactive',
      performance: 98
    }
  ];

  // Mock data for cohorts
  const cohorts = [
    {
      id: 1,
      name: 'Spring 2024 - Frontend Batch',
      startDate: '2024-02-01',
      endDate: '2024-06-01',
      studentsCount: 25,
      coursesIncluded: ['React Fundamentals', 'Advanced JavaScript'],
      assignedTeachers: ['Dr. Sarah Johnson', 'Prof. Mike Williams'],
      status: 'active',
      progress: 65
    },
    {
      id: 2,
      name: 'Fall 2024 - Backend Batch',
      startDate: '2024-08-01',
      endDate: '2024-12-01',
      studentsCount: 30,
      coursesIncluded: ['Node.js Backend Development'],
      assignedTeachers: ['Dr. Emily Carter'],
      status: 'active',
      progress: 40
    },
    {
      id: 3,
      name: 'Summer 2024 - Full Stack Intensive',
      startDate: '2024-06-15',
      endDate: '2024-08-15',
      studentsCount: 20,
      coursesIncluded: ['React Fundamentals', 'Advanced JavaScript', 'Node.js Backend Development'],
      assignedTeachers: ['Dr. Sarah Johnson', 'Prof. Mike Williams', 'Dr. Emily Carter'],
      status: 'inactive',
      progress: 80
    }
  ];

  // Mock data for students
  const students = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@student.com',
      cohort: 'Spring 2024 - Frontend Batch',
      enrolledCourses: 3,
      completedAssignments: 12,
      avgGrade: 92,
      attendance: 95,
      lastActive: '2024-01-15',
      status: 'active',
      joinedDate: '2024-02-01'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@student.com',
      cohort: 'Fall 2024 - Backend Batch',
      enrolledCourses: 2,
      completedAssignments: 8,
      avgGrade: 85,
      attendance: 88,
      lastActive: '2024-01-14',
      status: 'active',
      joinedDate: '2024-02-10'
    },
    {
      id: 3,
      name: 'Carol Davis',
      email: 'carol@student.com',
      cohort: 'Summer 2024 - Full Stack Intensive',
      enrolledCourses: 4,
      completedAssignments: 15,
      avgGrade: 78,
      attendance: 82,
      lastActive: '2024-01-10',
      status: 'inactive',
      joinedDate: '2024-03-05'
    }
  ];

  const systemStats = {
    totalCourses: courses.length,
    totalTeachers: teachers.length,
    totalCohorts: cohorts.length,
    totalStudents: students.length,
    activeUsers: 145,
    completionRate: 87,
    avgGrade: 85.6,
    monthlyGrowth: 12.5
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: 'bg-green-500/20 text-green-400',
      inactive: 'bg-red-500/20 text-red-400',
      pending: 'bg-yellow-500/20 text-yellow-400',
      completed: 'bg-blue-500/20 text-blue-400'
    };
    
    return (
      <span className={`${statusConfig[status as keyof typeof statusConfig]} px-2 py-1 rounded-full text-xs font-medium`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return 'text-green-400';
    if (grade >= 80) return 'text-yellow-400';
    if (grade >= 70) return 'text-orange-400';
    return 'text-red-400';
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
              <h1 className="text-3xl font-bold text-[#F1F1F1]">Admin Control Panel</h1>
              <p className="text-[#A1A1A1]">Complete system management and oversight</p>
            </div>
          </div>
        </div>

        {/* System Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Total Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{systemStats.totalCourses}</div>
              <p className="text-xs text-green-400">+3 this month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Active Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{systemStats.totalTeachers}</div>
              <p className="text-xs text-blue-400">All verified</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Active Cohorts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{systemStats.totalCohorts}</div>
              <p className="text-xs text-purple-400">2 starting soon</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{systemStats.totalStudents}</div>
              <p className="text-xs text-green-400">+{systemStats.monthlyGrowth}% growth</p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'courses', label: 'Courses', icon: BookOpen },
            { id: 'teachers', label: 'Teachers', icon: Users },
            { id: 'cohorts', label: 'Cohorts', icon: School },
            { id: 'students', label: 'Students', icon: GraduationCap },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                  : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
              }`}
            >
              <tab.icon className="w-4 h-4 inline mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search and Actions */}
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
          <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add {activeTab === 'overview' ? 'New' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
          </Button>
          <Button variant="outline" className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Content Sections */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1]">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-[#0B0B0B] rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-[#F1F1F1] text-sm">New teacher added: Dr. Sarah Johnson</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#0B0B0B] rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-[#F1F1F1] text-sm">Course "React Fundamentals" updated</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#0B0B0B] rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-[#F1F1F1] text-sm">New cohort created: Spring 2024 Batch</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1]">System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#A1A1A1]">Active Users</span>
                    <span className="text-green-400 font-medium">{systemStats.activeUsers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#A1A1A1]">Completion Rate</span>
                    <span className="text-green-400 font-medium">{systemStats.completionRate}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#A1A1A1]">Average Grade</span>
                    <span className="text-yellow-400 font-medium">{systemStats.avgGrade}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'courses' && (
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader>
              <CardTitle className="text-[#F1F1F1]">Course Management</CardTitle>
              <CardDescription className="text-[#A1A1A1]">
                Create, edit, and manage all courses in the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2B2B2B]">
                    <TableHead className="text-[#F1F1F1]">Course</TableHead>
                    <TableHead className="text-[#F1F1F1]">Teacher</TableHead>
                    <TableHead className="text-[#F1F1F1]">Students</TableHead>
                    <TableHead className="text-[#F1F1F1]">Duration</TableHead>
                    <TableHead className="text-[#F1F1F1]">Completion</TableHead>
                    <TableHead className="text-[#F1F1F1]">Status</TableHead>
                    <TableHead className="text-[#F1F1F1]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id} className="border-[#2B2B2B] hover:bg-[#0B0B0B]/50">
                      <TableCell>
                        <div>
                          <p className="text-[#F1F1F1] font-medium">{course.title}</p>
                          <p className="text-[#A1A1A1] text-sm">{course.level}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-[#A1A1A1]">{course.assignedTeacher}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{course.enrolledStudents}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{course.duration}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{course.completionRate}%</TableCell>
                      <TableCell>{getStatusBadge(course.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-[#A1A1A1] hover:text-[#F1F1F1]">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-[#A1A1A1] hover:text-[#F1F1F1]">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Similar tables for teachers, cohorts, students, and analytics tabs */}
        {activeTab === 'teachers' && (
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader>
              <CardTitle className="text-[#F1F1F1]">Teacher Management</CardTitle>
              <CardDescription className="text-[#A1A1A1]">
                Add, monitor, and evaluate teacher performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2B2B2B]">
                    <TableHead className="text-[#F1F1F1]">Teacher</TableHead>
                    <TableHead className="text-[#F1F1F1]">Specialization</TableHead>
                    <TableHead className="text-[#F1F1F1]">Courses</TableHead>
                    <TableHead className="text-[#F1F1F1]">Students</TableHead>
                    <TableHead className="text-[#F1F1F1]">Performance</TableHead>
                    <TableHead className="text-[#F1F1F1]">Status</TableHead>
                    <TableHead className="text-[#F1F1F1]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teachers.map((teacher) => (
                    <TableRow key={teacher.id} className="border-[#2B2B2B] hover:bg-[#0B0B0B]/50">
                      <TableCell>
                        <div>
                          <p className="text-[#F1F1F1] font-medium">{teacher.name}</p>
                          <p className="text-[#A1A1A1] text-sm">{teacher.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-[#A1A1A1]">{teacher.specialization}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{teacher.assignedCourses.length}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{teacher.totalStudents}</TableCell>
                      <TableCell>
                        <span className={`font-bold ${getGradeColor(teacher.performance)}`}>
                          {teacher.performance}%
                        </span>
                      </TableCell>
                      <TableCell>{getStatusBadge(teacher.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-[#A1A1A1] hover:text-[#F1F1F1]">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-[#A1A1A1] hover:text-[#F1F1F1]">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {activeTab === 'cohorts' && (
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader>
              <CardTitle className="text-[#F1F1F1]">Cohort Management</CardTitle>
              <CardDescription className="text-[#A1A1A1]">
                Manage student cohorts and their course assignments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2B2B2B]">
                    <TableHead className="text-[#F1F1F1]">Cohort</TableHead>
                    <TableHead className="text-[#F1F1F1]">Start Date</TableHead>
                    <TableHead className="text-[#F1F1F1]">End Date</TableHead>
                    <TableHead className="text-[#F1F1F1]">Students</TableHead>
                    <TableHead className="text-[#F1F1F1]">Courses</TableHead>
                    <TableHead className="text-[#F1F1F1]">Status</TableHead>
                    <TableHead className="text-[#F1F1F1]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cohorts.map((cohort) => (
                    <TableRow key={cohort.id} className="border-[#2B2B2B] hover:bg-[#0B0B0B]/50">
                      <TableCell>
                        <div>
                          <p className="text-[#F1F1F1] font-medium">{cohort.name}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-[#A1A1A1]">{cohort.startDate}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{cohort.endDate}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{cohort.studentsCount}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{cohort.coursesIncluded.length}</TableCell>
                      <TableCell>{getStatusBadge(cohort.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-[#A1A1A1] hover:text-[#F1F1F1]">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-[#A1A1A1] hover:text-[#F1F1F1]">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {activeTab === 'students' && (
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader>
              <CardTitle className="text-[#F1F1F1]">Student Management</CardTitle>
              <CardDescription className="text-[#A1A1A1]">
                View and manage student profiles and progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2B2B2B]">
                    <TableHead className="text-[#F1F1F1]">Student</TableHead>
                    <TableHead className="text-[#F1F1F1]">Cohort</TableHead>
                    <TableHead className="text-[#F1F1F1]">Courses</TableHead>
                    <TableHead className="text-[#F1F1F1]">Avg Grade</TableHead>
                    <TableHead className="text-[#F1F1F1]">Attendance</TableHead>
                    <TableHead className="text-[#F1F1F1]">Status</TableHead>
                    <TableHead className="text-[#F1F1F1]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id} className="border-[#2B2B2B] hover:bg-[#0B0B0B]/50">
                      <TableCell>
                        <div>
                          <p className="text-[#F1F1F1] font-medium">{student.name}</p>
                          <p className="text-[#A1A1A1] text-sm">{student.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-[#A1A1A1]">{student.cohort}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{student.enrolledCourses}</TableCell>
                      <TableCell>
                        <span className={`font-bold ${getGradeColor(student.avgGrade)}`}>
                          {student.avgGrade}%
                        </span>
                      </TableCell>
                      <TableCell className="text-[#A1A1A1]">{student.attendance}%</TableCell>
                      <TableCell>{getStatusBadge(student.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-[#A1A1A1] hover:text-[#F1F1F1]">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-[#A1A1A1] hover:text-[#F1F1F1]">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Additional content sections would continue here for cohorts, students, and analytics */}
      </div>
    </div>
  );
};

export default AdminDashboard;
