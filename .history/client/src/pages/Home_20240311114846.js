// Home.js
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useNavigate} from "react-router-dom";
import "./home.css"
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


         <div className="card" onClick={handleClickCardTwo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="669"
              height="669"
              viewBox="0 0 800 800"
            >
              <rect fill="#330033" width="800" height="800" />
              <g fill="none" stroke="#404" strokeWidth="1.9">
                <path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63" />
                <path d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764" />
                <path d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880" />
                <path d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382" />
                <path d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269" />
              </g>
              <g fill="#505">
                <circle cx="769" cy="229" r="8" />
                <circle cx="539" cy="269" r="8" />
                <circle cx="603" cy="493" r="8" />
                <circle cx="731" cy="737" r="8" />
                <circle cx="520" cy="660" r="8" />
                <circle cx="309" cy="538" r="8" />
                <circle cx="295" cy="764" r="8" />
                <circle cx="40" cy="599" r="8" />
                <circle cx="102" cy="382" r="8" />
                <circle cx="127" cy="80" r="8" />
                <circle cx="370" cy="105" r="8" />
                <circle cx="578" cy="42" r="8" />
                <circle cx="237" cy="261" r="8" />
                <circle cx="390" cy="382" r="8" />
              </g>
            </svg>
            <img src={count} alt="Counting" className="count" />
            <div className="card__content">
              <p className="card__title">Pipe Counting</p>
              <p className="card__description">
                Our pipe counting detector uses advanced algorithms to
                accurately count and monitor pipes in industrial settings.
                Improve efficiency and reduce errors with automated pipe
                detection.
              </p>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
 );
};

export default Home;
