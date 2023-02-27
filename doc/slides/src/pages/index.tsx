import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Slides from "../components/slides";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const slides = data.allFile.edges.map((e) => ({
    html: e.node.markdown?.html ?? "",
    nr: e.node.markdown?.frontmatter?.slide ?? 0,
  }));

  return <Slides slides={slides}></Slides>;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    allFile(
      filter: { sourceInstanceName: { eq: "slides" }, extension: { eq: "md" } }
      sort: { childMarkdownRemark: { frontmatter: { slide: ASC } } }
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
