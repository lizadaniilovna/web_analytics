import React from 'react';
import { withRouter } from 'react-router-dom';
 
class GoogleAnalytics extends React.Component {
    componentWillUpdate ({ location, history }) {
        const gtag = window.gtag;
 
        if (location.pathname === this.props.location.pathname) {
            return;
        }
 
        if (history.action === 'PUSH' &&
            typeof(gtag) === 'function') {
            gtag('config', 'UA-256873916-1', {
                'page_title': document.title,
                'page_location': window.location.href,
                'page_path': location.pathname
            });
        }
    }
 
    render () {
        return null;
    }
}
 
export const GoogleAnalyticsRouting = withRouter(GoogleAnalytics);