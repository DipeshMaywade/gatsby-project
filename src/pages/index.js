import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "../awic/css/main.css";
import Feature from "../components/feature";
import Header from "../components/header";
import Tranding from "../components/tranding";
import Footer from "../components/footer";
import Story from "../components/stories";
import Recent from "../components/recent_story";

export default function Home({ data }) {
  const stories = data.cms.CMS_Stories.data;

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
        <title>Blog</title>
      </Helmet>
      <Header />
      <Tranding stories={stories} />
      <Feature stories={stories} />
      <Story stories={stories} />
      <Recent stories={stories} />
      <Footer />
    </>
  );
}

export const query = graphql`
  query MyQuery {
    cms {
      CMS_Stories(page: 0, size: 400) {
        data {
          id
          agency_id
          content
          description
          image
          is_private
          slug
          status
          pub_date
          categories {
            id
            name
          }
          sub_title
          title
          user_id
        }
      }
    }
  }
`;
