
import Layout from '@/components/Layout';
import { Hash, Plus, Settings, Send, Smile, Paperclip, Users, Megaphone, HelpCircle, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const Community = () => {
  const [selectedChannel, setSelectedChannel] = useState('general');
  const [message, setMessage] = useState('');
  const [currentTheme, setCurrentTheme] = useState('dark');

  const simpleThemes = [
    { id: 'dark', name: 'Dark', bg: 'bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a]' },
    { id: 'light', name: 'Light', bg: 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300' },
    { id: 'red', name: 'Red', bg: 'bg-gradient-to-br from-red-900 via-red-800 to-red-700' },
    { id: 'blue', name: 'Blue', bg: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700' },
    { id: 'green', name: 'Green', bg: 'bg-gradient-to-br from-green-900 via-green-800 to-green-700' }
  ];

  const gradientThemes = [
    { id: 'sunset', name: 'Sunset', bg: 'bg-gradient-to-br from-orange-400 via-red-500 to-pink-500' },
    { id: 'ocean', name: 'Ocean', bg: 'bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500' },
    { id: 'purple-bliss', name: 'Purple Bliss', bg: 'bg-gradient-to-br from-purple-400 via-pink-400 to-red-400' },
    { id: 'forest', name: 'Forest', bg: 'bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600' },
    { id: 'cosmic', name: 'Cosmic', bg: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900' }
  ];

  const allThemes = [...simpleThemes, ...gradientThemes];
  const selectedThemeData = allThemes.find(theme => theme.id === currentTheme) || simpleThemes[0];

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
      <div className={`h-full ${selectedThemeData.bg} transition-all duration-500`}>
        {/* Theme Selection Header */}
        <div className="p-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-2xl font-bold">Community Chat</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Theme:</span>
              </div>
              <Select value={currentTheme} onValueChange={setCurrentTheme}>
                <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Simple Colors
                  </div>
                  {simpleThemes.map((theme) => (
                    <SelectItem key={theme.id} value={theme.id} className="text-white hover:bg-gray-800">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full ${theme.bg}`} />
                        {theme.name}
                      </div>
                    </SelectItem>
                  ))}
                  <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">
                    Gradient Colors
                  </div>
                  {gradientThemes.map((theme) => (
                    <SelectItem key={theme.id} value={theme.id} className="text-white hover:bg-gray-800">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full ${theme.bg}`} />
                        {theme.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100vh-120px)]">
          {/* Channels Sidebar */}
          <div className="w-64 bg-black/30 backdrop-blur-sm border-r border-white/10 flex flex-col">
            <div className="p-4 border-b border-white/10">
              <h2 className="text-white font-semibold text-lg">Channels</h2>
            </div>
            
            <div className="flex-1 p-4">
              <div className="space-y-2">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <button
                      key={channel.id}
                      onClick={() => setSelectedChannel(channel.id)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all ${
                        selectedChannel === channel.id
                          ? 'bg-white/20 text-white'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{channel.name}</span>
                      {channel.adminOnly && (
                        <div className="ml-auto">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="p-4 border-t border-white/10">
              <Button variant="outline" className="w-full border-white/20 text-white hover:text-white hover:border-white/40 bg-transparent">
                <Plus className="w-4 h-4 mr-2" />
                Create Channel
              </Button>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 bg-black/20 backdrop-blur-sm border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Hash className="w-5 h-5 text-white/70" />
                <h3 className="text-white font-semibold">#{selectedChannel}</h3>
                <span className="text-white/60 text-sm">
                  {selectedChannel === 'announcements' ? 'Important updates from admin' : 'General discussion'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                  <Users className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="group hover:bg-white/5 -mx-4 px-4 py-2 rounded-lg transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {msg.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-semibold">{msg.user}</span>
                        <span className="text-white/50 text-xs">{msg.time}</span>
                      </div>
                      <p className="text-white/90 leading-relaxed">{msg.message}</p>
                      {msg.reactions.length > 0 && (
                        <div className="flex gap-1 mt-2">
                          {msg.reactions.map((reaction, i) => (
                            <button
                              key={i}
                              className="flex items-center gap-1 px-2 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
                            >
                              <span>{reaction.emoji}</span>
                              <span className="text-white/80">{reaction.count}</span>
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
            <div className="p-4 bg-black/20 backdrop-blur-sm border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={`Message #${selectedChannel}`}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 pr-20"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                    <Button variant="ghost" size="sm" className="text-white/70 hover:text-white p-1">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white/70 hover:text-white p-1">
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Button className="bg-white/20 hover:bg-white/30 text-white px-4 py-3 border border-white/20">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Online Users Sidebar */}
          <div className="w-64 bg-black/30 backdrop-blur-sm border-l border-white/10">
            <div className="p-4 border-b border-white/10">
              <h3 className="text-white font-semibold">Online — {onlineUsers.filter(u => u.status === 'online').length}</h3>
            </div>
            <div className="p-4 space-y-2">
              {onlineUsers.map((user, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                  <div className="relative">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div
                      className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black/50 ${
                        user.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                    />
                  </div>
                  <span className="text-white/80 text-sm">{user.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
