
import { useState } from 'react';
import { School, Users, BookOpen, TrendingUp, Search, Plus, Eye, Edit, Trash2 } from 'lucide-react';
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

const InstituteDashboard = () => {
  const [activeTab, setActiveTab] = useState<'teachers' | 'students' | 'courses' | 'analytics'>('teachers');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for demonstration
  const teachers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@teacher.com',
      department: 'Computer Science',
      coursesCount: 4,
      studentsCount: 120,
      rating: 4.8,
      joinedAt: '2023-08-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      email: 'michael.chen@teacher.com',
      department: 'Data Science',
      coursesCount: 3,
      studentsCount: 85,
      rating: 4.6,
      joinedAt: '2023-09-10',
      status: 'active'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      email: 'emily.rodriguez@teacher.com',
      department: 'Web Development',
      coursesCount: 5,
      studentsCount: 150,
      rating: 4.9,
      joinedAt: '2023-07-20',
      status: 'active'
    }
  ];

  const students = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@student.com',
      courses: ['React Fundamentals', 'Node.js Backend'],
      averageGrade: 87,
      attendance: 92,
      assignmentsCompleted: 18,
      lastActive: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      email: 'maria.garcia@student.com',
      courses: ['Python Programming', 'Data Analysis'],
      averageGrade: 94,
      attendance: 96,
      assignmentsCompleted: 22,
      lastActive: '2024-01-14',
      status: 'active'
    }
  ];

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      teacher: 'Dr. Sarah Johnson',
      studentsEnrolled: 45,
      duration: '12 weeks',
      progress: 75,
      status: 'active',
      startDate: '2024-01-01'
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      teacher: 'Prof. Michael Chen',
      studentsEnrolled: 32,
      duration: '10 weeks',
      progress: 60,
      status: 'active',
      startDate: '2024-01-15'
    }
  ];

  const instituteStats = {
    totalTeachers: 12,
    totalStudents: 355,
    totalCourses: 18,
    averageGrade: 86.5,
    completionRate: 78,
    monthlyEnrollments: 45
  };

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">Active</span>
      : <span className="bg-gray-500/20 text-gray-400 px-2 py-1 rounded-full text-xs">Inactive</span>;
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
              <School className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#F1F1F1]">Institute Dashboard</h1>
              <p className="text-[#A1A1A1]">Tech Institute of Excellence - Manage courses, teachers, and students</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Total Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{instituteStats.totalTeachers}</div>
              <p className="text-xs text-blue-400">Across all departments</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{instituteStats.totalStudents}</div>
              <p className="text-xs text-green-400">+{instituteStats.monthlyEnrollments} this month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Active Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{instituteStats.totalCourses}</div>
              <p className="text-xs text-purple-400">{instituteStats.completionRate}% completion rate</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Average Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{instituteStats.averageGrade}%</div>
              <p className="text-xs text-yellow-400">Institute-wide average</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('teachers')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === 'teachers'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Teachers
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
            onClick={() => setActiveTab('courses')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeTab === 'courses'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Courses
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
          <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add {activeTab.slice(0, -1)}
          </Button>
        </div>

        {/* Content */}
        {activeTab === 'teachers' && (
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader>
              <CardTitle className="text-[#F1F1F1]">Teacher Management</CardTitle>
              <CardDescription className="text-[#A1A1A1]">
                Manage faculty members and their course assignments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2B2B2B]">
                    <TableHead className="text-[#F1F1F1]">Teacher</TableHead>
                    <TableHead className="text-[#F1F1F1]">Department</TableHead>
                    <TableHead className="text-[#F1F1F1]">Courses</TableHead>
                    <TableHead className="text-[#F1F1F1]">Students</TableHead>
                    <TableHead className="text-[#F1F1F1]">Rating</TableHead>
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
                      <TableCell className="text-[#A1A1A1]">{teacher.department}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{teacher.coursesCount}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{teacher.studentsCount}</TableCell>
                      <TableCell>
                        <span className="text-yellow-400 font-bold">⭐ {teacher.rating}</span>
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
                Monitor student progress and performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2B2B2B]">
                    <TableHead className="text-[#F1F1F1]">Student</TableHead>
                    <TableHead className="text-[#F1F1F1]">Courses</TableHead>
                    <TableHead className="text-[#F1F1F1]">Avg Grade</TableHead>
                    <TableHead className="text-[#F1F1F1]">Attendance</TableHead>
                    <TableHead className="text-[#F1F1F1]">Assignments</TableHead>
                    <TableHead className="text-[#F1F1F1]">Last Active</TableHead>
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
                        <span className={`font-bold ${getGradeColor(student.averageGrade)}`}>
                          {student.averageGrade}%
                        </span>
                      </TableCell>
                      <TableCell className="text-[#A1A1A1]">{student.attendance}%</TableCell>
                      <TableCell className="text-[#A1A1A1]">{student.assignmentsCompleted}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{student.lastActive}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-[#A1A1A1] hover:text-[#F1F1F1]">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-[#A1A1A1] hover:text-[#F1F1F1]">
                            <Edit className="w-4 h-4" />
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

        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="bg-[#131313] border-[#2B2B2B]">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-[#F1F1F1]">{course.title}</CardTitle>
                      <CardDescription className="text-[#A1A1A1]">
                        Instructor: {course.teacher}
                      </CardDescription>
                    </div>
                    {getStatusBadge(course.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#A1A1A1]">Students Enrolled</span>
                      <span className="text-[#F1F1F1]">{course.studentsEnrolled}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#A1A1A1]">Duration</span>
                      <span className="text-[#F1F1F1]">{course.duration}</span>
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
                      <Button variant="outline" size="sm" className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1]">Course Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="flex justify-between items-center">
                      <span className="text-[#A1A1A1] text-sm">{course.title}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                          <div 
                            className="bg-[#E3583D] h-2 rounded-full" 
                            style={{width: `${course.progress}%`}}
                          ></div>
                        </div>
                        <span className="text-[#E3583D] text-sm">{course.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1]">Enrollment Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F1F1F1] mb-2">+{instituteStats.monthlyEnrollments}</div>
                    <div className="text-[#A1A1A1] text-sm">New enrollments this month</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-green-400">{instituteStats.completionRate}%</div>
                      <div className="text-[#A1A1A1] text-xs">Completion Rate</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-yellow-400">{instituteStats.averageGrade}%</div>
                      <div className="text-[#A1A1A1] text-xs">Average Grade</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstituteDashboard;
