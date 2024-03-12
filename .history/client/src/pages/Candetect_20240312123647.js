import React, { useState } from "react";
import "../pages/Candetect.css";
import { Card } from "antd";
import deleteicon from "../assets/delete-.svg";
import ai from "../assets/ai_img.svg";
import axios from "axios";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";
import rayi from "../assets/Rayi.svg"

function Candetect() {
 const [imageFile, setImageFile] = useState(null);
 const [errorMessage, setErrorMessage] = useState("");
 const [loading, setLoading] = useState(false);
 const [responseData, setResponseData] = useState("");
 const navigate = useNavigate();

 const location = useLocation();
 const { title, subtitle } = location.state || { title: 'Default Title', subtitle: 'Default Subtitle' };

 const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
 };

 const handleClearImage = () => {
    setImageFile(null);
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = "";
    }
    setErrorMessage("");
    setResponseData(""); 
 };

 const handleDeleteImage = () => {
    setImageFile(null);
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = "";
    }
    setResponseData(""); 
 };

 const handleSubmit = () => {
  if (!imageFile) {
     setErrorMessage("Please upload an Image");
     console.log("Please upload an Image");
  } else {
     setLoading(true);
     let apiUrl = "";
     let data = {};
     if (title === "Breast Cancer Detector") {
       apiUrl = "http://ct.rayi.in:5002/predicttest";
       // For Breast Cancer Detector, continue using FormData
       const formData = new FormData();
       formData.append("image", imageFile);
       data = formData;
     } else if (title === "Face Detector") {
       apiUrl = "http://ct.rayi.in:5000/recognize";
       // For Face Detector, convert image to base64
       const reader = new FileReader();
       reader.onloadend = () => {
         const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
         data = {
           image_base64: base64String,
         };
 
 
         axios
           .post(apiUrl, data, {
             headers: {
               "Content-Type": "application/json",
             },
           })
           .then((response) => {
             setLoading(false);
             if (response.data.detected_user === "No faces detected") {
              setResponseData("No faces detected");
            } else {
             
              setResponseData(
                {
                  image: URL.createObjectURL(imageFile),
                  detected_user:response.data.detected_user,
                  employee_id:response.data.emp_id,
                  role: "Software Developer"
                })
                
            }
           })
           .catch((error) => {
             setLoading(false);
             setErrorMessage("Failed to submit. Please try again.");
             console.error(error);
           });
       };
       reader.readAsDataURL(imageFile);
       return; 
     } else if (title === "Pipe Counting") {
      apiUrl = "http://ct.rayi.in:5001/detect";
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
        data = {
          base64_image: base64String,
        };
   
        axios
          .post(apiUrl, data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setLoading(false);
           
            const base64Image = response.data.base64_image_result; // Adjust this key based on your actual response structure
 const totalCount = response.data.total_count; // Adjust this key based on your actual response structure
console.log(base64Image);
console.log(totalCount)
 // Set the response data in a new format
 setResponseData({
    base64Image: base64Image,
    totalCount: totalCount,
 });
          })
          .catch((error) => {
            setLoading(false);
            setErrorMessage("Failed to submit. Please try again.");
            console.error(error);
          });
      };
      reader.readAsDataURL(imageFile);
      return; // Prevent the rest of the function from executing
    }
 
    
     axios
       .post(apiUrl, data, {
         headers: {
           "Content-Type": "multipart/form-data",
         },
       })
       .then((response) => {
         setLoading(false);
         setResponseData(response.data);
       })
       .catch((error) => {
         setLoading(false);
         setErrorMessage("Failed to submit. Please try again.");
         console.error(error);
       });
  }
 };

 const handleAipage = () => {
    navigate("/chatbox");
 };

 return (
    <>
      <div>
        <Header title={title} subtitle={subtitle} />

        <div className="overallContainer">
          <div className="dragandbutton">
            <div className="image-upload-box">
              <input
                type="file"
                accept="image/*"
                id="file-input"
                className="file-input"
                onChange={handleFileInputChange}
              />
              {imageFile ? null : (
                <div>
                 <label htmlFor="file-input" className="upload-label">
                    <span>Drop Image Here</span> <span>-or-</span>{" "}
                    <span>Click to Upload</span>{" "}
                 </label>{" "}
                 {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                 )}{" "}
                </div>
              )}

              {imageFile && (
                <div className="image-preview">
                 <img
                    src={URL.createObjectURL(imageFile)}
                    alt="Uploaded"
                    className="full-size-image"
                 ></img>

                 <div className="image-actions">
                    <img
                      src={deleteicon}
                      alt="Delete"
                      className="icon"
                      onClick={handleDeleteImage}
                    />
                 </div>
                </div>
              )}
            </div>

            <div className="button-container">
              <button className="sbutton" onClick={handleClearImage}>
                Clear
              </button>
              <button className="sbutton" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
          <div>
            <Card title="Output" hoverable>
              <div className="text-area">
              {loading ? (
 <div className="loader-all">
    <div className="loader"></div>
    <p>loading...</p>
 </div>
) : (
 <div>
    {typeof responseData === 'string' ? (
      <pre>{responseData}</pre>
    ) : (
      // Check if the responseData has the keys we expect for the "Pipe Counting" case
      responseData.base64Image && responseData.totalCount ? (
        <>
          <div className="pipe-counting-result">
            <img src={`data:image/png;base64,${responseData.base64Image}`} alt="Processed" className="uploadimage"/>
            <p>Total Count: {responseData.totalCount}</p>
          </div>
        </>
      ) : (
        // Fallback to the previous display logic if the keys are not present
        <>
          <div className="idcard">
            <div className="idcard-border-top"></div>
            <div className="img">
              <img src={responseData.image} alt="Uploaded" className="uploadimage"/>
            </div>
            <span>Username: {(responseData.detected_user)}</span>
            <p className="job"> Role: {responseData.role}</p>
            <p className="job">Employee_Id: {responseData.employee_id}</p>
          </div>
        </>
      )
    )}
 </div>
)}
              </div>
            </Card>
          </div>
        </div>
  <div className="app_btn">
        {title === "Face Detector" && (
        
        <a className="playstore-button" href="https://drive.google.com/file/d/1Iti7YqzuhaUXecjY6D_aitSzeS3V5dZp/view?usp=sharing">
            <img src={rayi} className="icon" alt="rayi"/>
          <span className="texts">
            <span className="text-1">GET IT ON</span>
            <span className="text-2">Mobile App</span>
          </span>
        </a>
      )}
      </div>
{(title === "Breast Cancer Detector" ) && (
        <div className="ask-me-icon">
          <div className="tooltip-container">
            <span className="tooltip">Ask AI</span>
            <span className="text" onClick={handleAipage}><img alt="Ai" src={ai} style={{height:"60px"}} /></span>  
          </div>
        </div>
      )}
      </div>
    </>
 );
}

export default Candetect;
