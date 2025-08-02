import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Upload, X, Play, Clock, Users, Star, DollarSign, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CourseFormData {
  title: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  category: string;
  instructor: string;
  thumbnail: File | null;
  tags: string[];
  maxStudents: string;
  startDate: string;
  featured: boolean;
}

const AdminCourseForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<CourseFormData>({
    title: '',
    description: '',
    price: '',
    duration: '',
    level: '',
    category: '',
    instructor: '',
    thumbnail: null,
    tags: [],
    maxStudents: '',
    startDate: '',
    featured: false
  });

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [currentTag, setCurrentTag] = useState('');

  const handleInputChange = (field: keyof CourseFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (file: File) => {
    if (file.type.startsWith('image/')) {
      setFormData(prev => ({ ...prev, thumbnail: file }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setThumbnailPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive"
      });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const removeThumbnail = () => {
    setFormData(prev => ({ ...prev, thumbnail: null }));
    setThumbnailPreview(null);
  };

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.title || !formData.description || !formData.price) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically submit to your backend
    console.log('Course data:', formData);
    toast({
      title: "Course created successfully!",
      description: "Your course has been added to the platform.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#F1F1F1]">
          Create New <span className="text-[#E3583D]">Course</span>
        </h1>
        <p className="text-lg text-[#A1A1A1] max-w-2xl mx-auto">
          Build an engaging learning experience for your students
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <Card className="bg-[#131313] border-[#2B2B2B]">
          <CardHeader>
            <CardTitle className="text-[#F1F1F1] flex items-center gap-2">
              <Play className="w-5 h-5 text-[#E3583D]" />
              Basic Information
            </CardTitle>
            <CardDescription className="text-[#A1A1A1]">
              Essential details about your course
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-[#F1F1F1]">Course Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., Complete React Developer Course"
                  className="bg-[#1a1a1a] border-[#2B2B2B] text-[#F1F1F1]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instructor" className="text-[#F1F1F1]">Instructor</Label>
                <Input
                  id="instructor"
                  value={formData.instructor}
                  onChange={(e) => handleInputChange('instructor', e.target.value)}
                  placeholder="e.g., John Doe"
                  className="bg-[#1a1a1a] border-[#2B2B2B] text-[#F1F1F1]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#F1F1F1]">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe what students will learn..."
                rows={4}
                className="bg-[#1a1a1a] border-[#2B2B2B] text-[#F1F1F1]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Course Details */}
        <Card className="bg-[#131313] border-[#2B2B2B]">
          <CardHeader>
            <CardTitle className="text-[#F1F1F1] flex items-center gap-2">
              <Star className="w-5 h-5 text-[#E3583D]" />
              Course Details
            </CardTitle>
            <CardDescription className="text-[#A1A1A1]">
              Specify course parameters and requirements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label className="text-[#F1F1F1] flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Price *
                </Label>
                <Input
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  placeholder="99"
                  type="number"
                  className="bg-[#1a1a1a] border-[#2B2B2B] text-[#F1F1F1]"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[#F1F1F1] flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Duration
                </Label>
                <Input
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  placeholder="8 weeks"
                  className="bg-[#1a1a1a] border-[#2B2B2B] text-[#F1F1F1]"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[#F1F1F1] flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Max Students
                </Label>
                <Input
                  value={formData.maxStudents}
                  onChange={(e) => handleInputChange('maxStudents', e.target.value)}
                  placeholder="50"
                  type="number"
                  className="bg-[#1a1a1a] border-[#2B2B2B] text-[#F1F1F1]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label className="text-[#F1F1F1]">Level</Label>
                <Select onValueChange={(value) => handleInputChange('level', value)}>
                  <SelectTrigger className="bg-[#1a1a1a] border-[#2B2B2B] text-[#F1F1F1]">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#2B2B2B]">
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-[#F1F1F1]">Category</Label>
                <Select onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger className="bg-[#1a1a1a] border-[#2B2B2B] text-[#F1F1F1]">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#2B2B2B]">
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="mobile-development">Mobile Development</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="devops">DevOps</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-[#F1F1F1] flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Start Date
                </Label>
                <Input
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  type="date"
                  className="bg-[#1a1a1a] border-[#2B2B2B] text-[#F1F1F1]"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Thumbnail */}
        <Card className="bg-[#131313] border-[#2B2B2B]">
          <CardHeader>
            <CardTitle className="text-[#F1F1F1] flex items-center gap-2">
              <Upload className="w-5 h-5 text-[#E3583D]" />
              Course Thumbnail
            </CardTitle>
            <CardDescription className="text-[#A1A1A1]">
              Upload an engaging thumbnail for your course
            </CardDescription>
          </CardHeader>
          <CardContent>
            {thumbnailPreview ? (
              <div className="relative">
                <img
                  src={thumbnailPreview}
                  alt="Course thumbnail"
                  className="w-full h-48 object-cover rounded-lg border border-[#2B2B2B]"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={removeThumbnail}
                  className="absolute top-2 right-2"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive 
                    ? 'border-[#E3583D] bg-[#E3583D]/5' 
                    : 'border-[#2B2B2B] hover:border-[#E3583D]/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="w-12 h-12 mx-auto mb-4 text-[#A1A1A1]" />
                <p className="text-[#F1F1F1] mb-2">Drag and drop your thumbnail here</p>
                <p className="text-[#A1A1A1] text-sm mb-4">or</p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('thumbnail-upload')?.click()}
                  className="border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#1a1a1a]"
                >
                  Choose File
                </Button>
                <input
                  id="thumbnail-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileUpload(file);
                  }}
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tags */}
        <Card className="bg-[#131313] border-[#2B2B2B]">
          <CardHeader>
            <CardTitle className="text-[#F1F1F1]">Tags</CardTitle>
            <CardDescription className="text-[#A1A1A1]">
              Add relevant tags to help students find your course
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                placeholder="Add a tag..."
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="bg-[#1a1a1a] border-[#2B2B2B] text-[#F1F1F1]"
              />
              <Button type="button" onClick={addTag} variant="outline" className="border-[#2B2B2B] text-[#F1F1F1]">
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-[#E3583D]/10 text-[#E3583D] border-[#E3583D]/20 hover:bg-[#E3583D]/20 cursor-pointer"
                  onClick={() => removeTag(tag)}
                >
                  {tag}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" className="border-[#2B2B2B] text-[#F1F1F1] hover:bg-[#1a1a1a]">
            Save as Draft
          </Button>
          <Button type="submit" className="bg-[#E3583D] hover:bg-[#E3583D]/90 text-white px-8">
            Create Course
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminCourseForm;