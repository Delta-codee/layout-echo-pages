
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Link, FileText, AlertCircle } from 'lucide-react';

const ProjectUploader = () => {
  const [projectFile, setProjectFile] = useState<File | null>(null);
  const [githubLink, setGithubLink] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProjectFile(file);
    }
  };

  const handleSubmit = () => {
    console.log('Submitting project:', { projectFile, githubLink, description });
    // TODO: Integrate with Supabase when connected
  };

  return (
    <div className="bg-[#131313] border border-[#2B2B2B] rounded-lg p-6 mb-8">
      <h2 className="text-xl font-bold text-[#F1F1F1] mb-4">Assign Your Project for Peer Review</h2>
      
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-400 mb-1">Recommendation</h3>
            <p className="text-[#A1A1A1] text-sm leading-relaxed">
              Include a README file with setup instructions, provide clear code comments, 
              and ensure your project runs without errors. This helps reviewers provide better feedback.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* File Upload Section */}
        <div>
          <label className="block text-[#F1F1F1] font-medium mb-3">
            <Upload className="w-4 h-4 inline mr-2" />
            Upload Your Project
          </label>
          <div className="border-2 border-dashed border-[#2B2B2B] rounded-lg p-6 text-center hover:border-[#E3583D]/50 transition-colors">
            <input
              type="file"
              accept=".zip,.rar,.7z,.tar.gz"
              onChange={handleFileChange}
              className="hidden"
              id="project-file"
            />
            <label htmlFor="project-file" className="cursor-pointer">
              {projectFile ? (
                <div className="flex items-center justify-center gap-2 text-[#E3583D]">
                  <FileText className="w-5 h-5" />
                  <span>{projectFile.name}</span>
                </div>
              ) : (
                <div>
                  <Upload className="w-8 h-8 text-[#A1A1A1] mx-auto mb-2" />
                  <p className="text-[#A1A1A1] mb-1">Click to upload your project</p>
                  <p className="text-sm text-[#A1A1A1]">ZIP, RAR, 7Z, TAR.GZ up to 50MB</p>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* GitHub Link Section */}
        <div>
          <label className="block text-[#F1F1F1] font-medium mb-3">
            <Link className="w-4 h-4 inline mr-2" />
            GitHub Repository Link
          </label>
          <input
            type="url"
            placeholder="https://github.com/username/repository"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            className="w-full bg-[#0B0B0B] border border-[#2B2B2B] rounded-lg px-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D]"
          />
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-[#F1F1F1] font-medium mb-3">
            Project Description
          </label>
          <textarea
            placeholder="Describe your project, the technologies used, and what reviewers should focus on..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-[#0B0B0B] border border-[#2B2B2B] rounded-lg px-4 py-3 text-[#F1F1F1] placeholder-[#A1A1A1] focus:outline-none focus:border-[#E3583D] min-h-[100px] resize-none"
          />
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleSubmit}
            disabled={(!projectFile && !githubLink.trim()) || !description.trim()}
            className="bg-gradient-to-r from-[#E3583D] to-[#E4593D] hover:from-[#E3583D]/90 hover:to-[#E4593D]/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit for Review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectUploader;
