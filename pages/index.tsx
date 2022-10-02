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
          <p className="text-center text-xl">
          Souls is 4,444 hand drawing collection with unique traits and details, Doxxed founder, Unique utilities including:
          </p>
          <br></br>
          <p className="text-center text-xl">
          1- ⛩ 2 other deeds lands raffle giveaway to the holders who mints or secondary buy 2 or more souls nfts
          </p>
          <p className="text-center text-xl">
          2- ⛩ 0.06 Eth giveaway to the holders who mints the 4 1:1 souls nfts
          </p>
          <p className="text-center text-xl">
          3- ⛩ LFGGG
          </p>
          <br></br>
          <p className="text-center text-xl">
          WL Mint: 15.10 - 0.006Eth
          </p>
          <p className="text-center text-xl">
          OG mint: 16.10 - FREE MINT
          </p>
          <p className="text-center text-xl">
          Public mint: 17.10 - 0.009eth
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
