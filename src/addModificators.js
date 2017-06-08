export default (elementName, modificators) => {

  let result = ''

  if (modificators !== undefined) {
    if (typeof modificators === 'string') {
      result = modificators.split(/\s+/).map(m => `${ elementName }_${ m }`).join(' ')
    } else if (typeof modificators === 'object') {
      result = Object.keys(modificators).reduce((memo, key) => {
        const value = modificators[key]
        if (value === false || value === undefined) return memo
        if (value === true) return memo + ' ' + elementName + '_' + key
        return memo + ' ' + elementName + '_' + key + '_' + value
      }, '')
    }
  }

  return result ? elementName + ' ' + result : elementName

}
