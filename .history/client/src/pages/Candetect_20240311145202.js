import React, { useState } from "react";
import "../pages/Candetect.css";
import { Card } from "antd";
import deleteicon from "../assets/delete-.svg";
import ai from "../assets/ai_img.svg";
import axios from "axios";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";

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
 };

 const handleDeleteImage = () => {
    setImageFile(null);
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = "";
    }
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
 
         // Make the API call with the base64 string
         axios
           .post(apiUrl, data, {
             headers: {
               "Content-Type": "application/json",
             },
           })
           .then((response) => {
             setLoading(false);
             setResponseData(JSON.stringify(response.data, null, 2));
           })
           .catch((error) => {
             setLoading(false);
             setErrorMessage("Failed to submit. Please try again.");
             console.error(error);
           });
       };
       reader.readAsDataURL(imageFile);
       return; // Exit the function early to prevent the default FormData handling
     }
 
     // Default case, assuming it's the Breast Cancer Detector
     axios
       .post(apiUrl, data, {
         headers: {
           "Content-Type": "multipart/form-data",
         },
       })
       .then((response) => {
         setLoading(false);
         setResponseData(JSON.stringify(response.data, null, 2));
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
                 <pre>{responseData}</pre> 
                 
                )}
              </div>
            </Card>
          </div>
        </div>
        <div className="ask-me-icon">
          <div className="tooltip-container">
            <span className="tooltip">Ask AI</span>
            <span className="text" onClick={handleAipage}><img alt="Ai" src={ai} style={{height:"60px"}} /></span>  
          </div>
        </div>
      </div>
    </>
 );
}

export default Candetect;
