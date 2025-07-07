
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Image, Bold, Type } from 'lucide-react';

const BlogCreator = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const insertFormatting = (format: string) => {
    const textarea = document.getElementById('blog-content') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    let formattedText = '';
    switch (format) {
      case 'h1':
        formattedText = `# ${selectedText || 'Heading 1'}`;
        break;
      case 'h2':
        formattedText = `## ${selectedText || 'Heading 2'}`;
        break;
      case 'h3':
        formattedText = `### ${selectedText || 'Heading 3'}`;
        break;
      case 'bold':
        formattedText = `**${selectedText || 'bold text'}**`;
        break;
      default:
        formattedText = selectedText;
    }
    
    const newContent = content.substring(0, start) + formattedText + content.substring(end);
    setContent(newContent);
  };

  const handlePublish = () => {
    console.log('Publishing blog:', { title, content });
    // TODO: Integrate with Supabase when connected
  };

  return (
    <div className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6 mb-8">
      <h2 className="text-xl font-bold text-[#F1F1F1] mb-4">Write a Blog Post</h2>
      
      <input
        type="text"
        placeholder="Blog title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-[#0B0B0B] border border-[#2B2B2B] rounded-lg px-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D] mb-4"
      />
      
      <div className="flex gap-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => insertFormatting('h1')}
          className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#2B2B2B]"
        >
          <Type className="w-4 h-4 mr-1" />
          H1
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => insertFormatting('h2')}
          className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#2B2B2B]"
        >
          <Type className="w-4 h-4 mr-1" />
          H2
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => insertFormatting('h3')}
          className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#2B2B2B]"
        >
          <Type className="w-4 h-4 mr-1" />
          H3
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => insertFormatting('bold')}
          className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#2B2B2B]"
        >
          <Bold className="w-4 h-4 mr-1" />
          Bold
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-[#2B2B2B] text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#2B2B2B]"
        >
          <Image className="w-4 h-4 mr-1" />
          Image
        </Button>
      </div>
      
      <Textarea
        id="blog-content"
        placeholder="What's on your mind? Share your thoughts, tutorials, or experiences..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full bg-[#0B0B0B] border border-[#2B2B2B] text-[#F1F1F1] placeholder-[#A1A1A1] focus:border-[#E3583D] min-h-[120px] mb-4 resize-none"
      />
      
      <div className="flex justify-end">
        <Button
          onClick={handlePublish}
          disabled={!title.trim() || !content.trim()}
          className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Publish Blog
        </Button>
      </div>
    </div>
  );
};

export default BlogCreator;
