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
        subtitle: "Enter the Histopathological image of the breast to predict the diagnosis.",
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
          <div className="card" >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#000000' width='2000' height='1500'/><defs><circle  stroke='#D60' vector-effect='non-scaling-stroke' id='a' fill='none' stroke-width='5' r='315'/><use id='f' href='#a' stroke-dasharray='100 100 100 9999'/><use id='b' href='#a' stroke-dasharray='250 250 250 250 250 9999'/><use id='e' href='#a' stroke-dasharray='1000 500 1000 500 9999'/><use id='g' href='#a' stroke-dasharray='1500 9999'/><use id='h' href='#a' stroke-dasharray='2000 500 500 9999'/><use id='j' href='#a' stroke-dasharray='800 800 800 800 800 9999'/><use id='k' href='#a' stroke-dasharray='1200 1200 1200 1200 1200 9999'/><use id='l' href='#a' stroke-dasharray='1600 1600 1600 1600 1600 9999'/></defs><g transform='translate(1000 750)' stroke-opacity='1'><g  transform='rotate(0 0 0)' ><circle  fill='#D60' fill-opacity='1' r='10'/><g  transform='rotate(0 0 0)'><use href='#f' transform='scale(.1) rotate(50 0 0)' /><use href='#f' transform='scale(.2) rotate(100 0 0)' /><use href='#f' transform='scale(.3) rotate(150 0 0)' /></g><g  transform='rotate(0 0 0)'><use href='#b' transform='scale(.4) rotate(200 0 0)' /><use href='#z' transform='scale(.5) rotate(250 0 0)' /></g><g  id='z' transform='rotate(0 0 0)'><g  transform='rotate(0 0 0)'><use href='#b'/><use href='#b' transform='scale(1.2) rotate(90 0 0)' /><use href='#b' transform='scale(1.4) rotate(60 0 0)' /><use href='#e' transform='scale(1.6) rotate(120 0 0)' /><use href='#e' transform='scale(1.8) rotate(30 0 0)' /></g></g><g  id='y' transform='rotate(0 0 0)'><g  transform='rotate(0 0 0)'><use href='#e' transform='scale(1.1) rotate(20 0 0)' /><use href='#g' transform='scale(1.3) rotate(-40 0 0)' /><use href='#g' transform='scale(1.5) rotate(60 0 0)' /><use href='#h' transform='scale(1.7) rotate(-80 0 0)' /><use href='#j' transform='scale(1.9) rotate(100 0 0)' /></g></g><g  transform='rotate(0 0 0)'><g  transform='rotate(0 0 0)'><g  transform='rotate(0 0 0)'><use href='#h' transform='scale(2) rotate(60 0 0)'/><use href='#j' transform='scale(2.1) rotate(120 0 0)'/><use href='#j' transform='scale(2.3) rotate(180 0 0)'/><use href='#h' transform='scale(2.4) rotate(240 0 0)'/><use href='#j' transform='scale(2.5) rotate(300 0 0)'/></g><use href='#y' transform='scale(2) rotate(180 0 0)' /><use href='#j' transform='scale(2.7)'/><use href='#j' transform='scale(2.8) rotate(45 0 0)'/><use href='#j' transform='scale(2.9) rotate(90 0 0)'/><use href='#k' transform='scale(3.1) rotate(135 0 0)'/><use href='#k' transform='scale(3.2) rotate(180 0 0)'/></g><use href='#k' transform='scale(3.3) rotate(225 0 0)'/><use href='#k' transform='scale(3.5) rotate(270 0 0)'/><use href='#k' transform='scale(3.6) rotate(315 0 0)'/><use href='#k' transform='scale(3.7)'/><use href='#k' transform='scale(3.9) rotate(75 0 0)'/></g></g></g></svg>
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
