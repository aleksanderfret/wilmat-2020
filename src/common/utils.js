export const findImage = (images, name) =>
  images.find(({ node }) => node.base === name).node.childImageSharp.fluid;
