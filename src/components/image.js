import React from 'react'
import Img from 'gatsby-image'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from 'gatsby'

const Image = ({
  imageName,
  altText
}) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(imageName);
      });
      if (!image) { return null; }
      
      const imageSizes = image.node.childImageSharp.fluid;
      return (
        <Img
          alt={altText}
          fluid={imageSizes}
        />
      );
    }}
  />
);

Image.propTypes = {
  imageName: PropTypes.string,
  altText: PropTypes.string
}

export default Image;
