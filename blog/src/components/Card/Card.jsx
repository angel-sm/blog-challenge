/* eslint-disable react/prop-types */
import styled from 'styled-components';

const BlogCard = ({ data, onClick }) => {
  const { title, publishedAt, author, content = "" } = data

  return (
    <CardContainer onClick={onClick}>
      <Title>{title}</Title>
      <Author>Author: {author}</Author>
      <PublishedAt>Published on: {publishedAt}</PublishedAt>
      <Content>{content.length > 70 ? `${content.slice(0, 70)}...` : content}</Content>
    </CardContainer>
  );
};

export default BlogCard;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px 16px;
  width: 100%;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
`;
