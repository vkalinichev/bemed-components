import React from 'react'
import tags from './tags'

import addModificators from './addModificators'

const bemed = (blockName) => {

  const b = function b (elementName, tagName = 'div') {

    if ( typeof elementName === 'function' ) return b.bind(null, null, elementName)

    let className = elementName ? `${ blockName }__${ elementName }` : blockName

    const BemedComponent = ({mod, ...rest}) => {

      className = addModificators(className, mod)

      return React.createElement(tagName, {...rest, className})
    }

    BemedComponent.displayName = className

    return BemedComponent
  }

  for (let i = 0; i < tags.length; i++ ) {
    b[tags[i]] = b.bind(null, null, tags[i])
  }

  return b
}

export default bemed
