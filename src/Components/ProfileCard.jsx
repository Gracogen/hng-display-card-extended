import { useEffect, useState } from "react";
import pic from '../assets/Profilepic.jpg'
import "../App.css";

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
          <img src={pic} alt="Profile Picture" />
        </div>
        <div className="profile-name">
          <h1 data-testid="fullName">Grace Olumuyiwa</h1>
          <h3 data-testid="jobTitle">Technololgy Inclined</h3>
        </div>
      </div>

      {/* Right Column */}
      <div className="profile-right">
        <p data-testid="shortBio">
          Well, I started the most-exhausting career journey in 2022, although, played with some HTML, CSS & JavaScript during Covid period, got the grasp of WordPress, gradually made my way to Software Development. <br /> <br />  <strong>Now I am:</strong> <br /> A Software Developer (Intermediate level) <br /> Cybersecurity Analyst <br /> Data Analyst <br /> Python Developer (Beginner) <br /> And Currently, undergoing my Masters in Business Computing at the University of Ibadan, Nigeria.<br /><br />
          <strong>My Slogan:</strong> "I don't know it because I never learnt it."
        </p>
        <p data-testid="currentLocation">
          <strong>Where can you find me:</strong> Ibadan, Nigeria
        </p>
        <p data-testid="emailAddress">
          <strong>Email:</strong> gracogenolu06@gmail.com
        </p>

        <div className="profile-social" data-testid="socialLinks">
          <a href="https://linkedin.in/grace-muyiwa1988" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/Gracogen" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a href="https://twitter.com/Code_With_Grace" target="_blank" rel="noopener noreferrer">
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
