
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication with Supabase
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-xl flex items-center justify-center shadow-sm">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-[#F1F1F1]">MasterJi</span>
          </div>
          <h1 className="text-2xl font-bold text-[#F1F1F1] mb-2">Welcome Back</h1>
          <p className="text-[#A1A1A1]">Sign in to continue your learning journey</p>
        </div>

        <Card className="bg-[#131313] border-[#2B2B2B]">
          <CardHeader>
            <CardTitle className="text-[#F1F1F1]">Sign In</CardTitle>
            <CardDescription className="text-[#A1A1A1]">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selection */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#F1F1F1]">I am a:</label>
                <div className="grid grid-cols-3 gap-2">
                  {['student', 'faculty', 'admin'].map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, role }))}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                        formData.role === role
                          ? 'bg-gradient-to-r from-[#E3583D] to-[#E4593D] border-[#E3583D] text-white'
                          : 'bg-[#0B0B0B] border-[#2B2B2B] text-[#A1A1A1] hover:border-[#E3583D]/30 hover:text-[#F1F1F1]'
                      }`}
                    >
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#F1F1F1]">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A1A1A1] w-4 h-4" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-[#0B0B0B] border border-[#2B2B2B] rounded-xl pl-10 pr-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D] focus:ring-1 focus:ring-[#E3583D] transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#F1F1F1]">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A1A1A1] w-4 h-4" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full bg-[#0B0B0B] border border-[#2B2B2B] rounded-xl pl-10 pr-12 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D] focus:ring-1 focus:ring-[#E3583D] transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#A1A1A1] hover:text-[#F1F1F1] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white py-3 rounded-xl font-medium transition-all"
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center text-[#A1A1A1]">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#E3583D] hover:text-[#E4593D] font-medium transition-colors">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
