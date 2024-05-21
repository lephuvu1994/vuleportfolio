import React from "react";
import { Row } from "react-bootstrap";
import GitLabCalendar from "./GitlabCalendar"

function Gitlab() {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code Gitlab</strong>
      </h1>
      <GitLabCalendar
        username="vu.le9453019"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Gitlab;