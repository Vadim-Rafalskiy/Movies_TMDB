// export { default as I18nProvider } from './provider';

import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { LOCALES } from '../../const';
import messages from '../../messages';

const Provider = ({ children, locale = LOCALES.ENGLISH }) => (
    <IntlProvider locale={locale} textComponent={Fragment} messages={messages[locale]}>
        {children}
    </IntlProvider>
);

Provider.displayName = 'I18nProvider';

Provider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    locale: PropTypes.oneOf(Object.values(LOCALES)),
};

Provider.defaultProps = {
    locale: LOCALES.ENGLISH,
};

export default Provider;
