import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, ThumbnailWrapper } from "../styles/WorkCardStyle";

const WorkCard = ({ workDetails }) => {
  const { title, slug, description, thumbnail_static, thumbnail_gif } =
    workDetails;
  console.log(thumbnail_gif);

  const [hover, setHover] = useState(false);

  return (
    <Link href={`work/${slug}`}>
      <Card
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ThumbnailWrapper>
          <Image
            src={hover ? thumbnail_gif : thumbnail_static}
            alt="calculator"
            layout="fill"
            objectFit="cover"
          />
        </ThumbnailWrapper>
      </Card>
    </Link>
  );
};

export default WorkCard;
