import { getGlobalData } from '../../utils/global-data';
import { getPostBySlug } from '../../utils/mdx-utils';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import CustomLink from '../../components/CustomLink';

export default function PostPage({ globalData, post }) {
  return (
    <Layout>
      <SEO
        title={`${post.title} - ${globalData.name}`}
        description={post.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl font-semibold dark:text-white text-center mb-12">
            {post?.title}
          </h1>
          {post?.description && (
            <p className="text-xl mb-4">{post?.description}</p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark">
            {post?.body}
          </article>
        </main>  
      </article>
      <CustomLink 
        as={`/`} 
        href={`/`}
        className="mb-0 m-10 px-5 py-2 font-medium opacity-70 hover:opacity-90 rounded-md backdrop-blur-lg bg-cyan-900 dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition-all border border-gray-800 dark:border-white border-opacity-10 hover:border-opacity-30 dark:border-opacity-10 dark:hover:border-opacity-30"
      >
        Voltar
      </CustomLink>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const post = await getPostBySlug(params.id);
  const globalData = getGlobalData();

  return { props: { globalData, post } };
};