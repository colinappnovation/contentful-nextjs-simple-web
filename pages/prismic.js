import Post from "../components/post";
import Layout from "../components/layout";
import { client } from "../lib/prismic-configuration";
import Prismic from "prismic-javascript";

const HomePage = props => {
  return (
    <Layout>
      <h1 className="uppercase text-4xl text-gray-800">Insights</h1>
      <p className="text-xl mb-5 text-gray-600">
        To understand the future you have to be grounded in the now. We guide
        our clients as their industries evolve with the changing digital
        landscape.
      </p>
      <div className="flex flex-wrap mb-4">
        {props.results.map(p => {
          const { data } = p.data.blogger;

          return (
            <Post
              title={p.data.title[0].text}
              date={p.data.date}
              slug={p.slugs[0]}
              hero={p.data.hero}
              standfirst={p.data.standfirst[0].text}
              blogger={{
                fullname: data.fullname[0].text,
                jobtitle: data.jobtitle,
                profilepicture: data.profilepicture
              }}
              key={p.id}
            />
          );
        })}
      </div>
    </Layout>
  );
};

HomePage.getInitialProps = async () => {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    {
      orderings: "[my.post.date desc]",
      fetchLinks: [
        "author.fullname",
        "author.jobtitle",
        "author.profilepicture"
      ]
    }
  );
  return posts;
};

export default HomePage;
