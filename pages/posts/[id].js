import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Layout from "../../components/layout";
import day from "dayjs";
import ErrorPage from "next/error";
import BlogListing from "../../components/blogs";
import api from "../../lib/api";

const Page = blog => {
 
  // Loading a page which has been unpublished!
  if (blog.fields == undefined) {
    return <ErrorPage statusCode="404" />;
  }
  
  const { title, date, body, hero } = blog.fields;
  const { id: ident } = blog.sys;
  const src = (hero) ? hero.fields.file.url : "";
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
      <img src={`${src}?w=1440&h=600`} />
      <BlogListing filter={ident} />
      <div id="body" className="mt-8" dangerouslySetInnerHTML={getMarkup()} />
    </Layout>
  );
};

Page.getInitialProps = async context => {
  const { id } = context.query;
  const { items, total } = await api.getPostBySlug('post', id);
  return total == 1 ? items[0] : {}
}

export default Page;
