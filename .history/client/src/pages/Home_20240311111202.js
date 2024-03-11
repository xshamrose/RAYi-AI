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
         
          


          
         
         
        </Content>
      </Layout>
    </Layout>
 );
};

export default Home;
