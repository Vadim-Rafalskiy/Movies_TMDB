import { Box, Paper } from '@mui/material';

import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share';

import { EmailIcon, FacebookIcon, TelegramIcon, ViberIcon, WhatsappIcon } from 'react-share';

const SocialShare = () => {
  return (
    <Box>
      <EmailShareButton>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <FacebookShareButton>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TelegramShareButton>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
      <ViberShareButton>
        <ViberIcon size={32} round={true} />
      </ViberShareButton>
      <WhatsappShareButton>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </Box>
  );
};

export default SocialShare;
