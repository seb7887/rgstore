import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PostTemplate = ({ data: post }) => (
  <Layout>
    <SEO title={post.markdownRemark.frontmatter.title} />
    <div>
      <h1>{post.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
    </div>
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default PostTemplate;
