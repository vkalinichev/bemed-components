import React from 'react'
import tags from './tags'
import addModificators from './addModificators'

function BemedComponent(tagName, className, options, {mod, innerRef, ...rest}) {

  if (options && options.mod && Array.isArray(options.mod)) {
    mod = mod || {}
    options.mod.forEach( _mod => {
      mod[_mod] = rest[_mod]
      delete rest[_mod]
    })
  }

  return React.createElement(
    tagName,
    {
      ...rest,
      ref: innerRef,
      className: addModificators(className, mod) + (rest.className ? ' ' + rest.className : '')
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
   * @param {string|undefined} elementName
   * @param {object} options
   * @returns {Component}
   * @returns {function} Genetator with custom Component
   */
  function b(tagName, elementName, options) {

    if (options === undefined && typeof elementName === 'object') {
      options = elementName
      elementName = undefined
    }

    if (typeof tagName !== 'function' && elementName === undefined && tags.indexOf(tagName) === -1 ) {
      elementName = tagName
      tagName = 'div'
    }

    const isBlock = elementName === undefined
    const className = isBlock ? blockName : `${ blockName }__${ elementName }`

    const Component = BemedComponent.bind(null, tagName, className, options)
    Component.displayName = className
    return Component
  }

  for (let i = 0; i < tags.length; i++) {
    b[tags[i]] = b.bind(null, tags[i])
  }

  return b
}

export default bemed
