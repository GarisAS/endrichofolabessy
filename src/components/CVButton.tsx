import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { downloadCV } from '@/utils/generateCV';

const CVButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsGenerating(true);
    toast({
      title: "Generating CV...",
      description: "Fetching project data and creating your PDF.",
    });

    try {
      const response = await fetch('https://api.github.com/users/garisas/repos');
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub projects');
      }
      const repos = await response.json();

      await downloadCV(repos);

      toast({
        title: "CV Generated!",
        description: "Your CV has been downloaded successfully.",
        variant: "default",
      });
    } catch (error) {
      console.error("CV Generation Error:", error);
      toast({
        title: "Error",
        description: "There was a problem generating your CV.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button 
      onClick={handleDownload}
      disabled={isGenerating}
      className="bg-backend-600 hover:bg-backend-700 flex items-center gap-2"
    >
      {isGenerating ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          <span>Generating...</span>
        </>
      ) : (
        <>
          <FileText className="w-4 h-4" />
          <span>Download CV</span>
        </>
      )}
    </Button>
  );
};

export default CVButton;
