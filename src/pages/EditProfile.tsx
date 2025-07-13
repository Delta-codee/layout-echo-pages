
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Camera, Save, X, Github, Linkedin, Instagram, Twitter, MapPin, Mail, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';
import { useProfile } from '@/contexts/ProfileContext';

const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isSignedIn } = useClerkAuth();
  const { profileData, updateProfile } = useProfile();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Redirect if not authenticated
  useEffect(() => {
    if (!isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  // Initialize form data with profile data from context
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    bio: '',
    about: '',
    location: '',
    socialLinks: {
      github: '',
      linkedin: '',
      instagram: '',
      twitter: ''
    }
  });

  // Update form data when profile data changes
  useEffect(() => {
    if (profileData) {
      setFormData(profileData);
    } else if (user) {
      setFormData(prev => ({
        ...prev,
        fullName: user.name || '',
        email: user.email || '',
        username: user.name?.toLowerCase().replace(/\s+/g, '') || '',
        bio: prev.bio || `Hi, I'm ${user.name}! I'm excited to start my learning journey with MasterJi.`,
        about: prev.about || `I'm passionate about learning and growing. Looking forward to connecting with fellow learners and educators on this platform.`,
      }));
    }
  }, [profileData, user]);

  const handleInputChange = (field: string, value: string) => {
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }

    if (field.startsWith('socialLinks.')) {
      const socialField = field.split('.')[1];
      setFormData(prev => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [socialField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate social links if provided
    Object.entries(formData.socialLinks).forEach(([platform, url]) => {
      if (url && !url.startsWith('http')) {
        newErrors[`socialLinks.${platform}`] = 'Please enter a valid URL (starting with http:// or https://)';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      await updateProfile(formData);
      // Navigate back to profile page after successful update
      navigate('/profile');
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Don't render if not signed in
  if (!isSignedIn) {
    return null;
  }

  return (
    <Layout>
      <div className="p-8 bg-[#0B0B0B] min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-[#F1F1F1]">Manage Account</h1>
              </div>
              <Button
                onClick={() => navigate('/profile')}
                variant="outline"
                className="border-[#2B2B2B] text-[#A1A1A1] hover:bg-[#131313] hover:text-[#F1F1F1]"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
            <p className="text-[#A1A1A1]">Update your profile information and preferences</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Profile Picture Section */}
            <div className="md:col-span-1">
              <Card className="bg-[#131313] border-[#2B2B2B]">
                <CardHeader>
                  <CardTitle className="text-[#F1F1F1]">Profile Picture</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="relative mx-auto w-32 h-32 mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-full flex items-center justify-center overflow-hidden">
                      {user?.avatar ? (
                        <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-white text-2xl font-bold">
                          {getInitials(formData.fullName)}
                        </span>
                      )}
                    </div>
                    <button className="absolute bottom-2 right-2 bg-[#E3583D] hover:bg-[#E4593D] text-white p-2 rounded-full transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[#A1A1A1] text-sm">Click the camera icon to upload a new photo</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Form */}
            <div className="md:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card className="bg-[#131313] border-[#2B2B2B]">
                <CardHeader>
                  <CardTitle className="text-[#F1F1F1]">Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-[#F1F1F1]">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D] ${errors.fullName ? 'border-red-500' : ''}`}
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="username" className="text-[#F1F1F1]">Username</Label>
                      <Input
                        id="username"
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        className="bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D]"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#F1F1F1]">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-[#A1A1A1]" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D] pl-10 ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="location" className="text-[#F1F1F1]">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#A1A1A1]" />
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D] pl-10"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bio" className="text-[#F1F1F1]">Bio</Label>
                    <Textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      rows={4}
                      className="bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D] resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-[#131313] border-[#2B2B2B]">
                <CardHeader>
                  <CardTitle className="text-[#F1F1F1]">Social Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: Github, label: 'GitHub', field: 'github', placeholder: 'https://github.com/username' },
                    { icon: Linkedin, label: 'LinkedIn', field: 'linkedin', placeholder: 'https://linkedin.com/in/username' },
                    { icon: Twitter, label: 'Twitter', field: 'twitter', placeholder: 'https://twitter.com/username' },
                    { icon: Instagram, label: 'Instagram', field: 'instagram', placeholder: 'https://instagram.com/username' }
                  ].map((social) => (
                    <div key={social.field}>
                      <Label htmlFor={social.field} className="text-[#F1F1F1]">{social.label}</Label>
                      <div className="relative">
                        <social.icon className="absolute left-3 top-3 w-4 h-4 text-[#A1A1A1]" />
                        <Input
                          id={social.field}
                          value={formData.socialLinks[social.field as keyof typeof formData.socialLinks]}
                          onChange={(e) => handleInputChange(`socialLinks.${social.field}`, e.target.value)}
                          placeholder={social.placeholder}
                          className={`bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D] pl-10 ${errors[`socialLinks.${social.field}`] ? 'border-red-500' : ''}`}
                        />
                        {errors[`socialLinks.${social.field}`] && 
                          <p className="text-red-500 text-sm mt-1">{errors[`socialLinks.${social.field}`]}</p>
                        }
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Save Button */}
              <div className="flex justify-end">
                <Button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E4593D] hover:to-[#E3583D] text-white px-8 py-2 rounded-xl font-semibold transition-all duration-300"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
