import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [utcTime, setUtcTime] = useState("");

  useEffect(() => {
    const updateUtcTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString());
    };

    updateUtcTime(); // initial run
    const interval = setInterval(updateUtcTime, 1000); // update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="profile-card">
      {/* Left Column */}
      <div className="profile-left">
        <div className="profile-picture" data-testid="profilePicture">
          <img src="./assets/bdgre.jpg" alt="Profile Picture" />
        </div>
        <div className="profile-name">
          <h1 data-testid="fullName">Grace Olumuyiwa</h1>
          <h3 data-testid="jobTitle">Frontend Developer</h3>
        </div>
      </div>

      {/* Right Column */}
      <div className="profile-right">
        <p data-testid="shortBio">
          Passionate frontend developer skilled in React, TypeScript, and WordPress. Dedicated to creating intuitive and dynamic user interfaces.
        </p>
        <p data-testid="currentLocation">
          <strong>Location:</strong> Ibadan, Nigeria
        </p>
        <p data-testid="emailAddress">
          <strong>Email:</strong> gracogenolu30@gmail.com
        </p>

        <div className="profile-social" data-testid="socialLinks">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i> Twitter
          </a>
        </div>

        <div className="profile-footer">
          <p data-testid="currentTimeUTC">
            <strong>Current UTC Time:</strong> <span>{utcTime}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
