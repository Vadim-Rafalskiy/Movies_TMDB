import { Stack } from '@mui/material';
import { SOCIAL_BUTTON_SIZE } from '../../const';
import PropTypes from 'prop-types'

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
        <Stack {...props}>
            <EmailShareButton subject={'Hove a nice list with movies: ' + String(title)} url={link}>
                <EmailIcon size={SOCIAL_BUTTON_SIZE} round={true} />
            </EmailShareButton>
            <FacebookShareButton hashtag="#movieList" url={link}>
                <FacebookIcon size={SOCIAL_BUTTON_SIZE} round={true} />
            </FacebookShareButton>
            <TelegramShareButton url={link}>
                <TelegramIcon size={SOCIAL_BUTTON_SIZE} round={true} />
            </TelegramShareButton>
            <ViberShareButton url={link}>
                <ViberIcon size={SOCIAL_BUTTON_SIZE} round={true} />
            </ViberShareButton>
            <WhatsappShareButton url={link}>
                <WhatsappIcon size={SOCIAL_BUTTON_SIZE} round={true} />
            </WhatsappShareButton>
        </Stack>
    );
};

SocialShare.propTypes={
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default SocialShare;
