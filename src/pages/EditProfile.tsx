
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Camera, Save, X, Github, Linkedin, Instagram, Twitter, MapPin, Mail, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EditProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Mock user data - will be replaced with real data from Supabase
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    bio: 'Full-stack developer passionate about creating innovative web applications. Currently learning React, Node.js, and cloud technologies.',
    location: 'San Francisco, CA',
    socialLinks: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      instagram: '',
      twitter: 'https://twitter.com/johndoe'
    }
  });

  const handleInputChange = (field: string, value: string) => {
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

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
      navigate('/profile');
    }, 1500);
  };

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
                <h1 className="text-3xl font-bold text-[#F1F1F1]">Edit Profile</h1>
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
            <p className="text-[#A1A1A1]">Update your profile information and social links</p>
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
                    <div className="w-full h-full bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {formData.fullName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <button className="absolute bottom-2 right-2 bg-[#E3583D] hover:bg-[#E4593D] text-white p-2 rounded-full transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[#A1A1A1] text-sm">Click the camera icon to upload a new photo</p>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card className="bg-[#131313] border-[#2B2B2B] mt-6">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#E3583D]">12</div>
                      <div className="text-[#A1A1A1] text-sm">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#E3583D]">156</div>
                      <div className="text-[#A1A1A1] text-sm">Followers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#E3583D]">89</div>
                      <div className="text-[#A1A1A1] text-sm">Following</div>
                    </div>
                  </div>
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
                      <Label htmlFor="fullName" className="text-[#F1F1F1]">Full Name</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D]"
                      />
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
                    <Label htmlFor="email" className="text-[#F1F1F1]">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-[#A1A1A1]" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D] pl-10"
                      />
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
                          className="bg-[#0B0B0B] border-[#2B2B2B] text-[#F1F1F1] focus:border-[#E3583D] pl-10"
                        />
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
