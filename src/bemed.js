import React from 'react'

import addModificators from './addModificators'

const bemed = (blockName) => {

  const b = (elementName, tagName = 'div') => {

    let className = elementName ? `${ blockName }__${ elementName }` : blockName

    const BemedComponent = ({mod, ...rest}) => {

      className = addModificators(className, mod)

      return React.createElement(tagName, {...rest, className})
    }

    BemedComponent.displayName = className

    return BemedComponent
  }

  b.span = b.bind(null, null, 'span')

  return b
}

export default bemed
