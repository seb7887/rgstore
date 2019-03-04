import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ThirdPage = () => (
  <Layout>
    <SEO title="Page Three" />
    <h1>Page 3</h1>
    <Link to="/">Go back to homepage</Link>
  </Layout>
);

export default ThirdPage;
