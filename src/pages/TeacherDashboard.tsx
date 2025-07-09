import { useState } from 'react';
import { BookOpen, Users, FileText, TrendingUp, Search, Eye, Clock, AlertCircle } from 'lucide-react';
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

const TeacherDashboard = () => {
  const { permissions, isTeacher } = useRole();
  const [activeTab, setActiveTab] = useState<'courses' | 'assignments' | 'students' | 'analytics'>('courses');
  const [searchQuery, setSearchQuery] = useState('');

  // Redirect if not teacher
  if (!isTeacher) {
    return <Navigate to="/dashboard-redirect" replace />;
  }

  // Mock data for assigned courses (read-only)
  const assignedCourses = [
    {
      id: 1,
      title: 'React Fundamentals',
      studentsEnrolled: 45,
      assignmentsCount: 8,
      avgGrade: 87,
      nextClass: '2024-01-16 10:00 AM',
      progress: 75,
      status: 'active',
      assignedByAdmin: true
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      studentsEnrolled: 32,
      assignmentsCount: 6,
      avgGrade: 82,
      nextClass: '2024-01-17 2:00 PM',
      progress: 60,
      status: 'active',
      assignedByAdmin: true
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      studentsEnrolled: 28,
      assignmentsCount: 10,
      avgGrade: 90,
      nextClass: '2024-01-18 9:00 AM',
      progress: 40,
      status: 'active',
      assignedByAdmin: true
    }
  ];

  const assignments = [
    {
      id: 1,
      title: 'React Component Library',
      course: 'React Fundamentals',
      dueDate: '2024-01-20',
      submissions: 42,
      totalStudents: 45,
      avgGrade: 88,
      status: 'active',
      graded: 35
    },
    {
      id: 2,
      title: 'JavaScript ES6 Features',
      course: 'Advanced JavaScript',
      dueDate: '2024-01-22',
      submissions: 28,
      totalStudents: 32,
      avgGrade: 85,
      status: 'active',
      graded: 20
    },
    {
      id: 3,
      title: 'RESTful API Design',
      course: 'Node.js Backend Development',
      dueDate: '2024-01-25',
      submissions: 15,
      totalStudents: 28,
      avgGrade: 0,
      status: 'pending',
      graded: 0
    }
  ];

  const students = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@student.com',
      courses: ['React Fundamentals', 'Advanced JavaScript'],
      avgGrade: 92,
      assignmentsSubmitted: 12,
      attendance: 95,
      lastSubmission: '2024-01-15'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@student.com',
      courses: ['React Fundamentals', 'Node.js Backend Development'],
      avgGrade: 88,
      assignmentsSubmitted: 10,
      attendance: 88,
      lastSubmission: '2024-01-14'
    },
    {
      id: 3,
      name: 'Carol Davis',
      email: 'carol.davis@student.com',
      courses: ['Advanced JavaScript'],
      avgGrade: 78,
      assignmentsSubmitted: 8,
      attendance: 82,
      lastSubmission: '2024-01-13'
    }
  ];

  const teacherStats = {
    totalCourses: 3,
    totalStudents: 105,
    assignmentsPending: 25,
    avgClassGrade: 86.3,
    upcomingClasses: 5,
    coursesCompleted: 12
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: 'bg-green-500/20 text-green-400',
      pending: 'bg-yellow-500/20 text-yellow-400',
      completed: 'bg-blue-500/20 text-blue-400'
    };
    
    return (
      <span className={`${statusConfig[status as keyof typeof statusConfig]} px-2 py-1 rounded-full text-xs`}>
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
        {/* Header with restriction notice */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#F1F1F1]">Teacher Dashboard</h1>
              <p className="text-[#A1A1A1]">View your assigned courses and students</p>
            </div>
          </div>
          
          {/* Access Restriction Notice */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-400" />
              <p className="text-yellow-400 font-medium">Read-Only Access</p>
            </div>
            <p className="text-[#A1A1A1] text-sm mt-1">
              You can view your assigned courses and students. All course management is handled by the Admin.
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Active Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{teacherStats.totalCourses}</div>
              <p className="text-xs text-blue-400">{teacherStats.upcomingClasses} classes this week</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{teacherStats.totalStudents}</div>
              <p className="text-xs text-green-400">Across all courses</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Pending Grades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{teacherStats.assignmentsPending}</div>
              <p className="text-xs text-yellow-400">Assignments to grade</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Class Average</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{teacherStats.avgClassGrade}%</div>
              <p className="text-xs text-green-400">+3.2% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === 'courses'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            My Courses
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === 'assignments'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Assignments
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === 'students'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Students
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-2" />
            Analytics
          </button>
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
        </div>

        {/* Content with restricted actions */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {assignedCourses.map((course) => (
              <Card key={course.id} className="bg-[#131313] border-[#2B2B2B]">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-[#F1F1F1]">{course.title}</CardTitle>
                      <CardDescription className="text-[#A1A1A1]">
                        {course.studentsEnrolled} students enrolled
                      </CardDescription>
                    </div>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                      Assigned
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#A1A1A1]">Next Class</span>
                      <span className="text-[#F1F1F1] flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {course.nextClass}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#A1A1A1]">Assignments</span>
                      <span className="text-[#F1F1F1]">{course.assignmentsCount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#A1A1A1]">Class Average</span>
                      <span className={`font-bold ${getGradeColor(course.avgGrade)}`}>
                        {course.avgGrade}%
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#A1A1A1]">Progress</span>
                        <span className="text-[#F1F1F1]">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-[#2B2B2B] rounded-full h-2">
                        <div 
                          className="bg-[#E3583D] h-2 rounded-full" 
                          style={{width: `${course.progress}%`}}
                        ></div>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1 border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
                        <Eye className="w-4 h-4 mr-1" />
                        View Only
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'assignments' && (
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader>
              <CardTitle className="text-[#F1F1F1]">Assignment Management</CardTitle>
              <CardDescription className="text-[#A1A1A1]">
                Track submissions and manage grading
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2B2B2B]">
                    <TableHead className="text-[#F1F1F1]">Assignment</TableHead>
                    <TableHead className="text-[#F1F1F1]">Course</TableHead>
                    <TableHead className="text-[#F1F1F1]">Due Date</TableHead>
                    <TableHead className="text-[#F1F1F1]">Submissions</TableHead>
                    <TableHead className="text-[#F1F1F1]">Graded</TableHead>
                    <TableHead className="text-[#F1F1F1]">Avg Grade</TableHead>
                    <TableHead className="text-[#F1F1F1]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assignments.map((assignment) => (
                    <TableRow key={assignment.id} className="border-[#2B2B2B] hover:bg-[#0B0B0B]/50">
                      <TableCell>
                        <div>
                          <p className="text-[#F1F1F1] font-medium">{assignment.title}</p>
                          <p className="text-[#A1A1A1] text-sm">{getStatusBadge(assignment.status)}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-[#A1A1A1]">{assignment.course}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{assignment.dueDate}</TableCell>
                      <TableCell className="text-[#A1A1A1]">
                        {assignment.submissions}/{assignment.totalStudents}
                      </TableCell>
                      <TableCell className="text-[#A1A1A1]">
                        {assignment.graded}/{assignment.submissions}
                      </TableCell>
                      <TableCell>
                        {assignment.avgGrade > 0 ? (
                          <span className={`font-bold ${getGradeColor(assignment.avgGrade)}`}>
                            {assignment.avgGrade}%
                          </span>
                        ) : (
                          <span className="text-[#A1A1A1]">N/A</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-[#A1A1A1] hover:text-[#F1F1F1]">
                            <Eye className="w-4 h-4" />
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
              <CardTitle className="text-[#F1F1F1]">Student Performance</CardTitle>
              <CardDescription className="text-[#A1A1A1]">
                Monitor individual student progress across all courses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2B2B2B]">
                    <TableHead className="text-[#F1F1F1]">Student</TableHead>
                    <TableHead className="text-[#F1F1F1]">Courses</TableHead>
                    <TableHead className="text-[#F1F1F1]">Avg Grade</TableHead>
                    <TableHead className="text-[#F1F1F1]">Assignments</TableHead>
                    <TableHead className="text-[#F1F1F1]">Attendance</TableHead>
                    <TableHead className="text-[#F1F1F1]">Last Activity</TableHead>
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
                      <TableCell className="text-[#A1A1A1]">{student.courses.length}</TableCell>
                      <TableCell>
                        <span className={`font-bold ${getGradeColor(student.avgGrade)}`}>
                          {student.avgGrade}%
                        </span>
                      </TableCell>
                      <TableCell className="text-[#A1A1A1]">{student.assignmentsSubmitted}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{student.attendance}%</TableCell>
                      <TableCell className="text-[#A1A1A1]">{student.lastSubmission}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-[#A1A1A1] hover:text-[#F1F1F1]">
                            <Eye className="w-4 h-4" />
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

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1]">Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#A1A1A1]">A (90-100%)</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{width: '40%'}}></div>
                      </div>
                      <span className="text-green-400 text-sm">40%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#A1A1A1]">B (80-89%)</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{width: '35%'}}></div>
                      </div>
                      <span className="text-yellow-400 text-sm">35%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#A1A1A1]">C (70-79%)</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                        <div className="bg-orange-400 h-2 rounded-full" style={{width: '20%'}}></div>
                      </div>
                      <span className="text-orange-400 text-sm">20%</span>
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
              </CardContent>
            </Card>
            
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1]">Course Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignedCourses.map((course) => (
                    <div key={course.id} className="flex justify-between items-center">
                      <span className="text-[#A1A1A1] text-sm">{course.title}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getGradeColor(course.avgGrade).replace('text-', 'bg-')}`}
                            style={{width: `${(course.avgGrade / 100) * 100}%`}}
                          ></div>
                        </div>
                        <span className={`text-sm ${getGradeColor(course.avgGrade)}`}>
                          {course.avgGrade}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;
