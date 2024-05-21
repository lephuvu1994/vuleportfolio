import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import canonCustomLayer from "../../Assets/Projects/canonCustomLayer.png";
import FPTWebsite from "../../Assets/Projects/FPTWebsite.png";
import MetarushWebsite from "../../Assets/Projects/MetarushWebsite.png";
import MoonvilleFarms from "../../Assets/Projects/MoonvilleFarms.png";
import MyriaAirdrop from "../../Assets/Projects/Myria_Airdrop.png";
import MyriaMarketplace from "../../Assets/Projects/myria_marketplace.png";
import MyriaCoreSDKAndDocument from "../../Assets/Projects/myria-core-sdk-and-document.png";
import Softbank from "../../Assets/Projects/Softbank.png";
import Spacebar from "../../Assets/Projects/Spacebar.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={canonCustomLayer}
              isBlog={false}
              title="Canon USA"
              description="Custom layer to verify for the order on MOM, using NestJS to process hundreds of thousands of order per day, RabbitMQ to resolve message from the microservice( many storage ) and S21 and MOM"
              productLink="https://www.usa.canon.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={canonCustomLayer}
              isBlog={false}
              title="Canon USA"
              description="The client has required to build e-commerce website systems for American market.The system with extremely high magnitude and complexity using complicated and difficult technologies such as Magento Commerce Cloud, Adobe Experience Manager(AEM), Coveo Cloud. Magento to build ecommerce websites, AEM to manage website content. And coveo cloud is provides an AI platform to analyze and observe user behavior to suggest products to users."
              productLink="https://www.usa.canon.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Softbank}
              isBlog={false}
              title="Softbank"
              description=""
              productLink="hhttps://www.softbank.jp/en/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spacebar}
              isBlog={false}
              title="Spacebar"
              description=""
              productLink="https://spacebar.th/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FPTWebsite}
              isBlog={false}
              title="FPT Website"
              description=""
              productLink="https://fpt.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MoonvilleFarms}
              isBlog={false}
              title="Moonville Farms"
              description=""
              productLink="https://moonvillefarms.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyriaMarketplace}
              isBlog={false}
              title="Myria Marketplace"
              description=""
              productLink="https://myria.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyriaAirdrop}
              isBlog={false}
              title="Myria Airdrop"
              description=""
              productLink="https://myria.com/airdrop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MetarushWebsite}
              isBlog={false}
              title="Myria Metarush"
              description=""
              productLink="https://metarush.myria.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyriaCoreSDKAndDocument}
              isBlog={false}
              title="Myria Core SDK and Document"
              description="Document for the myria-core-sdk. Using docusaurous to build UI for the documentation"
              productLink="https://docs.myria.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyriaMarketplace}
              isBlog={false}
              title="Myria UI Sample"
              isShowRepo={true}
              ghLink={"https://github.com/MyriaPlatform/myria-react-samples"}
              description="React-based application for client interactions with Myria Core SDK."
              productLink="https://myria-react-samples.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyriaMarketplace}
              isBlog={false}
              title="Myria Sample interact with myria-core-sdk"
              isShowRepo={true}
              ghLink={"hhttps://github.com/MyriaPlatform/myria-ts-samples"}
              description="Typescript application that shows how to interact with the myria-core-sdk library. The code samples provided in this project will help create new Myria projects, launch collections, and mint assets on the Myria Chain."
              productLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;