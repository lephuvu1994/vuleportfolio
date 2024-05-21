import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div className="d-flex flex-column justify-content-between gap-3 h-full">
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          {props.isShowRepo ? (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          ) : null}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.productLink && (
          <Button
          variant="primary"
          href={props.productLink}
          target="_blank"
          >
            <CgWebsite /> &nbsp;
            {"Product"}
          </Button>
        )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
