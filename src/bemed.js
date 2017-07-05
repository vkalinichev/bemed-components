import React from 'react'
import tags from './tags'
import addModificators from './addModificators'

function BemedComponent(tagName, className, {mod, ...rest}) {
  return React.createElement(
    tagName,
    {
      ...rest,
      className: addModificators(className, mod)
    })
}

/**
 * Creates Block context and returns Block-generator
 * @param blockName
 * @returns {b} Generator of Blocks and Elements
 */
function bemed(blockName) {

  /**
   * Generator of Blocks and Elements
   * @param {string} tagName - (optional) custom tag for Block or Element
   * @param {string} elementName
   * @returns {Component}
   * @returns {function} Genetator with custom Component
   */
  function b(tagName, elementName) {

    if (typeof tagName === 'function') {
      return b.bind(null, tagName, elementName)
    }

    if (elementName === undefined && tags.indexOf(tagName) === -1 ) {
      elementName = tagName
      tagName = 'div'
    }

    const isBlock = elementName === undefined
    const className = isBlock ? blockName : `${ blockName }__${ elementName }`

    const Component = BemedComponent.bind(null, tagName, className)
    Component.displayName = className

    return Component
  }

  for (let i = 0; i < tags.length; i++) {
    b[tags[i]] = b.bind(null, tags[i])
  }

  return b
}

export default bemed
