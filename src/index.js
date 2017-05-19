import React from 'react'
import PropTypes from 'prop-types'

const isFunction = (target) => {
 return target && ({}).toString.call(target) === '[object Function]'
}

const Mayre = (props) => {
  const canRender = isFunction(props.when) ? props.when() : props.when

  return canRender ? <props.of {...props.with} /> : null
}

Mayre.defaultProps = {
  with: {},
}

Mayre.propTypes = {
  of: PropTypes.func,
  when: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func
  ]),
  with: PropTypes.object,
}

export default Mayre