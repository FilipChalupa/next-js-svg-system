import React from 'react'

/**
 * General components
 */
import Icon from '../Icon'

/**
 * Styled components
 */
import { IconWrapper } from './styled'

/**
 * Check for external link.
 *
 * @param {string} path
 * @returns {boolean}
 */
export const isExternal = (path) => {
  const rules = new RegExp('^(?:[a-z]+:)?//', 'i')
  return rules.test(path)
}

/**
 * Renders icon with text.
 *
 * @param {string} src
 * @param {boolean} iconOnLeft
 * @param {boolean} iconOnRight
 * @param children
 * @param {object} options
 * @returns {*}
 * @constructor
 */
export const IconWithText = ({
  src,
  iconOnLeft = false,
  iconOnRight = false,
  children,
  options = {},
}) => (
  <>
    {src && iconOnLeft &&
      <IconWrapper iconOnLeft>
        <Icon src={src} options={options} />
      </IconWrapper>
    }
    <span>
      {children}
    </span>
    {src && iconOnRight &&
      <IconWrapper iconOnRight>
        <Icon src={src} options={options} />
      </IconWrapper>
    }
  </>
)
