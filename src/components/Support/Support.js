import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Support() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={10} style={{ paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }} className="project-heading">
              App <strong className="purple">Support</strong>
            </h1>
            <div style={{ textAlign: "left", color: "white", padding: "20px", backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "10px", marginTop: "20px", lineHeight: "1.6" }}>
              <p>
                If you need assistance with the Sensa Smart app, please reach out to our support team. We are dedicated to helping you resolve any issues or answering any questions you might have regarding your smart home experience.
              </p>
              
              <h2 style={{ color: "#c770f0", marginTop: "30px" }}>Contact Information</h2>
              <ul>
                <li><strong>Email:</strong> vulewenlian94@gmail.com</li>
                <li><strong>Phone:</strong> +84 333 250 994 (Available Mon-Fri, 9am - 5pm ICT)</li>
                <li><strong>Address:</strong> Hanoi, Vietnam</li>
              </ul>

              <h2 style={{ color: "#c770f0", marginTop: "30px" }}>Frequently Asked Questions</h2>
              
              <h4 style={{ marginTop: "20px" }}>Q: How do I connect a new smart device to the app?</h4>
              <p>A: Open the app, go to the 'Home' or 'Devices' tab, and tap the '+' icon in the top right corner. Select the type of device you want to add and follow the on-screen pairing instructions. Ensure your device is in pairing mode and connected to the same Wi-Fi network.</p>
              
              <h4 style={{ marginTop: "20px" }}>Q: Why is my device showing as "Offline"?</h4>
              <p>A: Please check your internet connection and ensure the device is powered on. If the issue persists, try restarting your router, or resetting the device and pairing it again through the app.</p>

              <h4 style={{ marginTop: "20px" }}>Q: Can I share access to my home with family members?</h4>
              <p>A: Yes! Go to Settings {'>'} Home Management {'>'} Members, and tap 'Add Member'. You can invite them using their email address registered with our app.</p>

              <h4 style={{ marginTop: "20px" }}>Q: How do I create a Scene or Automation?</h4>
              <p>A: Navigate to the 'Automations' tab. Tap '+' to create a new automation. You can set conditions (e.g., 'When time is 6:00 PM') and actions (e.g., 'Turn on Living Room Lights').</p>

              <h4 style={{ marginTop: "20px" }}>Q: The app crashes when I try to view my camera stream. What should I do?</h4>
              <p>A: Please ensure you have granted the app permission to access the local network and that you are on the latest version of the app. If the problem continues, please send us an email with your device model and OS version.</p>

            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Support;
