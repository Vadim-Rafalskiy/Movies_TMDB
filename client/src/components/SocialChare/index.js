import { Box, Paper, Stack, styled } from '@mui/material';

import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share';

import { EmailIcon, FacebookIcon, TelegramIcon, ViberIcon, WhatsappIcon } from 'react-share';

const SocialShare = ({ title, link, ...props }) => {
  return (
    <Stack sx={{ p: '5px', gap: '10px' }} {...props}>
      <EmailShareButton subject={'Hove a nice list with movies: ' + String(title)} url={link}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <FacebookShareButton hashtag="#movieList" url={link}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TelegramShareButton url={link}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
      <ViberShareButton url={link}>
        <ViberIcon size={32} round={true} />
      </ViberShareButton>
      <WhatsappShareButton url={link}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </Stack>
  );
};

export default SocialShare;
