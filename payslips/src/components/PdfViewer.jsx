import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import default styles

const pdfs = [
  { id: 1, title: 'Sample PDF 1', url: 'https://res.cloudinary.com/dalzs7bc2/image/upload/v1721889524/Ravi_Kiran_Varma_VTS_Assessment_Report_blan0f.pdf' },
  { id: 2, title: 'Sample PDF 2', url: 'https://res.cloudinary.com/dalzs7bc2/image/upload/v1721889524/Ravi_Kiran_Varma_VTS_Assessment_Report_blan0f.pdf' },
];

const PdfViewer = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleView = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  const handleDownload = (pdfUrl) => {
    
    fetch(pdfUrl).then((response) => {
        response.blob().then((blob) => {
        
            const fileURL = window.URL.createObjectURL(blob);
                
            let alink = document.createElement("a");
            alink.href = fileURL;
            const filename = pdfUrl.split('/').pop() || 'document.pdf';
            alink.download = filename.endsWith('.pdf') ? filename : `${filename}.pdf`;
            alink.click();
        });
    });
  };

  useEffect(() => {
    return () => {
      if (selectedPdf) {
        URL.revokeObjectURL(selectedPdf);
      }
    };
  }, [selectedPdf]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
        {pdfs.map((pdf) => (
          <div key={pdf.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', width: '200px', textAlign: 'center' }}>
            <h3>{pdf.title}</h3>
            <button onClick={() => handleView(pdf.url)} style={{ margin: '5px', padding: '5px 10px' }}>
              View
            </button>
            <button onClick={() => handleDownload(pdf.url)} style={{ margin: '5px', padding: '5px 10px' }}>
              Download
            </button>
          </div>
        ))}
      </div>
      {selectedPdf && (
        <div style={{ width: '80%', height: '750px', overflow: 'auto' }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"> {/* Make sure this path is correct */}
            <Viewer fileUrl={selectedPdf} />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
