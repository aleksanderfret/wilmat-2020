import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image'
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  if (!data) {
    return null;
  }

  const { seo } = data.yaml;

  return (
    <Layout>
      <SEO {...seo} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div>{/* <Image /> */}</div>
      <Link to="/o-firmie-wilmat-wroclaw/">o firmie</Link>
    </Layout>
  );
};

export const query = graphql`
  {
    yaml(page: { eq: "home" }) {
      seo {
        title
        keywords
        description
      }
    }
  }
`;

export default IndexPage;
