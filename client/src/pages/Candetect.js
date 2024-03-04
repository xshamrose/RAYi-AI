import React, { useState } from "react";
import "../pages/Candetect.css";
// import Header from "./Header";
import { Card } from "antd";
import deleteicon from "../assets/delete-.svg";
import axios from "axios";
// import edit from "../assets/edit-1.svg";

function Candetect({ title }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  const handleClearImage = () => {
    setImageUrl(null);
    setErrorMessage("");
  };

  const handleDeleteImage = () => {
    setImageUrl(null);
  };

  const handleSubmit = () => {
    if (!imageUrl) {
      setErrorMessage("Please upload an Image");
      console.log("Please upload an Image");
    } else {
      const formData = new FormData();
      formData.append("image", imageUrl);

      axios
        .post("http://ct.rayi.in:5002/predicttest", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          alert(response.data.message);
        })
        .catch((error) => {
          if (error.response) {
            // Request was made and server responded with a status code
            console.error("Error Response Data:", error.response.data);
            console.error("Error Response Status:", error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received:", error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
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
        <h1>{title}</h1>
      </div>

      <p style={{ marginLeft: "40px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
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
            {imageUrl ? null : (
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

            {imageUrl && (
              <div className="image-preview">
                <img
                  src={imageUrl}
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
            <textarea className="text-area" placeholder="" />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Candetect;
