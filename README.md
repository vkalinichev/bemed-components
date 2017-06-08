# bemed-components
BEM-flavored components

```javascript
const ClassicalComponent = ({opened}) => (
  <div className="home">
    <div className="home__roof home__roof_red"/>
    <div className={`home__door ${ opened ? 'home__door_opened' : '' }`}/>
  </div>
)
```

```javascript
const BemedComponent = ({opened}) => (
  <Home>
    <Roof mod="red"/>
    <Door mod={{opened}}/>
  </Home>
)
```
