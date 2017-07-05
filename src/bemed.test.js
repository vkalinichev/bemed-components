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
    const Element = b()
    const component = renderer.create(<Element mod="cool"/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should add few string modifiers for block', () => {
    const b = bemed('block-name')
    const Element = b()
    const component = renderer.create(<Element mod="cool feel"/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should add truly modifier for block', () => {
    const b = bemed('block-name')
    const Element = b()
    const component = renderer.create(<Element mod={{cool: true}}/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should not add falsy modifier for block', () => {
    const b = bemed('block-name')
    const Element = b()
    const component = renderer.create(<Element mod={{cool: false}}/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should add valued modifier for block', () => {
    const b = bemed('block-name')
    const Element = b()
    const component = renderer.create(<Element mod={{cool: 'cool'}}/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should add string modifier for element', () => {
    const b = bemed('block-name')
    const Element = b('element')
    const component = renderer.create(<Element mod="cool"/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should add few string modifiers for element', () => {
    const b = bemed('block-name')
    const Element = b('element')
    const component = renderer.create(<Element mod="cool feel"/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should add truly modifier for element', () => {
    const b = bemed('block-name')
    const Element = b('element')
    const component = renderer.create(<Element mod={{cool: true}}/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should not add falsy modifier for element', () => {
    const b = bemed('block-name')
    const Element = b('element')
    const component = renderer.create(<Element mod={{cool: false}}/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should add valued modifier for element', () => {
    const b = bemed('block-name')
    const Element = b.span('element')
    const component = renderer.create(<Element mod={{cool: 'cool'}}/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  describe('Early configuration', () => {

    it('should add truly modifier for element', () => {
      const b = bemed('block-name')
      const Element = b('element', { mod: ['cool']})
      const component = renderer.create(<Element cool/>)
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('should add few truly modifiers for element', () => {
      const b = bemed('block-name')
      const Element = b('element', { mod: ['cool', 'feel']})
      const component = renderer.create(<Element cool feel/>)
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('should not add falsy modifier for element', () => {
      const b = bemed('block-name')
      const Element = b('element', { mod: ['cool']})
      const component = renderer.create(<Element cool={false}/>)
      expect(component.toJSON()).toMatchSnapshot()
    })

    it('should add valued modifier for element', () => {
      const b = bemed('block-name')
      const Element = b.span('element', { mod: ['cool']})
      const component = renderer.create(<Element cool='yes'/>)
      expect(component.toJSON()).toMatchSnapshot()
    })

  })

})

describe('Custom Components', () => {

  it('should create block', () => {
    const b = bemed('block-name')
    const FancyComponent = (props) => (
      <fancy-element {...props}>
        FancyComponent
      </fancy-element>
    )
    const Element = b(FancyComponent)
    const component = renderer.create(<Element/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should create element', () => {
    const b = bemed('block-name')
    const FancyComponent = (props) => (
      <fancy-element {...props}>
        FancyComponent
      </fancy-element>
    )
    const Element = b(FancyComponent, 'element')
    const component = renderer.create(<Element/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

})

describe('Miccelaneous', () => {

  it('should provide global classNames for block', () => {
    const Block = bemed('block-name')()
    const component = renderer.create(<Block className="global another-global"/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should provide global classNames for element', () => {
    const b = bemed('block-name')
    const Element = b('element')
    const component = renderer.create(<Element className="global another-global"/>)
    expect(component.toJSON()).toMatchSnapshot()
  })

})
