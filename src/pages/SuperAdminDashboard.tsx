
import { useState } from 'react';
import { Building2, Users, BarChart3, Search, Filter, Download, Plus, Eye, Edit, Trash2 } from 'lucide-react';
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

const SuperAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'institutes' | 'analytics' | 'system'>('institutes');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for demonstration
  const institutes = [
    {
      id: 1,
      name: 'Tech Institute of Excellence',
      email: 'admin@techexcellence.com',
      teacherCount: 45,
      studentCount: 1200,
      coursesCount: 25,
      status: 'active',
      createdAt: '2024-01-15',
      subscription: 'Premium'
    },
    {
      id: 2,
      name: 'Digital Learning Academy',
      email: 'admin@digitalacademy.com',
      teacherCount: 32,
      studentCount: 890,
      coursesCount: 18,
      status: 'active',
      createdAt: '2024-02-10',
      subscription: 'Basic'
    },
    {
      id: 3,
      name: 'Future Skills Institute',
      email: 'admin@futureskills.com',
      teacherCount: 28,
      studentCount: 650,
      coursesCount: 15,
      status: 'inactive',
      createdAt: '2024-03-05',
      subscription: 'Premium'
    }
  ];

  const systemMetrics = {
    totalInstitutes: 3,
    totalTeachers: 105,
    totalStudents: 2740,
    totalCourses: 58,
    activeUsers: 2650,
    monthlyGrowth: 12.5
  };

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">Active</span>
      : <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs">Inactive</span>;
  };

  const getSubscriptionBadge = (subscription: string) => {
    return subscription === 'Premium' 
      ? <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs">Premium</span>
      : <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">Basic</span>;
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#F1F1F1]">Super Admin Dashboard</h1>
              <p className="text-[#A1A1A1]">Manage institutes, monitor system performance, and oversee platform operations</p>
            </div>
          </div>
        </div>

        {/* System Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Total Institutes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{systemMetrics.totalInstitutes}</div>
              <p className="text-xs text-green-400">+2 this month</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Total Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{systemMetrics.totalTeachers}</div>
              <p className="text-xs text-blue-400">Across all institutes</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{systemMetrics.totalStudents.toLocaleString()}</div>
              <p className="text-xs text-green-400">+{systemMetrics.monthlyGrowth}% growth</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#A1A1A1]">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F1F1F1]">{systemMetrics.activeUsers.toLocaleString()}</div>
              <p className="text-xs text-yellow-400">96.7% engagement</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('institutes')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'institutes'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <Building2 className="w-4 h-4 inline mr-2" />
            Institutes
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
          <button
            onClick={() => setActiveTab('system')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'system'
                ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] text-white'
                : 'text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            System
          </button>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A1A1A1] w-5 h-5" />
            <input
              type="text"
              placeholder="Search institutes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#131313] border border-[#2B2B2B] rounded-lg pl-12 pr-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D]"
            />
          </div>
          <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Institute
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

        {/* Content */}
        {activeTab === 'institutes' && (
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader>
              <CardTitle className="text-[#F1F1F1]">Institute Management</CardTitle>
              <CardDescription className="text-[#A1A1A1]">
                Manage all registered institutes and their settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#2B2B2B]">
                    <TableHead className="text-[#F1F1F1]">Institute</TableHead>
                    <TableHead className="text-[#F1F1F1]">Teachers</TableHead>
                    <TableHead className="text-[#F1F1F1]">Students</TableHead>
                    <TableHead className="text-[#F1F1F1]">Courses</TableHead>
                    <TableHead className="text-[#F1F1F1]">Status</TableHead>
                    <TableHead className="text-[#F1F1F1]">Subscription</TableHead>
                    <TableHead className="text-[#F1F1F1]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {institutes.map((institute) => (
                    <TableRow key={institute.id} className="border-[#2B2B2B] hover:bg-[#0B0B0B]/50">
                      <TableCell>
                        <div>
                          <p className="text-[#F1F1F1] font-medium">{institute.name}</p>
                          <p className="text-[#A1A1A1] text-sm">{institute.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-[#A1A1A1]">{institute.teacherCount}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{institute.studentCount}</TableCell>
                      <TableCell className="text-[#A1A1A1]">{institute.coursesCount}</TableCell>
                      <TableCell>{getStatusBadge(institute.status)}</TableCell>
                      <TableCell>{getSubscriptionBadge(institute.subscription)}</TableCell>
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

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1]">Institute Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {institutes.map((institute) => (
                    <div key={institute.id} className="flex justify-between items-center">
                      <span className="text-[#A1A1A1]">{institute.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                          <div 
                            className="bg-[#E3583D] h-2 rounded-full" 
                            style={{width: `${(institute.studentCount / 1200) * 100}%`}}
                          ></div>
                        </div>
                        <span className="text-[#E3583D] text-sm">{institute.studentCount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1]">Subscription Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#A1A1A1]">Premium</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{width: '67%'}}></div>
                      </div>
                      <span className="text-purple-400 text-sm">67%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#A1A1A1]">Basic</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-[#2B2B2B] rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{width: '33%'}}></div>
                      </div>
                      <span className="text-blue-400 text-sm">33%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'system' && (
          <Card className="bg-[#131313] border-[#2B2B2B]">
            <CardHeader>
              <CardTitle className="text-[#F1F1F1]">System Settings</CardTitle>
              <CardDescription className="text-[#A1A1A1]">
                Global platform configuration and maintenance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#0B0B0B] rounded-lg border border-[#2B2B2B]">
                    <h3 className="text-[#F1F1F1] font-medium mb-2">Platform Health</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm">All systems operational</span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#0B0B0B] rounded-lg border border-[#2B2B2B]">
                    <h3 className="text-[#F1F1F1] font-medium mb-2">Database Status</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-sm">Connected</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
                    Backup Database
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
                    System Maintenance
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1]">
                    View Logs
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
