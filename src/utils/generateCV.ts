import { pdf } from '@react-pdf/renderer';
import React from 'react';
import CVDocument from '@/components/CVDocument';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

export const downloadCV = async (repos: Repo[]) => {
  const documentInstance = React.createElement(CVDocument, { repos });

  const blob = await pdf(documentInstance as any).toBlob();

  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'CV-Endricho-Folabessy.pdf';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
