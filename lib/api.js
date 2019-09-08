import client from "./client";

const getPosts = async (contentType = "post", limit = 10) => {
  const entries = await client.getEntries({
    content_type: contentType,
    limit
  });
  return entries.items;
};

const getPostBySlug = async (contentType = "post", slug = "") => {
  const q = {
    content_type: contentType,
    "fields.slug": slug
  };

  const entries = await client.getEntries(q);
  return entries;
};

export default {
    getPosts,
    getPostBySlug
};
