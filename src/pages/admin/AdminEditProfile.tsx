import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Camera, Save, X, User, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';
import { useProfile } from '@/contexts/ProfileContext';

const AdminEditProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isSignedIn } = useClerkAuth();
  const { profileData, updateProfile } = useProfile();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Redirect if not authenticated or not admin
  useEffect(() => {
    if (!isSignedIn || user?.role !== 'admin') {
      navigate('/admin/dashboard');
    }
  }, [isSignedIn, user?.role, navigate]);

  // Initialize form data with only editable fields
  const [formData, setFormData] = useState({
    bio: '',
    about: ''
  });

  // Update form data when profile data changes
  useEffect(() => {
    if (profileData) {
      setFormData({
        bio: profileData.bio || '',
        about: profileData.about || ''
      });
    } else if (user) {
      setFormData({
        bio: `Hi, I'm ${user.name}! I'm the admin of this platform.`,
        about: 'Dedicated to providing the best learning experience for all users.'
      });
    }
  }, [profileData, user]);

  const handleInputChange = (field: string, value: string) => {
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }

    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.bio && formData.bio.length > 500) {
      newErrors.bio = 'Bio must be 500 characters or less';
    }

    if (formData.about && formData.about.length > 1000) {
      newErrors.about = 'About section must be 1000 characters or less';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Merge with existing profile data to keep other fields unchanged
      const updatedProfile = {
        ...profileData,
        ...formData,
        // Keep sensitive fields unchanged
        fullName: user?.name || profileData?.fullName || '',
        email: user?.email || profileData?.email || '',
        username: profileData?.username || user?.name?.toLowerCase().replace(/\s+/g, '') || ''
      };
      
      await updateProfile(updatedProfile);
      navigate('/admin/dashboard');
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

  // Don't render if not admin
  if (!isSignedIn || user?.role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Button
                onClick={() => navigate('/admin/dashboard')}
                variant="outline"
                size="sm"
                className="border-[#2B2B2B] text-[#A1A1A1] hover:bg-[#131313] hover:text-[#F1F1F1]"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </div>
            <Button
              onClick={() => navigate('/admin/dashboard')}
              variant="outline"
              className="border-[#2B2B2B] text-[#A1A1A1] hover:bg-[#131313] hover:text-[#F1F1F1]"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          </div>
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#F1F1F1]">Edit Admin Profile</h1>
                <p className="text-[#A1A1A1]">Update your profile appearance and description</p>
              </div>
            </div>
          </div>
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
                        {getInitials(user?.name || 'Admin')}
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

            {/* Restricted Fields Info */}
            <Card className="bg-[#131313] border-[#2B2B2B] mt-6">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1] text-sm">Account Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label className="text-[#A1A1A1] text-xs">Name (Read-only)</Label>
                  <p className="text-[#F1F1F1] font-medium">{user?.name || 'Admin'}</p>
                </div>
                <div>
                  <Label className="text-[#A1A1A1] text-xs">Email (Read-only)</Label>
                  <p className="text-[#F1F1F1] font-medium">{user?.email || 'admin@example.com'}</p>
                </div>
                <div>
                  <Label className="text-[#A1A1A1] text-xs">Role (Read-only)</Label>
                  <p className="text-[#E3583D] font-medium">Administrator</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Editable Fields */}
          <div className="md:col-span-2 space-y-6">
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1]">Profile Information</CardTitle>
                <p className="text-[#A1A1A1] text-sm">You can only edit your bio and about section. Other account details are restricted.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="bio" className="text-[#F1F1F1]">Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows={3}
                    maxLength={500}
                    className={`bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D] resize-none ${errors.bio ? 'border-red-500' : ''}`}
                    placeholder="Write a brief bio about yourself..."
                  />
                  <div className="flex justify-between mt-1">
                    {errors.bio && <p className="text-red-500 text-sm">{errors.bio}</p>}
                    <p className="text-[#A1A1A1] text-xs ml-auto">{formData.bio.length}/500</p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="about" className="text-[#F1F1F1]">About Section</Label>
                  <Textarea
                    id="about"
                    value={formData.about}
                    onChange={(e) => handleInputChange('about', e.target.value)}
                    rows={6}
                    maxLength={1000}
                    className={`bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D] resize-none ${errors.about ? 'border-red-500' : ''}`}
                    placeholder="Tell users more about yourself and your role as admin..."
                  />
                  <div className="flex justify-between mt-1">
                    {errors.about && <p className="text-red-500 text-sm">{errors.about}</p>}
                    <p className="text-[#A1A1A1] text-xs ml-auto">{formData.about.length}/1000</p>
                  </div>
                </div>
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
  );
};

export default AdminEditProfile;
