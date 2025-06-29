
import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from 'lucide-react';

interface TwitterTestimonialProps {
  name: string;
  username: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
  retweets: number;
  verified?: boolean;
  role?: string;
  isHorizontal?: boolean;
}

const TwitterTestimonial: React.FC<TwitterTestimonialProps> = ({
  name,
  username,
  avatar,
  content,
  timestamp,
  likes,
  replies,
  retweets,
  verified = false,
  role,
  isHorizontal = false
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const containerClasses = isHorizontal 
    ? "bg-[#131313] border border-[#2B2B2B] rounded-2xl p-6 hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.02] hover:border-[#E3583D]/30 h-fit min-w-0"
    : "bg-[#131313] border border-[#2B2B2B] rounded-2xl p-6 hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.02] hover:border-[#E3583D]/30";

  // Check if this is a MasterJi team member for special styling
  const isMasterJiTeam = role && (role.includes('MasterJi') || role.includes('Teacher') || role.includes('Founder') || role.includes('CEO'));

  return (
    <div className={containerClasses}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="relative">
            <img 
              src={avatar} 
              alt={name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#2B2B2B] flex-shrink-0"
            />
            {/* MasterJi logo for team members */}
            {isMasterJiTeam && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#E3583D] rounded-full flex items-center justify-center ring-2 ring-[#131313]">
                <span className="text-white font-bold text-xs">M</span>
              </div>
            )}
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-[#F1F1F1] font-semibold text-base truncate">{name}</h4>
              {verified && (
                <svg className="w-5 h-5 text-[#3A8EFF] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <p className="text-[#A1A1A1] text-sm truncate">@{username}</p>
            {role && (
              <p className="text-[#E3583D] text-xs font-medium mt-1 truncate">{role}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#A1A1A1] flex-shrink-0">
          <span className="text-sm">{timestamp}</span>
          <MoreHorizontal className="w-4 h-4 hover:text-[#F1F1F1] cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <p className="text-[#F1F1F1] text-base leading-relaxed">{content}</p>
      </div>

      {/* Interaction Bar */}
      <div className="flex items-center justify-between pt-3 border-t border-[#2B2B2B]">
        <button className="flex items-center gap-2 text-[#A1A1A1] hover:text-[#3A8EFF] transition-colors group">
          <div className="p-2 rounded-full group-hover:bg-[#3A8EFF]/10 transition-colors">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-sm">{replies}</span>
        </button>

        <button 
          onClick={() => setIsRetweeted(!isRetweeted)}
          className={`flex items-center gap-2 transition-colors group ${
            isRetweeted ? 'text-[#3FCF8E]' : 'text-[#A1A1A1] hover:text-[#3FCF8E]'
          }`}
        >
          <div className="p-2 rounded-full group-hover:bg-[#3FCF8E]/10 transition-colors">
            <Repeat2 className="w-4 h-4" />
          </div>
          <span className="text-sm">{retweets + (isRetweeted ? 1 : 0)}</span>
        </button>

        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`flex items-center gap-2 transition-colors group ${
            isLiked ? 'text-[#FF5C5C]' : 'text-[#A1A1A1] hover:text-[#FF5C5C]'
          }`}
        >
          <div className="p-2 rounded-full group-hover:bg-[#FF5C5C]/10 transition-colors">
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </div>
          <span className="text-sm">{likes + (isLiked ? 1 : 0)}</span>
        </button>

        <button className="flex items-center gap-2 text-[#A1A1A1] hover:text-[#3A8EFF] transition-colors group">
          <div className="p-2 rounded-full group-hover:bg-[#3A8EFF]/10 transition-colors">
            <Share className="w-4 h-4" />
          </div>
        </button>
      </div>

      {/* Optional Read More Link */}
      <div className="mt-4 pt-3 border-t border-[#2B2B2B]">
        <button className="text-[#3A8EFF] hover:text-[#3A8EFF]/80 text-sm font-medium transition-colors">
          View on Twitter →
        </button>
      </div>
    </div>
  );
};

export default TwitterTestimonial;
