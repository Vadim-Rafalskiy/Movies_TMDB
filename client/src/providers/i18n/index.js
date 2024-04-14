// export { default as I18nProvider } from './provider';

import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { LOCALES } from '../../const';
import messages from '../../messages';
import { flatten } from 'flat';

const Provider = ({ children, locale = LOCALES.ENGLISH }) => (
    <IntlProvider locale={locale} textComponent={Fragment} messages={flatten(messages[locale])}>
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
