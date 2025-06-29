
import { useState } from 'react';
import { X, Bell, Calendar, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NoticeBoardPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NoticeBoardPanel = ({ isOpen, onClose }: NoticeBoardPanelProps) => {
  const notices = [
    {
      id: 1,
      title: "System Maintenance Scheduled",
      content: "Our platform will undergo scheduled maintenance on January 25th from 2:00 AM to 4:00 AM IST. Some features may be temporarily unavailable.",
      type: "warning",
      date: "2024-01-20",
      priority: "high"
    },
    {
      id: 2,
      title: "New Course: Advanced React Patterns",
      content: "We're excited to announce a new advanced course on React patterns and best practices. Enrollment opens next week!",
      type: "info",
      date: "2024-01-18",
      priority: "medium"
    },
    {
      id: 3,
      title: "Assignment Submission Deadline",
      content: "Reminder: The deadline for submitting your Database Design project is January 30th at 11:59 PM.",
      type: "alert",
      date: "2024-01-15",
      priority: "high"
    },
    {
      id: 4,
      title: "Holiday Schedule Update",
      content: "Classes will be suspended on January 26th (Republic Day). Regular schedule resumes on January 27th.",
      type: "success",
      date: "2024-01-12",
      priority: "low"
    }
  ];

  const getNoticeIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'info':
        return <Info className="w-5 h-5 text-[#3A8EFF]" />;
      case 'alert':
        return <AlertCircle className="w-5 h-5 text-[#FF5C5C]" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-[#3FCF8E]" />;
      default:
        return <Bell className="w-5 h-5 text-[#A1A1A1]" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-[#FF5C5C]';
      case 'medium':
        return 'border-l-[#3A8EFF]';
      case 'low':
        return 'border-l-[#3FCF8E]';
      default:
        return 'border-l-[#A1A1A1]';
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Panel */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-[#0B0B0B] border-l border-[#2B2B2B] z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2B2B2B]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#E3583D] to-[#E4593D] rounded-lg flex items-center justify-center">
              <Bell className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#F1F1F1]">Notice Board</h2>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#131313]"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 h-full overflow-y-auto pb-20">
          <div className="space-y-4">
            {notices.map((notice) => (
              <Card key={notice.id} className={`bg-[#131313] border-[#2B2B2B] border-l-4 ${getPriorityColor(notice.priority)} hover:border-[#E3583D]/30 transition-all`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    {getNoticeIcon(notice.type)}
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#F1F1F1] mb-1">{notice.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-[#A1A1A1]">
                        <Calendar className="w-3 h-3" />
                        <span>{notice.date}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          notice.priority === 'high' 
                            ? 'bg-[#FF5C5C]/20 text-[#FF5C5C]'
                            : notice.priority === 'medium'
                            ? 'bg-[#3A8EFF]/20 text-[#3A8EFF]'
                            : 'bg-[#3FCF8E]/20 text-[#3FCF8E]'
                        }`}>
                          {notice.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{notice.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty state if no notices */}
          {notices.length === 0 && (
            <div className="text-center py-12">
              <Bell className="w-16 h-16 text-[#A1A1A1] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#F1F1F1] mb-2">No notices available</h3>
              <p className="text-[#A1A1A1]">Check back later for important updates and announcements.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NoticeBoardPanel;
