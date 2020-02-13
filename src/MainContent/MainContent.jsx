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
        <h2 className="center">ABOUT ME</h2>
        <p className="description">
          With over 9 years of professional experience in technology consulting,
          working as Front End Engineer, Technical Lead, and Scrum Master, I
          have delivered over 25 web projects with clients from insurance,
          pharmaceutical, telecommunications, and manufacturing industries that
          are based globally, U.S. and Canada.
        </p>
        <p className="description">
          Beyond the skill and experience, I bring in the passion to deliver
          beyond my responsibilities. I believe in learning each day, to be
          better the next day. Please go through my website to find out more.
        </p>
      </section>
      <div className="pimg2">
        <div className="ptext">
          <strong className="border">SKILLS & TOOLS</strong>
        </div>
      </div>
      <section className="section section-dark center">
        <span className="block">Scrum Master</span>
        <span className="block">Team Management</span>
        <span className="block">Web Development</span>
        <span className="block">Agile Methodology</span>
        <span className="block">HTML 5</span>
        <span className="block">Javascript</span>
        <span className="block">React JS</span>
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
          <strong className="border">CONTACT</strong>
        </div>
      </div>
      <section className="section section-dark contact center">
        <a
          className="block"
          href="https://www.linkedin.com/in/richadeshwal/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Browse my LinkedIn profile
        </a>
        <a href="mailto:deshwalricha8@gmail.com" className="block">
          Send me an email
        </a>
      </section>
      <div className="pimgEducation">
        <div className="ptext">
          <strong className="border">EDUCATION & CERTIFICATIONS</strong>
        </div>
      </div>
      <section className="section education section-dark center">
        <div className="education-align">
          <span className="alignLeft">
            <strong>Bachelor of Technology - 2010 </strong>
            <div>(Computer Science and Engineering)</div>
            <div>73.2%</div>
            <div>India</div>
          </span>
          <span className="alignRight">
            <strong>Certified Scrum Master - 2019 </strong>
            <div>(Scrum Alliance)</div>
            <div>94%</div>
            <div>Canada</div>
          </span>
        </div>
      </section>
      <div className="pimg4">
        <div className="ptext">
          <strong className="border trans">
            SENIOR CONSULTANT AT DELOITTE CANADA
          </strong>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
