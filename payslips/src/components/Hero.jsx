import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const pdfs = [
    { id: 1, title: 'Sample PDF 1', url: 'https://res.cloudinary.com/dalzs7bc2/image/upload/v1721889524/Ravi_Kiran_Varma_VTS_Assessment_Report_blan0f.pdf', date: '2024-02-15' },
    { id: 2, title: 'Sample PDF 2', url: 'https://example.com/sample2.pdf', date: '2024-08-05' }
];

const Hero = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    const handleDownload = (pdfUrl) => {   
        if (pdfUrl === "") {
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
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
      };
    
      const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
      };
      const filterPdfs = () => {
        if (!startDate || !endDate) return pdfs;
    
        const inputStartDate = new Date(startDate);
        const inputEndDate = new Date(endDate);
    
        return pdfs.filter((pdf) => {
          const pdfDate = new Date(pdf.date);
          return pdfDate >= inputStartDate && pdfDate <= inputEndDate;
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
                <div className="dashLink"><p>Dashboard</p></div>
                <div className="dashLink"><p>Attendance</p></div>
                <div className="dashLink">
                    <p>Pay Rolls</p>
                    <ul className="dashDropDownList">
                        <li>Pay Slips</li>
                        <li>Details</li>
                    </ul>
                </div>
                <div className="dashLink"><p>Leave</p></div>
            </div>
        </div>
            <div className="payRollCards">
                <div className='dateFilter'>
                    <label style={{marginRight: "30px"}}>
                    Start Date:
                    <input
                        type="date"
                        value={startDate}
                        onChange={handleStartDateChange}
                    />
                    </label>
                    <label>
                    End Date:
                    <input
                        type="date"
                        value={endDate}
                        onChange={handleEndDateChange}
                    />
                    </label>
                </div>
                <div>
                    <table className='dataTable' border={'1px'}>
                        <thead>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Action</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {filterPdfs().map((pdf) => (
                                <tr>
                                    <td>{pdf.id}</td>
                                    <td>{pdf.title}</td>
                                    <td>{pdf.date}</td>
                                    <td><span onClick={() => setSelectedPdf(pdf.url)}>View</span></td>
                                    <td><span onClick={() => handleDownload(pdf.url)}>Download</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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