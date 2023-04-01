// App.js
// ShinyCard

import React from "react";
import styled from "styled-components";
import "./styles.css";

import coverImage from "./images/card-image.png";
import avatarImage from "./images/card-avatar.png";
import backgroundImage from "./images/card-background.jpg";

function App() {
  return (
    <Container>
      <Card>
        <CoverImage src={coverImage} alt="Cover" />
        <CardContent>
          <Title>Build beautiful apps with GPT4 and Midjourney</Title>
          <Divider />
          <Subtitle>40 sections - 5 hours</Subtitle>
          <Text>
            Hands-on course teaching about all the techniques for turning a
            Midjourney inspiration into a real working design with interactions
            in Figma.
          </Text>
          <Author>
            <Avatar src={avatarImage} alt="Author Avatar" />
            <AuthorName>Taught by Meng To</AuthorName>
          </Author>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;

const Card = styled.div`
  width: 360px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.1), 0px 30px 60px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  padding: 20px;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 10px;
`;

const CardContent = styled.div`
  padding-top: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 590;
  font-size: 17px;
  line-height: 20px;

  color: #ffffff;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  margin: 12px 0;
`;

const Subtitle = styled.h3`
  font-style: normal;
  font-weight: 510;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 8px;
`;

const Text = styled.p`
  margin: 0 0 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  /* or 185% */

  color: rgba(255, 255, 255, 0.7);
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
`;

const AuthorName = styled.span`
  font-style: normal;
  font-weight: 510;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  color: rgba(255, 255, 255, 0.8);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #333;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;