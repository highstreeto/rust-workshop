import { graphql, Page, PageProps } from "gatsby";
import * as React from "react";
import Slides from "../components/slides";

interface SlidesQuery {
  allFile: {
    edges: Array<{
      node: {
        markdown: {
          html: string;
          frontmatter: {
            slide: number;
          };
        };
      };
    }>;
  };
}

const IndexPage = ({ data }: PageProps<SlidesQuery>) => {
  const slides = data.allFile.edges.map((e) => ({
    html: e.node.markdown.html,
    nr: e.node.markdown.frontmatter.slide,
  }));

  return <Slides slides={slides}></Slides>;
};

export default IndexPage;

export const pageQuery = graphql`
  query SlidesQuery {
    allFile(
      filter: { sourceInstanceName: { eq: "slides" }, extension: { eq: "md" } }
      sort: { fields: childMarkdownRemark___frontmatter___slide }
    ) {
      edges {
        node {
          markdown: childMarkdownRemark {
            html
            frontmatter {
              slide
            }
          }
        }
      }
    }
  }
`;
