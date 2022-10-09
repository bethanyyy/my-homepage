import React from "react";
import Image from "next/image";
import Link from "next/link";
import { workDetails } from "../../lib/work_data";
import {
  WorkDetailsContainer,
  BackButtonStyle,
  LeftSection,
  RightSection,
  Thumbnail,
  Description,
  MainSection,
  BackButtonShadow,
  BackButtonContainer,
  DescriptionDetails,
  LiveSiteButton,
} from "../../styles/WorkDetailsStyle";
import { EmphasizedText } from "../../styles/SharedStyle";
import { workDetailsTransition } from "../../lib/animation";

import BackButton from "../../public/BackButton2.svg";

const WorkDetails = ({ workData }) => {
  const { title, description, thumbnail_static } = workData;
  return (
    <WorkDetailsContainer
      variants={workDetailsTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BackButtonContainer>
        <BackButtonStyle>
          <Link href={"/work"}>
            <BackButton />
          </Link>
        </BackButtonStyle>
        <BackButtonShadow></BackButtonShadow>
      </BackButtonContainer>
      <MainSection>
        <LeftSection>
          <h2>
            <EmphasizedText>{title}</EmphasizedText>
          </h2>
          <Thumbnail>
            <Image
              src={thumbnail_static}
              alt="calculator"
              layout="fill"
              objectFit="cover"
            />
          </Thumbnail>
        </LeftSection>
        <RightSection>
          <Description>{description}</Description>
          <DescriptionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              harum voluptas explicabo, blanditiis officia possimus ducimus
              doloremque praesentium fugiat? Numquam.
            </p>
            <p>
              <span>Stack:</span> Nextjs, Styled Comopnent, Framer Motion,
              Threejs
            </p>
          </DescriptionDetails>
          <Link href={"#"}>
            <LiveSiteButton>
              Live Site <span>&#62;</span>
            </LiveSiteButton>
          </Link>
        </RightSection>
      </MainSection>
    </WorkDetailsContainer>
  );
};

export const getStaticPaths = async () => {
  const paths = workDetails.map((work) => ({
    params: {
      slug: work.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const workData = workDetails.find((item) => item.slug === slug);

  return {
    props: { workData },
  };
};

export default WorkDetails;
