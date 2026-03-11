import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Student</h4>
                <h5>Mohan Babu University</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science with a focus on Cybersecurity.
              Building projects at the intersection of web engineering,
              generative AI, and security.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Finalist</h4>
                <h5>Inter-College Hackathon · Mohan Babu University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Won second prize by collaborating with a team to develop a working
              prototype within a limited timeframe in a competitive hackathon
              environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Gen AI & Security Explorer</h4>
                <h5>Self-Directed Learning</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Exploring generative AI tools using LangChain and LangGraph.
              Building vulnerability intelligence platforms and browser-based
              tools while deepening cybersecurity knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
