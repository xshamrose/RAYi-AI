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
      const formData = new FormData();
      formData.append("image", imageFile);
      setLoading(true);
      let apiUrl = "";
      if (title === "Breast Cancer Detector") {
        apiUrl = "http://ct.rayi.in:5003"; 
      } else if (title === "Face Detector") {
        apiUrl = "http://ct.rayi.in:5000/recognize"; 
      }
     
      axios
        .post(apiUrl, formData, {
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
          <div class="tooltip-container">
            <span class="tooltip">Ask AI</span>
            <span class="text" onClick={handleAipage}><img alt="Ai" src={ai} style={{height:"60px"}} /></span>  
          </div>
        </div>
      </div>
    </>
 );
}

export default Candetect;
