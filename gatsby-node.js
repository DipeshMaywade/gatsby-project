const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query query1 {
      cms {
        CMS_Stories(page: 0, size: 400) {
          data {
            id
            slug
          }
        }
      }
    }
  `);

  data.cms.CMS_Stories.data.forEach((story) => {
    actions.createPage({
      path: "/story/" + story.slug,
      component: path.resolve("./src/templates/post.js"),
      context: { slug: story.id },
    });
  });
};
