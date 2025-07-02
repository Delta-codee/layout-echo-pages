
import Layout from '@/components/Layout';
import { Camera, Edit3, Github, Linkedin, Instagram, Twitter, MapPin, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useUser } from '@clerk/clerk-react';

const Profile = () => {
  const { user } = useAuth();
  const { user: clerkUser } = useUser();

  // Use real user data from Clerk
  const profileData = {
    fullName: user?.name || 'User',
    username: clerkUser?.username ? `@${clerkUser.username}` : '@user',
    email: user?.email || '',
    bio: 'Learning enthusiast passionate about creating innovative web applications. Currently exploring React, Node.js, and cloud technologies.',
    location: 'San Francisco, CA',
    joinDate: clerkUser?.createdAt ? new Date(clerkUser.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Recently',
    role: user?.role || 'Student',
    profileImage: user?.avatar || null,
    coverImage: null,
    socialLinks: {
      github: '',
      linkedin: '',
      instagram: '',
      twitter: ''
    },
    stats: {
      projects: 12,
      followers: 156,
      following: 89
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

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 bg-[#0B0B0B] min-h-screen">
        {/* Cover Photo Section */}
        <div className="relative mb-6">
          <div className="h-48 bg-gradient-to-r from-[#E3583D] to-[#E4593D] rounded-xl relative overflow-hidden">
            {profileData.coverImage ? (
              <img src={profileData.coverImage} alt="Cover" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-[#E3583D] to-[#E4593D]" />
            )}
            <button className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-lg transition-all">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {/* Profile Picture */}
          <div className="absolute -bottom-16 left-6">
            <div className="relative">
              <div className="w-32 h-32 bg-[#131313] rounded-full border-4 border-[#0B0B0B] overflow-hidden">
                {profileData.profileImage ? (
                  <img src={profileData.profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#E3583D] to-[#E4593D] flex items-center justify-center text-white text-2xl font-bold">
                    {getInitials(profileData.fullName)}
                  </div>
                )}
              </div>
              <button className="absolute bottom-2 right-2 bg-[#E3583D] hover:bg-[#E4593D] text-white p-1.5 rounded-full transition-all">
                <Camera className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-20 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#F1F1F1] mb-1">{profileData.fullName}</h1>
              <p className="text-[#E3583D] text-lg mb-2">{profileData.username}</p>
              <div className="flex items-center gap-4 text-[#A1A1A1] text-sm">
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {profileData.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {profileData.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {profileData.joinDate}
                </span>
              </div>
            </div>
            <Button 
              onClick={() => window.location.href = '/edit-profile'}
              className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E4593D] hover:to-[#E3583D] text-white rounded-xl"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Bio */}
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1]">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#A1A1A1] leading-relaxed">{profileData.bio}</p>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1]">Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { icon: Github, label: 'GitHub', value: profileData.socialLinks.github },
                  { icon: Linkedin, label: 'LinkedIn', value: profileData.socialLinks.linkedin },
                  { icon: Twitter, label: 'Twitter', value: profileData.socialLinks.twitter },
                  { icon: Instagram, label: 'Instagram', value: profileData.socialLinks.instagram }
                ].map((link) => (
                  <div key={link.label} className="flex items-center gap-3">
                    <link.icon className="w-5 h-5 text-[#A1A1A1]" />
                    {link.value ? (
                      <a
                        href={link.value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E3583D] hover:text-[#E4593D] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-[#A1A1A1]">Add {link.label}</span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardContent className="pt-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#E3583D]">{profileData.stats.projects}</div>
                    <div className="text-[#A1A1A1] text-sm">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#E3583D]">{profileData.stats.followers}</div>
                    <div className="text-[#A1A1A1] text-sm">Followers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#E3583D]">{profileData.stats.following}</div>
                    <div className="text-[#A1A1A1] text-sm">Following</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Recent Projects */}
          <div className="md:col-span-2">
            <Card className="bg-[#131313] border-[#2B2B2B]">
              <CardHeader>
                <CardTitle className="text-[#F1F1F1]">Recent Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <div className="text-[#A1A1A1] mb-4">No projects yet</div>
                  <Button className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E4593D] hover:to-[#E3583D] text-white rounded-xl">
                    Upload Your First Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
