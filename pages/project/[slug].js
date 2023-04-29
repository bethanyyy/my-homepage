import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
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

const PrevIcon = styled.div`
  position: absolute;
  top: 100%;
  left: calc(50%);
  transform: translateX(-130%) translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  border: solid 2px var(--clr-neutral-900);
  background-color: var(--clr-neutral-100);

  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2px;
  padding-bottom: 2px;
  color: var(--clr-neutral-900);
  font-weight: bold;

  cursor: pointer;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const NextIcon = styled.div`
  position: absolute;
  top: 100%;
  right: calc(50%);
  transform: translateX(130%) translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  border: solid 2px var(--clr-neutral-900);
  background-color: var(--clr-neutral-100);

  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2px;
  padding-bottom: 2px;
  color: var(--clr-neutral-900);
  font-weight: bold;

  cursor: pointer;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const GalleryGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--size-300);

  @media (min-width: 768px) {
    /* grid-template-columns: repeat(3, 1fr); */
  }
`;

const Card = styled.div`
  border-radius: 8px;
  border: 4px solid;
  border-image: url("/BorderImage.svg") 9%;
  background-color: var(--clr-secondary);
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  border: 4px solid;
  border-image: url("/BorderImage.svg") 9%;
  /* height: 130px; */

  @media only screen and (min-width: 1536px) {
    height: 170px;
  }
`;

const WorkDetails = ({ workData }) => {
  const {
    title,
    description,
    details,
    stack,
    tools,
    gallery,
    link,
    thumbnail_static,
  } = workData;

  const [[imageIdx, direction], setImageIdx] = useState([0, 0]);
  const paginate = (newDirection) => {
    const nxtIdx = (imageIdx + newDirection + gallery.length) % gallery.length;
    setImageIdx([nxtIdx, newDirection]);
  };

  return (
    <WorkDetailsContainer
      variants={workDetailsTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BackButtonContainer>
        <BackButtonStyle>
          {/* <Link href={"/project"}> */}
          <BackButton />
          {/* </Link> */}
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
              src={gallery ? gallery[imageIdx] : thumbnail_static}
              alt="calculator"
              layout="fill"
              objectFit="cover"
            />
            {gallery && (
              <PrevIcon
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(-1);
                }}
              >
                &#60;
              </PrevIcon>
            )}
            {gallery && (
              <NextIcon
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(1);
                }}
              >
                &#62;
              </NextIcon>
            )}
          </Thumbnail>
        </LeftSection>
        <RightSection>
          <Description>{description}</Description>
          <DescriptionDetails>
            {details && <p>{details}</p>}
            {stack && (
              <p>
                <span>Stack:</span> {stack}
              </p>
            )}
            {tools && (
              <p>
                <span>Tools:</span> {tools}
              </p>
            )}

            {/* <GalleryGrid>
              {gallery &&
                gallery.map((image, i) => {
                  return (
                    // <Card>
                    <ImageWrapper key={i}>
                      <Image
                        src={image.src}
                        alt={image.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </ImageWrapper>
                    // </Card>
                  );
                })}
            </GalleryGrid> */}
          </DescriptionDetails>
          <Link href={link ? link : "#"}>
            <LiveSiteButton>
              Link <span>&#62;</span>
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
