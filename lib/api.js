import client from "./client";

const getPosts = async (contentType = "post", limit = 6) => {
  const entries = await client.getEntries({
    content_type: contentType,
    order: '-fields.date',
    limit
  });
  return entries.items;
};

const getCopy = async (key = 'homepage.', limit = 20) => {
  const entries = await client.getEntries({
    content_type: 'resource',
    order: 'fields.key',
    'fields.key[match]': key,
    limit
  });

  // let mcopy = [];
  // entries.items.forEach(f => {
  //   mcopy[f.fields.key] = f.fields.value
  // })

  // return mcopy;
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
  // console.log("filter which came in:", filter);
  const entries = await client.getEntries({
    content_type: "post",
    "sys.id[ne]": filter,
    order: '-fields.date',
    limit: 5
  });
  const { items } = entries;

  const listing = items.map(b => {
    const { title, slug } = b.fields;
    const { id } = b.sys
    return { title, slug, id };
  });

  return listing;
}

async function getLocations() {
  const entries = await client.getEntries({
    content_type: "location"
  });
  return entries
}

export default {
  getPosts,
  getCopy,
  getPostBySlug,
  getBlogsWithNotInclude,
  getLocations
};
