import React from "react";
import WorkCard from "../../components/WorkCard";

import { EmphasizedText } from "../../styles/SharedStyle";
import { WorkContainer, WorkGrid } from "../../styles/WorkStyle";

import { workDetails } from "../../lib/work_data";
import { pageTransition } from "../../lib/animation";

const Work = () => {
  return (
    <WorkContainer
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>
        <EmphasizedText>Work</EmphasizedText>
      </h1>
      <WorkGrid>
        {workDetails.map((work, i) => {
          return <WorkCard key={i} workDetails={work} />;
        })}
      </WorkGrid>
    </WorkContainer>
  );
};

export default Work;
