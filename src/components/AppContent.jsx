import React from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import { useOutletContext } from "react-router-dom";
import AboveTheFold from "./AboveTheFold";
import Skills from "./Skills";

const Container = styled.section`
  margin: 3rem 8px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    /* padding: 50px 50px; */
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

export default function AppContent() {
  const props = useOutletContext();
  const about = props.about;
  const skills = props.skills;
  const projects = props.projects;
  const title = "Developer Portfolio";
  return (
    <div>
      <Container>
        <AboveTheFold title={title} />
      </Container>
      <Container>
        <AboutMe about={about} />
      </Container>
      <Container>
        <Skills skills={skills} />
      </Container>
      <Container>
        <Projects projects={projects} />
      </Container>
    </div>
  );
}
