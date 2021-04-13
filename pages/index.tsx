import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../lib/api';
import Layout from '../components/layout';
import Container from '../components/container';
import PostPreview from '../components/post-preview';
import { Post } from '../types/Post';

type Props = {
  allPosts: Post[];
}

export default function IndexPage({ allPosts }: Props): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>loonskai.com</title>
      </Head>
      <Container>
        {allPosts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            coverImage={post.coverImage}
            slug={post.slug}
            date={post.date}
          />
        ))}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'slug',
    'excerpt',
    'coverImage',
    'date',
  ]);
  return {
    props: { allPosts },
  };
};