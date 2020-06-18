import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  if (!data) {
    return null;
  }

  const { seo } = data.yaml;
  return (
    <Layout>
      <SEO {...seo} />
      <h1>O Wilmat</h1>
      <h2>Doświadczenie</h2>
      <p>
        Działamy na rynku instalacji już od 2003 roku. Przez ten czas zdobyliśmy
        bogate doświadczenie, realizując różnorodne zadania dla wielu firm,
        instytucji oraz klientów indywidualnych.
      </p>
      <Link to="/">Go to home</Link> <br />
    </Layout>
  );
};

export const query = graphql`
  {
    yaml(page: { eq: "about" }) {
      seo {
        title
        keywords
        description
      }
    }
  }
`;

export default IndexPage;
