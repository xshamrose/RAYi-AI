// Home.js
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

import cancer from "../assets/pink.svg";
import count from "../assets/count.svg";

const { Header: AntHeader, Sider, Content } = Layout;

const Home = () => {
 const [collapsed, setCollapsed] = useState(true);
 const {
    token: { colorBgContainer, borderRadiusLG },
 } = theme.useToken();
 const navigate = useNavigate();
 const location = useLocation(); // Use useLocation to get the current route

 const handleClickCardOne = () => {
    navigate("/BreastCancerDetector-app", {
      state: {
        title: "Breast Cancer Detector",
        subtitle: "Detect breast cancer early with our advanced screening technology. Get accurate results and timely treatment for better outcomes.",
      },
    });
 };

 const handleClickCardTwo = () => {
    navigate("/Pipe", {
      state: {
        title: "Pipe Counting",
        subtitle: "Our pipe counting detector uses advanced algorithms to accurately count and monitor pipes in industrial settings. Improve efficiency and reduce errors with automated pipe detection.",
      },
    });
 };

 // Use the location state to conditionally render the header
 const headerTitle = location.state?.title || "Default Title";
 const headerSubtitle = location.state?.subtitle || "Default Subtitle";

 return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Avatar icon={<AntDesignOutlined />} />
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
          <Header
            title={headerTitle}
            subtitle={headerSubtitle}
          />
          {/* Card components */}
          <div className="card" onClick={handleClickCardOne}>
            {/* Card content for Breast Cancer Detector */}
          </div>

          <div className="card" onClick={handleClickCardTwo}>
            {/* Card content for Pipe Counting */}
          </div>
        </Content>
      </Layout>
    </Layout>
 );
};

export default Home;
