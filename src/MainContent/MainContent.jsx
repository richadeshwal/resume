import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <div>
      <div className="pimg1">
        <div className="ptext">
          <strong className="border">Richa Deshwal</strong>
        </div>
      </div>
      <section className="section section-light">
        <h2>ABOUT ME</h2>
        <p className="description">
          With over 9 years of professional experience in technology consulting,
          working as Front End Engineer, Technical Lead, and Scrum Master, I
          have delivered over 25 web projects with clients from insurance,
          pharmaceutical, telecommunications, and manufacturing industry based
          globally, U.S. and Canada.
        </p>
        <p className="description">
          Beyond the skill and experience, I bring in the passion to deliver
          beyond my responsibilities. I believe in learning each day, to be
          better the next day. Please go through my website to find out more.
        </p>
      </section>
      <div className="pimg2">
        <div className="ptext">
          <span className="border trans">SKILLS & TOOLS</span>
        </div>
      </div>
      <section className="section section-dark">
        <span className="block">Scrum Master</span>
        <span className="block">Team Management</span>
        <span className="block">Web Development</span>
        <span className="block">Agile Methodology</span>
        <span className="block">HTML 5</span>
        <span className="block">Javascript</span>
        <span className="block">React</span>
        <span className="block">CSS3</span>
        <span className="block">Bootstrap</span>
        <span className="block">Responsive Web Development</span>
        <span className="block">Next JS</span>
        <span className="block">jQuery</span>
        <span className="block">Handlebars JS</span>
        <span className="block">Accessibility</span>
        <span className="block">SEO</span>
        <span className="block">Less</span>
        <span className="block">SASS</span>
        <span className="block">BEM methodology using SASS</span>
        <span className="block">Atlasssian Jira</span>
        <span className="block">HP Agile Manager</span>
        <span className="block">VersionOne</span>
      </section>
      <div className="pimg3">
        <div className="ptext">
          <span className="border trans">CONTACT</span>
        </div>
      </div>
      <section className="section section-light">Contact details here</section>
      <div className="img3-holder">
        <div className="pimg4">
          <div className="ptext">
            <strong className="border trans">
              SENIOR CONSULTANT AT DELOITTE CANADA
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
