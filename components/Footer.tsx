import dynamic from 'next/dynamic';
import {
  FaHome,
  FaTwitter,
  FaDiscord,
  FaShip,
  FaInfinity,
  FaInstagram,
} from 'react-icons/fa';

import Container from './Container';
import NextLink from './NextLink';
import projectConfig from '../config/projectConfig';

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});

const getCurrentYear = () => new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center py-8">
          <div>
            © {getCurrentYear()} {projectConfig.nftName}
          </div>

          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <ReactTooltip
              id="footer"
              place="top"
              type="dark"
              effect="solid"
              textColor="#e2e8f0"
            />
            <NextLink
              href="/"
              aria-label="Home"
              data-tip="Home"
              data-for="footer"
              className="bg-red-700 hover:bg-black rounded-full p-2"
            >
              <FaHome />
            </NextLink>
            <a
                href={projectConfig.twitterUrl}
                aria-label={`${projectConfig.nftName} on Twitter`}
                rel="noopener noreferrer"
                target="_blank"
                data-tip="Twitter"
                data-for="header"
                className="bg-red-700 hover:bg-black rounded-full p-2"
              >
                <FaTwitter />
              </a>
              <a
                href={projectConfig.discordUrl}
                aria-label={`${projectConfig.nftName} on Discord`}
                rel="noopener noreferrer"
                target="_blank"
                data-tip="Twitter"
                data-for="header"
                className="bg-red-700 hover:bg-black rounded-full p-2"
              >
                <FaDiscord />
              </a>
              <a
              href='https://www.instagram.com/soulsnfts/'
              aria-label={`${projectConfig.nftName} on Instagram`}
              rel="noopener noreferrer"
              target="_blank"
              data-tip="Instagram"
              data-for="footer"
              className="bg-red-700 hover:bg-black rounded-full p-2"
            >
              <FaInstagram />
            </a>
              <a
                href={projectConfig.openseaCollectionUrl}
                aria-label={`${projectConfig.nftName} on OpenSea`}
                rel="noopener noreferrer"
                target="_blank"
                data-tip="OpenSea"
                data-for="header"
                className="bg-red-700 hover:bg-black rounded-full p-2"
              >
                <FaShip />
              </a>
          
          </div>
        </div>
      </Container>
    </footer>
  );
}
