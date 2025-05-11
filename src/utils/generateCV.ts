
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async () => {
  // Select all the main sections
  const sections = document.querySelectorAll('#hero, #about, #skills, #projects');
  const pdf = new jsPDF('p', 'mm', 'a4');
  let verticalPosition = 10;

  // Add title
  pdf.setFontSize(18);
  pdf.setTextColor(66, 66, 66);
  pdf.text('Endricho Folabessy - CV', 105, verticalPosition, { align: 'center' });
  verticalPosition += 10;

  // Process each section
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i] as HTMLElement;
    
    try {
      // Create canvas from the section
      const canvas = await html2canvas(section, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });
      
      // Convert to image
      const imgData = canvas.toDataURL('image/jpeg', 0.8);
      
      // Calculate height to maintain aspect ratio
      const imgWidth = 190; // A4 width with margins
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add new page if needed
      if (verticalPosition + imgHeight > 280) {
        pdf.addPage();
        verticalPosition = 10;
      }
      
      // Add section to PDF
      pdf.addImage(imgData, 'JPEG', 10, verticalPosition, imgWidth, imgHeight);
      verticalPosition += imgHeight + 10;
    } catch (error) {
      console.error('Error capturing section:', error);
    }
  }

  // Save the PDF
  pdf.save('endricho-folabessy-cv.pdf');
};

export const downloadCV = () => {
  // Show loading state
  // This could be enhanced with a toast notification
  generatePDF();
};
