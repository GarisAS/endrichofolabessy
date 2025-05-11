
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { downloadCV } from '@/utils/generateCV';

const CVButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsGenerating(true);
    toast({
      title: "Generating CV...",
      description: "Please wait while we create your CV",
    });

    try {
      // Small timeout to allow the toast to show
      setTimeout(async () => {
        await downloadCV();
        setIsGenerating(false);
        toast({
          title: "CV Generated!",
          description: "Your CV has been downloaded successfully",
          variant: "default",
        });
      }, 500);
    } catch (error) {
      setIsGenerating(false);
      toast({
        title: "Error",
        description: "There was a problem generating your CV",
        variant: "destructive",
      });
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
