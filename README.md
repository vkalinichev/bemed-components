# bemed components


[![npm][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![npm][npm-dwnlds-img]][npm]
[![Package Quality][quality-img]][quality]
[![license][lic-img]][lic]

[npm-img]: https://img.shields.io/npm/v/bemed-components.svg
[npm]:     https://npmjs.org/package/bemed-components

[ci-img]:  https://img.shields.io/travis/vkalinichev/bemed-components.svg
[ci]:      https://travis-ci.org/vkalinichev/bemed-components

[npm-dwnlds-img]: https://img.shields.io/npm/dt/bemed-components.svg

[quality-img]: http://npm.packagequality.com/shield/bemed-components.svg
[quality]: http://packagequality.com/#?package=bemed-components

[lic-img]: https://img.shields.io/github/license/vkalinichev/bemed-components.svg
[lic]:     https://github.com/vkalinichev/bemed-components/blob/master/License


BEM-flavored React Components.

[styled-components] is great! It allows to write clean JSX code.
But sometimes you want to keep CSS in CSS.

[BEM] is fabulous and time-tested but working directly
with its classnames in markup is not a pleasure.
 
**bemed components** allows to write expressive and clean JSX code.
Its just creates an shortcutted Components with BEM classnames inside.

## Install
```shell
npm install bemed-components
```

## Usage 

### Prepares: import, create Block context
```javascript
import bemed from 'bemed-components'

const b = bemed('home')   
```

### Declare Blocks
```javascript
const Home = b()           
```

### Declare Elements
```javascript
const Roof = b('roof') 
const Door = b('door')
const Windows = b('windows')   
const Window = b.span('window') 
```

### Write clean and expressive JSX
```jsx
const BemedComponent = ({opened}) => (
 <Home>
   <Roof mod={{color: 'red'}}/>     
   <Windows>
     <Window mod="large"> + </Window>
     <Window> + </Window>
   </Windows>
   <Door mod={{opened}}/>
 </Home>
)
```
That will be compiled to
```jsx
const BemedComponent = ({opened}) => (
  <div class="home">
    <div class="home__roof home__roof_color_red"> 
    <div class="home__windows">
      <span class="home__window home__window_large"> + </span>  
      <span class="home__window"> + </span>
    </div>
    <div class={`home__door ${ opened ? 'home__door_opened' : '' }`}></div>
  </div>
)
```

---
With gratitude and great respect for [BEM] and [styled-components]

[BEM]: https://bem.info/methodology
[styled-components]: https://www.styled-components.com
