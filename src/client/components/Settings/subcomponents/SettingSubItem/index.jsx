/*
 *       .                             .o8                     oooo
 *    .o8                             "888                     `888
 *  .o888oo oooo d8b oooo  oooo   .oooo888   .ooooo.   .oooo.o  888  oooo
 *    888   `888""8P `888  `888  d88' `888  d88' `88b d88(  "8  888 .8P'
 *    888    888      888   888  888   888  888ooo888 `"Y88b.   888888.
 *    888 .  888      888   888  888   888  888    .o o.  )88b  888 `88b.
 *    "888" d888b     `V88V"V8P' `Y8bod88P" `Y8bod8P' 8""888P' o888o o888o
 *  ========================================================================
 *  Author:     Chris Brame
 *  Updated:    1/20/19 4:46 PM
 *  Copyright (c) 2014-2019. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';

class SettingSubItem extends React.Component {
    render() {
        const { title, subTitle, component, tooltip } = this.props;
        return (
            <div>
                <div className="uk-float-left uk-width-1-2">
                    <h5 style={{fontWeight: 'normal'}}>{title}
                        { tooltip &&
                        <i className="material-icons"
                           style={{color: '#888',
                               fontSize: '14px',
                               cursor: 'pointer',
                               lineHeight: '3px',
                               marginLeft: '4px'}}
                           data-uk-tooltip title={tooltip}>error</i>
                        }
                    </h5>
                    <p className="uk-text-muted">{subTitle}</p>
                </div>
                <div className="uk-float-right uk-width-1-2 uk-clearfix"
                     style={{position: 'relative', marginTop: '5px'}}>
                    <div className="uk-width-1-1 uk-float-right">
                        {component}
                    </div>
                </div>
            </div>
        );
    }
}

SettingSubItem.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    tooltip: PropTypes.string,
    component: PropTypes.element
};

export default SettingSubItem;