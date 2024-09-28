import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap
import './HowItWorks.css'
const HowItWorks = ({ steps }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect hook to track screen width for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile view for width <= 768px
    };

    // Initial check
    handleResize();

    // Event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup the listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="how-it-works py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">How it Works</h2>
          <p9 className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p9>
        </div>

        <div className={`row ${isMobile ? "text-center" : "text-start"}`}>
          {/* Map through the steps data */}
          {steps.map((step, index) => (
            <div
              className={`col-12 col-md-4 mb-4`}
              key={index}
            >
              {/* Apply specific color to the second card */}
              <div
                className="step-box p-4"
                style={{ 
                  backgroundColor: index === 1 ? "#025595" : "white", // Set the background color for the second step
                  color: index === 1 ? "white"  : "black", // Change text color for the second step
                  borderRadius: "8px"
                ,
                  width: "360px", // Set fixed width
                
                }}
              >
                <div className="icon mb-3">
                  <img src={step.icon} alt={step.title} className="icon-img" /> {/* Icon from props */}
                </div>
                <div className="title-h">
                <h4 className="title">{step.title}</h4>
                </div>
                <p>{step.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
