import React from 'react'
import bemed from './bemed'
import renderer from 'react-test-renderer'

describe('Block', () => {

  it('should create block', () => {
    const Block = bemed('block-name')()
    const component = renderer.create(<Block/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should create block with custom tag (SPAN)', () => {
    const Block = bemed('block-name').span()
    const component = renderer.create(<Block/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

})

describe('Element', () => {

  it('should create element', () => {
    const b = bemed('block-name')
    const Element = b('element')
    const component = renderer.create(<Element/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should create element with custom tag (SPAN)', () => {
    const b = bemed('block-name')
    const Element = b.span('element')
    const component = renderer.create(<Element/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

})

describe('Modifier', () => {

  it('should add string modifier for block', () => {
    const b = bemed('block-name')
    const Element = b('element')
    const component = renderer.create(<Element mod="cool"/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should add few string modifiers for block', () => {
    const b = bemed('block-name')
    const Element = b('element')
    const component = renderer.create(<Element mod="cool feel"/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should add truly modifier for block', () => {
    const b = bemed('block-name')
    const Element = b('element')
    const component = renderer.create(<Element mod={{cool: true}}/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should not add falsy modifier for block', () => {
    const b = bemed('block-name')
    const Element = b('element')
    const component = renderer.create(<Element mod={{cool: false}}/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should add valued modifier for block', () => {
    const b = bemed('block-name')
    const Element = b.span('element')
    const component = renderer.create(<Element mod={{cool: 'lala'}}/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

})
