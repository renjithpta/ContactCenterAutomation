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
 *  Updated:    2/11/19 7:41 PM
 *  Copyright (c) 2014-2019. All rights reserved.
 */

import React from 'react'
import PropTypes from 'prop-types'

import navigation from 'lib/navigation'

class PDropDown extends React.Component {
  componentDidMount () {
    navigation.notifications()
  }

  componentDidUpdate () {
    navigation.notifications()
  }

  render () {
    const { title, titleHref, topOffset, leftOffset, rightComponent, children, footerComponent } = this.props
    return (
      <div id={this.props.id} className={'p-dropdown'} data-top-offset={topOffset} data-left-offset={leftOffset}>
        <div className='actions'>
          {titleHref && <a href={titleHref}>{title}</a>}
          {!titleHref && <span style={{ paddingLeft: '5px' }}>{title}</span>}
          {rightComponent && <div className='uk-float-right'>{rightComponent}</div>}
        </div>
        <div className='items close-on-click'>
          <ul>{children}</ul>
        </div>
        {footerComponent && (
          <div
            className={'bottom-actions actions uk-float-left'}
            style={{ borderBottom: 'none', borderTop: '1px solid rgba(0,0,0,0.2)' }}
          >
            {footerComponent}
          </div>
        )}
      </div>
    )
  }
}

PDropDown.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleHref: PropTypes.string,
  topOffset: PropTypes.string,
  leftOffset: PropTypes.string,
  rightComponent: PropTypes.element,
  footerComponent: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

PDropDown.defaultProps = {
  topOffset: '0',
  leftOffset: '0'
}

export default PDropDown
