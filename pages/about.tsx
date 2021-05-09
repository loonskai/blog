import Head from 'next/head';
import { Container } from '../components/container';
import { Layout } from '../components/layout';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>loonskai.com</title>
      </Head>
      <Container>
        <div className="self-center flex-1 text-center">
          <h1 className="font-serif text-4xl md:text-6xl">loonskai.com</h1>
          <p className="font-sans">This resource is currently in progress.</p>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
