import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Layout from "../../components/layout";
import day from "dayjs";
import ErrorPage from "next/error";
import BlogListing from "../../components/blogs";
import api from "../../lib/api";

export const config = { amp: 'hybrid' }

const Page = props => {
  // Loading a page which has been unpublished!
  if (props.blog.fields == undefined) {
    return <ErrorPage statusCode="404" />;
  }

  const { blog, blogs } = props;

  const { title, date, body, hero } = blog.fields;
  const src = hero ? hero.fields.file.url : "";
  const fdate = day(date).format("DD MMMM YYYY");

  const getMarkup = () => {
    return { __html: documentToHtmlString(body) };
  };

  return (
    <Layout>
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="mt-2 mb-2">
        <strong>Published:</strong> {fdate}
      </p>
      <picture>
        <source srcSet={`${src}?w=1440&h=600&fm=webp`} type="image/webp"></source>
        <img src={`${src}?w=1440&h=600`} />
      </picture>
      
      <BlogListing blogs={blogs} />
      <div id="body" className="mt-8" dangerouslySetInnerHTML={getMarkup()} />
    </Layout>
  );
};

Page.getInitialProps = async ({ query }) => {
  const { id } = query;
  const { items, total } = await api.getPostBySlug("post", id);

  if (total == 1) {
    const blog = items[0];
    const blogs = await api.getBlogsWithNotInclude(blog.sys.id);
    return { blog, blogs };
  }

  return {};
};

export default Page;
