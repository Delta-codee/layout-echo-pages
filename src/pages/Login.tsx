
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B47]/20 group-hover:shadow-xl group-hover:shadow-[#FF6B47]/30 transition-all duration-300">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MasterJi</span>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-3">Welcome Back</h1>
          <p className="text-gray-400 text-lg">Sign in to your account to continue learning</p>
        </div>

        {/* Login Form */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#262626] border border-gray-700/50 rounded-2xl p-10 shadow-2xl shadow-black/20">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <Label htmlFor="email" className="text-white mb-3 block text-base font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="bg-[#0f0f0f] border-gray-600 text-white focus:border-[#FF6B47] focus:ring-[#FF6B47] focus:ring-2 rounded-xl h-12 text-base transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-white mb-3 block text-base font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-[#0f0f0f] border-gray-600 text-white focus:border-[#FF6B47] focus:ring-[#FF6B47] focus:ring-2 pr-12 rounded-xl h-12 text-base transition-all duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-600 text-[#FF6B47] focus:ring-[#FF6B47] bg-[#0f0f0f] focus:ring-2"
                />
                <span className="ml-3 text-base text-gray-400">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-base text-[#FF6B47] hover:underline hover:text-[#ff7a5c] transition-colors duration-200">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] hover:from-[#e55a3d] hover:to-[#d4493a] text-white py-4 text-lg font-semibold shadow-lg shadow-[#FF6B47]/25 hover:shadow-xl hover:shadow-[#FF6B47]/30 transition-all duration-300 rounded-xl hover:scale-[1.02]"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-base">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#FF6B47] hover:underline font-semibold hover:text-[#ff7a5c] transition-colors duration-200">
                Sign up here
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link to="/" className="text-gray-400 hover:text-white text-base transition-colors duration-200 inline-flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
