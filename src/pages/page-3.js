import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`;

const ThirdPage = () => (
  <Layout>
    <SEO title="Page Three" />
    <h1>Image File Data</h1>
    <StaticQuery
      query={getImageData}
      render={data => (
        <table>
          <thead>
            <tr>
              <th>Relative Path</th>
              <th>Size</th>
              <th>Extension</th>
              <th>Birth Time</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map((edge, index) => (
              <tr key={index}>
                <td>{edge.node.relativePath}</td>
                <td>{edge.node.size}</td>
                <td>{edge.node.extension}</td>
                <td>{edge.node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    />
    <Link to="/">Go back to homepage</Link>
  </Layout>
);

export default ThirdPage;
