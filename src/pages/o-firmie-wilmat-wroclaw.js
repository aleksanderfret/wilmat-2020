import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { findImage } from '../common/utils';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  if (!data) {
    return null;
  }

  const { seo, title, about } = data.yaml;
  const { edges: images } = data.allFile;

  return (
    <Layout>
      <SEO {...seo} />
      <h1>{title}</h1>
      <section>
        <div>
          <h2>{about.title}</h2>
          <figure>
            <Img
              alt={about.image.alt}
              fluid={findImage(images, about.image.name)}
            />
            <figcaption>{about.image.description}</figcaption>
          </figure>
        </div>
      </section>
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
      page
      seo {
        description
        keywords
        title
      }
      header
      scope {
        content {
          header
          text
        }
        header
        image {
          alt
          description
          name
        }
      }
      about {
        header
        image {
          alt
          name
          description
        }
        content {
          header
          text
        }
      }
    }
    allFile(
      filter: {
        extension: { regex: "/(jpg|png)/" }
        relativeDirectory: { eq: "content/about" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSetWebp
              srcSet
              srcWebp
              originalImg
            }
          }
          base
        }
      }
    }
  }
`;

export default IndexPage;
