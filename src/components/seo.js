import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Seo = ({ author, description, keywords, lang, title, meta }) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:creator',
        content: author,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords,
      },
    ].concat(meta)}
  />
);

Seo.defaultProps = {
  author: 'Wilmat s.c',
  lang: 'en',
  meta: [],
};

Seo.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, content: PropTypes.string }),
  ),
  title: PropTypes.string.isRequired,
};

export default Seo;
