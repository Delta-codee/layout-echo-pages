
import Layout from '@/components/Layout';
import { BookOpen, Users, Clock, CheckCircle2, Calendar, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';

const MyClassroom = () => {
  const { user } = useAuth();

  // Mock data - in a real app, this would come from your backend/database
  const enrolledCourses = [
    {
      id: 1,
      title: 'React Fundamentals',
      instructor: 'John Smith',
      progress: 65,
      totalLessons: 20,
      completedLessons: 13,
      nextLesson: 'State Management with useState',
      cohort: 'Fall 2024 - Batch A',
      status: 'active',
      dueDate: '2024-08-15'
    },
    {
      id: 2,
      title: 'JavaScript Advanced Concepts',
      instructor: 'Sarah Johnson',
      progress: 30,
      totalLessons: 15,
      completedLessons: 5,
      nextLesson: 'Closures and Scope',
      cohort: 'Fall 2024 - Batch B',
      status: 'active',
      dueDate: '2024-09-01'
    }
  ];

  const cohorts = [
    {
      id: 1,
      name: 'Fall 2024 - Batch A',
      members: 25,
      courses: ['React Fundamentals', 'Node.js Backend'],
      startDate: '2024-07-01',
      status: 'active'
    },
    {
      id: 2,
      name: 'Fall 2024 - Batch B',
      members: 18,
      courses: ['JavaScript Advanced', 'Database Design'],
      startDate: '2024-07-15',
      status: 'active'
    }
  ];

  const hasEnrollments = enrolledCourses.length > 0;

  return (
    <Layout>
      <div className="p-8 bg-[#0B0B0B] min-h-screen">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#F1F1F1]">My Classroom</h1>
              <p className="text-[#A1A1A1]">Welcome back, {user?.name}! Continue your learning journey.</p>
            </div>
          </div>
        </div>

        {!hasEnrollments ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-[#E3583D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-[#E3583D]" />
            </div>
            <h2 className="text-2xl font-bold text-[#F1F1F1] mb-4">You are not enrolled in any courses</h2>
            <p className="text-[#A1A1A1] mb-8 max-w-md mx-auto">
              Start your learning journey by exploring our available courses and joining a cohort.
            </p>
            <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E4593D] hover:to-[#E3583D] text-white rounded-xl">
              Browse Courses
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Enrolled Courses */}
            <div>
              <h2 className="text-2xl font-bold text-[#F1F1F1] mb-6">Enrolled Courses</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-[#F1F1F1] text-lg mb-2">{course.title}</CardTitle>
                          <p className="text-[#A1A1A1] text-sm">by {course.instructor}</p>
                        </div>
                        <Badge variant="outline" className="border-[#3FCF8E] text-[#3FCF8E]">
                          {course.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[#A1A1A1] text-sm">Progress</span>
                            <span className="text-[#F1F1F1] text-sm font-medium">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-[#2B2B2B] rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] h-2 rounded-full transition-all"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-[#A1A1A1]">
                            <CheckCircle2 className="w-4 h-4" />
                            {course.completedLessons}/{course.totalLessons} lessons
                          </div>
                          <div className="flex items-center gap-2 text-[#A1A1A1]">
                            <Calendar className="w-4 h-4" />
                            Due {new Date(course.dueDate).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="p-3 bg-[#0B0B0B] rounded-lg">
                          <p className="text-[#F1F1F1] text-sm font-medium mb-1">Next Lesson:</p>
                          <p className="text-[#A1A1A1] text-sm">{course.nextLesson}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button className="flex-1 bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E4593D] hover:to-[#E3583D] text-white rounded-lg">
                            <Play className="w-4 h-4 mr-2" />
                            Continue Learning
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cohorts */}
            <div>
              <h2 className="text-2xl font-bold text-[#F1F1F1] mb-6">My Cohorts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cohorts.map((cohort) => (
                  <Card key={cohort.id} className="bg-[#131313] border-[#2B2B2B] hover:border-[#E3583D]/30 transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-[#F1F1F1] text-lg">{cohort.name}</CardTitle>
                        <Badge variant="outline" className="border-[#3FCF8E] text-[#3FCF8E]">
                          {cohort.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-[#A1A1A1] text-sm">
                          <Users className="w-4 h-4" />
                          {cohort.members} members
                        </div>
                        <div className="flex items-center gap-2 text-[#A1A1A1] text-sm">
                          <Clock className="w-4 h-4" />
                          Started {new Date(cohort.startDate).toLocaleDateString()}
                        </div>
                        <div>
                          <p className="text-[#F1F1F1] text-sm font-medium mb-2">Courses:</p>
                          <div className="flex flex-wrap gap-1">
                            {cohort.courses.map((course, index) => (
                              <Badge key={index} variant="secondary" className="bg-[#2B2B2B] text-[#A1A1A1] text-xs">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" className="w-full border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#2B2B2B] rounded-lg">
                          View Cohort
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MyClassroom;
