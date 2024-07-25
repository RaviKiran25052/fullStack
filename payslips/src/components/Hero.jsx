import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const pdfs = [
    { id: 1, title: 'Sample PDF 1', url: 'https://res.cloudinary.com/dalzs7bc2/image/upload/v1721889524/Ravi_Kiran_Varma_VTS_Assessment_Report_blan0f.pdf' },
    { id: 2, title: 'Sample PDF 2', url: '' },
];

const Hero = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);

    const handleView = (pdfUrl) => {
        setSelectedPdf(pdfUrl);
    };

    const handleDownload = (pdfUrl) => {
        
        if (pdfUrl == '') {
            alert('No Data..!');
        } else {
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
        }
    };

    useEffect(() => {
        return () => {
        if (selectedPdf) {
            URL.revokeObjectURL(selectedPdf);
        }
        };
    }, [selectedPdf]);

  return (
    <div className='heroSection'>
        <div className="dashboard">
            <div className="userDetails">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" className="userProfile" />
                <div className="userData">
                    <label>Name:</label>
                    <div>Durga</div>
                </div>
                <div className="userData">
                    <label>Employee ID:</label>
                    <div>VTS2025051</div>
                </div>
                <div className="userData">
                    <label>Email:</label>
                    <div>durgaking@gmail.com</div>
                </div>
                <div className="userData">
                    <label>Phone No:</label>
                    <div>9381736150</div>
                </div>
            </div>
            <div className="dashLinks">
                <div className="dashLink"><p>Amount Details</p></div>
                <div className="dashLink">
                    <p>Pay Rolls</p>
                    <ul className="dashDropDownList">
                        <li>Pay Slips</li>
                        <li>Details</li>
                    </ul>
                </div>
                <div className="dashLink"><p>Balance</p></div>
                <div className="dashLink"><p>Bills</p></div>
                <div className="dashLink"><p>History</p></div>
            </div>
        </div>
        <div className="payRollCards">
            {pdfs.map((pdf) => (
                <div key={pdf.id} className="payRollCard">
                    <p className="payRollDesp">{pdf.title}</p>
                    <div className="payRollBtnCont">
                        <button className="payRollBtn" onClick={() => handleView(pdf.url)}>View</button>
                        <button className="payRollBtn" onClick={() => handleDownload(pdf.url)}>Download</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="payRollPreview">
            {selectedPdf ? (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"> {/* Make sure this path is correct */}
                    <Viewer fileUrl={selectedPdf} />
                </Worker>
            ) : 
                <div className="noData">
                    <img src={process.env.PUBLIC_URL + '/images/box.png'} alt="" />
                    <p>No Data</p>
                </div>
            }
        </div>
    </div>
  )
}

export default Hero