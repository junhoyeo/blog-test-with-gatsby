import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

interface IPostTemplateProps {
  pageContext: {
    cover: string;
    date: string;
    html: string;
    title: string;
  };
}

interface ICoverProps {
  children: React.ReactElement | React.ReactElement[];
  src: string;
}

const Cover = ({ children, src }: ICoverProps) => {
  const CoverContainer = styled.div`
    height: 360px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${src});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      filter: brightness(0.8);
    }
  `;

  const CoverContent = styled.div`
    position: absolute;
    margin: 1rem 3.5rem;
    bottom: 0;
  `;

  return (
    <CoverContainer>
      <CoverContent>
      { children }
      </CoverContent>
    </CoverContainer>
  );
};

const Post = styled.div`
  padding: 2rem 3.5rem;
  padding-top: 1.5rem;
`;

const PostDate = styled.span`
  font-size: 1.5rem;
  color: #f1f3f5;
`;

const PostTitle = styled.h1`
  margin: 0;
  font-weight: 800;
  font-size: 3.2rem;
  margin-bottom: 1.5rem;
  width: 100%;
  word-break: break-word;
  line-height: 1.3;
  color: white;
`;

const PostArticle = styled.div`
  h1, h2, h3, h4, h5, h6 {
    margin: 0.5rem 0;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  a {
    color: #4263eb;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  p {
    line-height: 1.5;
    font-size: 1rem;
    margin: 0.3rem 0;
  }

  blockquote {
    margin: 0;
    padding-left: 0.8rem;
    border-left: 0.25em solid #ced4da;
    color: #868e96;
  }

  img {
    width: 100%;
    margin: auto;
    display: flex;
  }
`;

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(({ pageContext }) => {
  const { cover, date, html, title } = pageContext;

  return (
    <Layout>
      <Cover src={cover}>
        <PostDate>{date}</PostDate>
        <PostTitle>{title}</PostTitle>
      </Cover>
      <Post>
        <PostArticle dangerouslySetInnerHTML={{ __html: html }} />
      </Post>
    </Layout>
  );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
