
import Layout from '@/components/Layout';
import { Hash, Plus, Settings, Send, Smile, Paperclip, Users, Megaphone, HelpCircle, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const Community = () => {
  const [selectedChannel, setSelectedChannel] = useState('general');
  const [message, setMessage] = useState('');

  const channels = [
    { id: 'announcements', name: 'announcements', icon: Megaphone, adminOnly: true },
    { id: 'general', name: 'general', icon: Hash, adminOnly: false },
    { id: 'projects', name: 'projects', icon: Code, adminOnly: false },
    { id: 'help', name: 'help', icon: HelpCircle, adminOnly: false }
  ];

  const messages = [
    {
      id: 1,
      user: 'Alex Johnson',
      avatar: 'AJ',
      message: 'Hey everyone! Just finished my React project. Would love some feedback!',
      time: '2:30 PM',
      reactions: [{ emoji: '👍', count: 3 }, { emoji: '🔥', count: 1 }]
    },
    {
      id: 2,
      user: 'Sarah Chen',
      avatar: 'SC',
      message: 'Great work Alex! I love the clean UI design. How did you handle the state management?',
      time: '2:45 PM',
      reactions: []
    },
    {
      id: 3,
      user: 'John Doe',
      avatar: 'JD',
      message: 'Has anyone worked with Node.js authentication before? I\'m having some issues with JWT tokens.',
      time: '3:15 PM',
      reactions: [{ emoji: '🤔', count: 2 }]
    }
  ];

  const onlineUsers = [
    { name: 'Alex Johnson', status: 'online' },
    { name: 'Sarah Chen', status: 'online' },
    { name: 'Mike Wilson', status: 'away' },
    { name: 'Emma Davis', status: 'online' }
  ];

  return (
    <Layout>
      <div className="flex h-full">
        {/* Channels Sidebar */}
        <div className="w-64 bg-[#1a1a1a] border-r border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-white font-semibold text-lg">Community</h2>
          </div>
          
          <div className="flex-1 p-4">
            <div className="space-y-2">
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Channels
              </div>
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <button
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all ${
                      selectedChannel === channel.id
                        ? 'bg-[#FF6B47] text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{channel.name}</span>
                    {channel.adminOnly && (
                      <div className="ml-auto">
                        <div className="w-2 h-2 bg-[#FF6B47] rounded-full" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-700">
            <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:text-white hover:border-[#FF6B47]">
              <Plus className="w-4 h-4 mr-2" />
              Create Channel
            </Button>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 bg-[#1a1a1a] border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-gray-400" />
              <h3 className="text-white font-semibold">#{selectedChannel}</h3>
              <span className="text-gray-400 text-sm">
                {selectedChannel === 'announcements' ? 'Important updates from admin' : 'General discussion'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Users className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="group hover:bg-gray-800/30 -mx-4 px-4 py-2 rounded-lg transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#FF6B47] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                    {msg.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-semibold">{msg.user}</span>
                      <span className="text-gray-400 text-xs">{msg.time}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{msg.message}</p>
                    {msg.reactions.length > 0 && (
                      <div className="flex gap-1 mt-2">
                        {msg.reactions.map((reaction, i) => (
                          <button
                            key={i}
                            className="flex items-center gap-1 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
                          >
                            <span>{reaction.emoji}</span>
                            <span className="text-gray-300">{reaction.count}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 bg-[#1a1a1a] border-t border-gray-700">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Message #${selectedChannel}`}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B47] pr-20"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
                    <Smile className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Button className="bg-[#FF6B47] hover:bg-[#e55a3d] text-white px-4 py-3">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Online Users Sidebar */}
        <div className="w-64 bg-[#1a1a1a] border-l border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-white font-semibold">Online — {onlineUsers.filter(u => u.status === 'online').length}</h3>
          </div>
          <div className="p-4 space-y-2">
            {onlineUsers.map((user, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors">
                <div className="relative">
                  <div className="w-8 h-8 bg-[#FF6B47] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-[#1a1a1a] ${
                      user.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                  />
                </div>
                <span className="text-gray-300 text-sm">{user.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
