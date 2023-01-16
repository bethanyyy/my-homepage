import React from "react";
import WorkCard from "../../components/WorkCard";

import { EmphasizedText } from "../../styles/SharedStyle";
import { WorkContainer, WorkGrid } from "../../styles/WorkStyle";

import { workDetails } from "../../lib/work_data";
import { pageTransition } from "../../lib/animation";

const Project = () => {
  return (
    <WorkContainer
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>
        <EmphasizedText>Projects</EmphasizedText>
      </h2>
      <WorkGrid>
        {workDetails.map((work, i) => {
          return <WorkCard key={i} workDetails={work} />;
        })}
      </WorkGrid>
    </WorkContainer>
  );
};

export default Project;
