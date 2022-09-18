import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import projectConfig from '../config/projectConfig';
import topImage from '../public/assets/1920x600.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{projectConfig.nftName}</title>
      </Head>

      <Image src={topImage} alt={projectConfig.nftName} />

      <div className="bg-black py-8">
        <Prose>
          <h1 className="text-5xl font-bold mb-2"></h1>
          <p className="text-xl">
          Souls is 4,444 hand drawing collection with unique traits and details, Doxxed founder, Unique utilities including Other deeds, lands giveaway and to witness the northern lights views. The 2 other deeds lands raffle giveaway chance are for the holders of 2 or more souls nfts. 0.2 Eth giveaway to the holder of 1 of the 4 .1:1 nfts
          </p>
        </Prose>
      </div>

      <div className="bg-black py-8">
        <Prose>
          <Minting />
        </Prose>
      </div>

    </Layout>
  );
};

export default Home;
