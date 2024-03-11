// Home.js
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";

import cancer from "../assets/pink.svg";
import count from "../assets/count.svg"; 

const { Header: AntHeader, Sider, Content } = Layout;

const Home = () => {
 const [collapsed, setCollapsed] = useState(true);
 const {
    token: { colorBgContainer, borderRadiusLG },
 } = theme.useToken();
 const navigate = useNavigate();

 const handleClickCardOne = () => {
    navigate("/BreastCancerDetector-app");
 };

 const handleClickCardTwo = () => {
   navigate("/Pipe");
   
 };

 return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Avatar
          icon={<AntDesignOutlined />}
        />
      </Sider>
      <Layout>
        <AntHeader
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
        
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </AntHeader>

        <Content
          style={{
            margin: "px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         
          <div className="card" onClick={handleClickCardOne}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120%"
              height="120%"
              viewBox="0 0 800 800"
            >
              <rect fill="#000000" width="100%" height="100%" />
              <g fillOpacity="1">
                <circle fill="#000000" cx="400" cy="400" r="600" />
                <circle fill="#230046" cx="400" cy="400" r="500" />
                <circle fill="#2f0052" cx="400" cy="400" r="400" />
                <circle fill="#3b075e" cx="400" cy="400" r="300" />
                <circle fill="#48156a" cx="400" cy="400" r="200" />
                <circle fill="#552277" cx="400" cy="400" r="100" />
              </g>
            </svg>
            <img src={cancer} alt="Cancer" className="compass" />
            <div className="card__content">
              <p className="card__title">Breast Cancer Detector</p>
              <p className="card__description">
                Detect breast cancer early with our advanced screening
                technology. Get accurate results and timely treatment for better
                outcomes.
              </p>
            </div>
          </div>


          
         
         
        </Content>
      </Layout>
    </Layout>
 );
};

export default Home;
