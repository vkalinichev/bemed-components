# bemed components
BEM-flavored React Components.

[styled-components] is great! It allows to write clean markup code. But sometimes you want to keep CSS in CSS.

[BEM] (methodology) is fabulous and time-tested but working directly with its classnames in markup is not a pleasure.
 
**bemed components** allows to write expressive and clear markup code. Its just creates an shortcutted Components with BEM classnames inside.

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

### Write your clean and expressive markup
```javascript
const BemedComponent = ({opened}) => (
  <Home>                                  //  <div class="home">
    <Roof mod={{color: 'red'}}/>          //    <div class="home__roof home__roof_color_red">  
    <Windows>                             //    <div class="home__windows">  
      <Window mod="large"> + </Window>    //      <span class="home__window home__window_large"> + </span>  
      <Window> + </Window>                //      <span class="home__window"> + </span>
    </Windows>                            //    </div>  
    <Door mod={{opened}}/>                //    <div class="home__door home__door_opened"></div>  
  </Home>                                 //  </div>  
)
```

---
With gratitude and great respect for [BEM] and [styled-components]

[BEM]: https://bem.info/methodology
[styled-components]: https://www.styled-components.com
