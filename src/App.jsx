import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { IoLogoReact } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { MdPhoneCallback } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import image from "./assets/basam.jpeg";
import { FaBluesky } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLichess } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
const skills = [
  { name: "HTML5", color: "#E34F26" }, // foundational and strong
  { name: "CSS3", color: "#5777f6ff" }, // creative styling wizard
  { name: "JavaScript (ES6+)", color: "#f7df1e" }, // logic master, very capable
  { name: "TypeScript", color: "#3178C6" }, // newer layer, but launching fast
  { name: "ReactJS", color: "#61dafb" }, // your power tool, real passion
  { name: "React Router", color: "linear-gradient(to right,#007ACC ,#FF6700)" },
  { name: "Nextjs", color: "#f8f9fa" },
  { name: "Nodejs", color: "#339933" },
  { name: "Redux", color: "#764ABC" },
  { name: "Axios", color: " #5A29E4" },
  { name: "Git", color: "#Fa7970" },
  { name: "SASS", color: "#cf649a" }, // clever with structure and nesting
];

const App = () => {
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <>
      <div ref={contentRef} className="container">
        <p className="date-details">
          {" "}
          print date {new Date().toLocaleDateString()}
        </p>
        <button onClick={handlePrint} className="print-btn">
          Print
        </button>
        <img src={image} alt="basam's photo" className="picture" />
        <div className="left-column">
          <h1 className="name">basam mohamed</h1>
          <h3 className="title">
            <IoLogoReact
              style={{
                fontSize: "16",
                paddingRight: "3px",
                // background: "blue",
                position: "relative",
                top: "4px",
              }}
            />
            React.Js Developer
            <FaCheckCircle className="varified" />
          </h3>
          <p className="email">
            <MdAttachEmail
              style={{
                fontSize: "16px",
                marginTop: "1px",
                paddingRight: "2px",
              }}
            />
            <a href="mailto:basabasam@hotmail.com">
              basabasam@hotmail.com <FiExternalLink />
            </a>
          </p>
          <p className="phone">
            <MdPhoneCallback
              style={{ marginTop: "3px", paddingRight: "2px" }}
            />
            <a href="tel:+971557657992">
              (+971)-557657992 <FiExternalLink className="external-link" />
            </a>
          </p>
          <p className="location">
            <ImLocation2 /> Dubai UAE
          </p>

          <h2 className="skills-title">KEY SKILLS</h2>

          <ul className="skills-container">
            {skills.map((skill) => {
              return (
                <li
                  className="skill"
                  key={skill.name}
                  style={{
                    background: skill.color,
                  }}
                >
                  <span>{skill.name}</span>
                </li>
              );
            })}
          </ul>
          <div>
            <h2>Soft Skills / Traits</h2>
            <ul className="softskills-ul">
              <li>Blind Typing (75) WPM</li>
              <li>Detail-Orinted </li>
              <li>Resource Debugger </li>
              <li>Problem Solver </li>
              <li>Visual Thinker </li>
              <li>Entrepreneurial Minder</li>
              <li>Active Listener</li>
              <li>Cross-cultural Sensitivity</li>
              <li>Fast Learner</li>
              <li>UI/UX Awareness</li>
              <li>Analytical Thinker</li>
            </ul>
          </div>

          <div className="languages">
            <h2>Languages i speak</h2>
            <div className="two-languages">
              <p> [Arabic]</p>
              <p>[English] </p>
              <p>[Broken french]</p>
            </div>
            <div className="two-languages second">
              <p className="arabic"> هلا </p>
              <p className="english"> Hello </p>
              <p className="french">
                Bonj<span className="broken">our</span>
              </p>
            </div>
          </div>
        </div>
        <div className="right-column">
          <section>
            <h1 className="overview">Overview</h1>
            <p className="overview-text">
              I’m a frontend developer with a passion for crafting responsive,
              scalable, and visually engaging web applications using ReactJS.
              With a solid foundation in HTML5, CSS3,JavaScript (ES6+), and
              TypeScript I specialize in turning complex ideas into intuitive
              user interfaces that balance functionality and design.
            </p>
          </section>
          <section>
            <h1 className="experience">Experience</h1>
            <div>
              <h2 className="experience-heading">Web Developer - Freeelance</h2>
              <p className="experience-description">Remote / Jan 2024</p>
              <h3 className="experience-highlight">Highlights:</h3>
              <ul className="experience-list">
                <li>
                  Built a modular e-commerce web application using ReactJs,
                  showcasing building materials across distinct categories
                  (plumbing, Electrical, paint & Cement) with dynamic product
                  components.
                </li>
                <li>
                  Designed and implemented a custom cart management system using
                  Contex API, supporting item quantities pricing logic and state
                  persistance.
                </li>
                <li>
                  Engineered a payment confirmation workflow via uploads and
                  manual transactions proof collection tailored to Sudan's
                  banking limitations.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="experience-heading">Self-Initiated Portfolio</h2>
              <p className="experience-description">
                Personal Learning / 2024 2025
              </p>
              <h3 className="experience-highlight">Highlights:</h3>
              <ul className="experience-list">
                <li>
                  Architected reusable React Components for resume pages and
                  portfolio showcase
                </li>
                <li>
                  Enhanced design with advanced typography customization, grid
                  layouts and dynamic styling principles
                </li>
                <li>
                  Demonstrated resourceful problem-solving by debugging
                  system-level issues and optimizing performance across devices
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h1 className="education-primary-heading">Education</h1>
            <div className="edu-one">
              <h3 className="education-secondary-heading">
                B.A Library & Information Science
              </h3>
              <p className="education-university-name">
                Neelain University - Khartoum Sudan / 2009 - 2013
              </p>
            </div>
            <div className="edu-two">
              <h3 className="education-secondary-heading">
                Frontend Developer Career Path
              </h3>
              <p className="education-university-name">
                Scrimba Coding Platform - Online / 2024 - 2025
              </p>
            </div>
            <div className="edu-three">
              <h3 className="education-secondary-heading">
                Certified Full Stack Developer
              </h3>
              <p className="education-university-name">
                FreeCodeCamp Coding platform - Online / 2024 - 2025
              </p>
            </div>
            <div>
              <h3 className="education-secondary-heading">
                Technical Support Engineer
              </h3>
              <p className="education-university-name">
                Coursera Coding Platform - Online / 2024 - current
              </p>
            </div>
            {/* <div>
              <h3 className="education-secondary-heading">
                Online Courses From
              </h3>
              <p className="education-university-name">
                Brad Traversy , Jonas Schmedttman & Bob Ziroll
              </p>
            </div> */}
          </section>
          <footer>
            <a href="https://bsky.app/profile/basammohamed.bsky.social">
              <FaBluesky className="bluesky" />
            </a>

            <a href="https://github.com/BasamLive">
              <FaGithub className="github" />
            </a>
            <a href="https://lichess.org/@/BasamRov">
              <SiLichess className="lichess" />
            </a>
            <a href="https://x.com/mohamed_basam">
              <FaXTwitter className="twitter" />
            </a>
            <a href="https://linkedin.com/in/basam249">
              <FaLinkedin className="linkedin" />
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
