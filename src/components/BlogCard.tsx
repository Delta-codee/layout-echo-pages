
import { Heart, MessageCircle, Share, Eye } from 'lucide-react';
import { useState } from 'react';

interface BlogCardProps {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    username: string;
    avatar: string;
    followers: number;
    totalBlogs: number;
  };
  publishedAt: string;
  likes: number;
  comments: number;
  views: number;
  isLiked?: boolean;
}

const BlogCard = ({ 
  title, 
  content, 
  author, 
  publishedAt, 
  likes, 
  comments, 
  views,
  isLiked = false 
}: BlogCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const renderContent = (text: string) => {
    return text
      .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold text-[#F1F1F1] mb-2">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold text-[#F1F1F1] mb-2">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold text-[#F1F1F1] mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#F1F1F1]">$1</strong>');
  };

  return (
    <div className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6 hover:border-[#E3583D]/30 transition-colors">
      {/* Author Header */}
      <div className="flex items-start gap-3 mb-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-[#F1F1F1]">{author.name}</h3>
            <span className="text-[#A1A1A1] text-sm">@{author.username}</span>
            <span className="text-[#A1A1A1] text-sm">·</span>
            <span className="text-[#A1A1A1] text-sm">{publishedAt}</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#A1A1A1] mt-1">
            <span>{author.followers} followers</span>
            <span>{author.totalBlogs} blogs</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-[#F1F1F1] mb-3">{title}</h2>
        <div 
          className="text-[#A1A1A1] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: renderContent(content) }}
        />
      </div>

      {/* Engagement Stats */}
      <div className="flex items-center gap-6 pt-3 border-t border-[#2B2B2B]">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors ${
            liked 
              ? 'text-red-400 hover:bg-red-400/10' 
              : 'text-[#A1A1A1] hover:text-red-400 hover:bg-red-400/10'
          }`}
        >
          <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
          <span className="text-sm">{likeCount}</span>
        </button>
        
        <button className="flex items-center gap-2 px-3 py-1 rounded-full text-[#A1A1A1] hover:text-blue-400 hover:bg-blue-400/10 transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">{comments}</span>
        </button>
        
        <button className="flex items-center gap-2 px-3 py-1 rounded-full text-[#A1A1A1] hover:text-green-400 hover:bg-green-400/10 transition-colors">
          <Share className="w-4 h-4" />
          <span className="text-sm">Share</span>
        </button>
        
        <div className="flex items-center gap-2 px-3 py-1 text-[#A1A1A1]">
          <Eye className="w-4 h-4" />
          <span className="text-sm">{views}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
