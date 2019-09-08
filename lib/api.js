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

async function getBlogsWithNotInclude(filter) {
  console.log("filter which came in:", filter);
  const entries = await client.getEntries({
    content_type: "post",
    "sys.id[ne]": filter
  });
  const { items } = entries;

  const listing = items.map(b => {
    const { title, slug } = b.fields;
    return { title, slug };
  });

  return listing;
}

export default {
  getPosts,
  getPostBySlug,
  getBlogsWithNotInclude
};