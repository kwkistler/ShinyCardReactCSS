import React from "react";
import styled from "styled-components";
import "./styles.css";
import coverImage from "./images/card-image.png";
import avatarImage from "./images/card-avatar.png";

function App() {
  return (
    <Card>
      <CoverImage src={coverImage} alt="Cover" />
      <CardContent>
        <Title>Title of the Card</Title>
        <Divider />
        <Subtitle>Subtitle of the Card</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          convallis odio nec facilisis.
        </Text>
        <Author>
          <Avatar src={avatarImage} alt="Author Avatar" />
          <AuthorName>John Doe</AuthorName>
        </Author>
      </CardContent>
    </Card>
  );
}

export default App;

const Card = styled.div`
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const CoverImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 12px 0;
`;

const Subtitle = styled.h3`
  font-size: 18px;
  margin: 0 0 8px;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0 0 12px;
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
  font-size: 14px;
`;
