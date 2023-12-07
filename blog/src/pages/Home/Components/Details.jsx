/* eslint-disable react/prop-types */
import styled from "styled-components";

const Details = ({ data }) => {
  console.log(data);
  const { title, publishedAt, author, content } = data;

  return (
    <CardContainer>
      <Title>{title}</Title>
      <Author>Author: {author}</Author>
      <PublishedAt>Published on: {publishedAt}</PublishedAt>
      <Content>
        {content}
      </Content>
    </CardContainer>
  );
};

export default Details;

const CardContainer = styled.div`
  border-radius: 8px;
  padding: 8px 16px;
  width: 100%;
`;

const Title = styled.h2`
  line-height: 1px;
`;

const PublishedAt = styled.p`
  color: #666;
  font-size: 0.8em;
  line-height: 1px;
`;

const Author = styled.p`
  font-weight: bold;
`;

const Content = styled.p`
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
`;
