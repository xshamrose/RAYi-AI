import React, { useState } from "react";
import "../pages/Candetect.css";
import { Card } from "antd";
import deleteicon from "../assets/delete-.svg";
import ai from "../assets/ai_img.svg"
import axios from "axios";

function Candetect() {
  const [imageFile, setImageFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleClearImage = () => {
    setImageFile(null);
    //reset the file input
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = "";
    }
    setErrorMessage("");
  };

  const handleDeleteImage = () => {
    setImageFile(null);
    //reset the file input
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
      axios
        .post("http://ct.rayi.in:5002/predicttest", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setLoading(false);
          setResponseData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          if (error.response) {
            console.error("Error Response Data:", error.response.data);
            console.error("Error Response Status:", error.response.status);
          } else if (error.request) {
            console.error("No response received:", error.request);
          } else {
            console.error("Error:", error.message);
          }
          setErrorMessage("Failed to submit. Please try again.");
        });
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "nowrap",
          alignItems: "center",
          backgroundImage: "linear-gradient(#69b1ff, #e9f0f2)",
          width: "100%",
        }}
      >
        <h1>Breast Cancer Detector</h1>
      </div>

      <p style={{ marginLeft: "40px" }}>
        Enter the Histopathological image of the breast to predict the
        diagnosis.
      </p>

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
                responseData
              )}
            </div>
          </Card>
        </div>
      </div>
      <div className="ask-me-icon">
      <div class="tooltip-container">
  <span class="tooltip">Uiverse.io</span>
  <span class="text"><img alt="Ai" src={ai} style={{height:"60px"}} /></span>  
</div>
      
    </div>
    </div>
  );
}

export default Candetect;
