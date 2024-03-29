import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-width: 0;

  /* ::after {
    content: "";
    height: var(--size-600);
  } */

  /* @media (min-width: 412px) {
    margin-bottom: var(--size-700);
  } */

  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
    padding-inline: var(--size-700);
  }

  @media (min-width: 1190px) {
    flex-direction: row;
    gap: var(--size-400);
  }
`;

export const ThumbnailSection = styled.div`
  flex-basis: 40%;
  min-width: 0;
  min-height: 0;

  @media (min-width: 768px) {
    flex-basis: 38%;
    /* flex-shrink: 0;
    flex-grow: 0; */
    height: 16rem;
  }

  @media (min-width: 1024px) {
    div {
      overflow: visible !important;
    }
    /* :hover {
      position: relative !important;
      > div {
        position: absolute !important;
        width: 130% !important;
        height: 130% !important;
        overflow: visible !important;
      }
    } */
  }

  @media (min-width: 1536px) {
    flex-basis: 38%;
    height: 20rem;
  }
`;

export const IntroductionSection = styled(motion.div)`
  flex: 1;
  min-height: 0;
  /* max-width: 55ch; */

  > *:last-child {
    margin-bottom: var(--size-500);
  }

  @media (min-width: 412px) {
    > *:last-child {
      margin-bottom: var(--size-600);
    }
  }
`;

export const Heading = styled.p`
  display: inline-block;
  font-family: var(--ff-accent);
  margin-bottom: var(--size-300);
  line-height: 2rem;

  @media (min-width: 412px) {
    padding-block: var(--size-400);
    padding-inline: var(--size-500);
    background-color: var(--clr-neutral-100);
    box-shadow: 5px 6px 0px var(--clr-secondary);
    border: solid 4px;
    border-color: var(--clr-neutral-400);
    border-radius: 1rem;
  }

  @media (min-width: 768px) {
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  @media (min-width: 1190px) {
    margin-inline-start: -1.7rem;
    margin-inline-end: -1rem;
  }

  > span:last-of-type {
    display: inline;
    /*@media (min-width: 768px) {
      display: block;
    }*/
  }

  a {
    display: inline-block;
    position: relative;
    z-index: 2;

    :before {
      content: "";
      position: absolute;
      bottom: 3px;
      left: 0;
      right: 0;
      width: 100%;
      height: 3px;
      background-color: var(--clr-body);
      z-index: -1;
      transition: width 0.5s;
    }

    :after {
      content: "";
      position: absolute;
      bottom: 3px;
      left: 0;
      right: 0;
      width: 100%;
      height: 3px;
      background-image: linear-gradient(
        to left,
        var(--clr-accent-secondary),
        var(--clr-accent)
      );
      clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
      transition: clip-path 0.5s;
      z-index: -1;
    }

    :hover:before {
      width: 0%;
    }

    :hover:after {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  width: 10rem;
  aspect-ratio: 1/1;
  border-radius: 100%;
  border: 0.2rem solid;
  border-color: #e8ab6e;
  overflow: hidden;
`;

export const CallToAction = styled.a`
  position: relative;
  width: 100%;
  text-align: right;
  display: block;

  button {
    cursor: pointer;

    padding-bottom: 5px;
    padding-inline: 8px;
    background-color: transparent;
    background-image: url("/LiveSiteButton.svg");
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    border: none;
    color: var(--clr-neutral-100);
    height: 2.5rem;
  }

  /* background-position: bottom; */

  /* position: relative;
  width: 10rem;
  height: 5rem;
  padding-bottom: 0.4rem;
  border: none;

  background-color: transparent;
  background-image: url("/LiveSiteButton.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;

  color: var(--clr-neutral-100); */

  /* display: inline-block;
  z-index: 2;

  :before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background-color: var(--clr-body);
    z-index: -1;
    transition: width 0.5s;
  }

  :after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    width: 100%;
    height: 3px;
    background-image: linear-gradient(
      to left,
      var(--clr-accent-secondary),
      var(--clr-accent)
    );
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    transition: clip-path 0.5s;
    z-index: -1;
  }

  :hover:before {
    width: 0%;
  }

  :hover:after {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  } */

  :hover {
    span {
      display: inline-block;
      transform: translateX(0.2rem);
    }
  }
`;
