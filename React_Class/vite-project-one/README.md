# Note
1. First letter of the component must be capital
2. Diffing algo and reconcilatiation
3. Only one component(function) allowed to default export.
4. Wrap named name export component in { }

``` js
const Demo=()=>{
    return "hello World"
}
export{Demo}
```

Import in other component

```js
import About ,{Demo} from './components/About'
```

5. Lifecycle Method:
 - Class compoent uses life cycle method to perform multiple tasks
 - Life cycle method has no such unnecessary boilerplate code so tha application isgetting complex and hard to manage
 > lifecycle methods: mounting, updating,unmounting
 - So that is the reason we shifted to functional component

6. We cannot rerender normal variable in JSX.
7. inside onclick or any event just rite the function name.

## HOOKS
- Hooks are functions
- Hooks allows you to use state and other features without writing a class
> There are 2 rules to use hooks:
 1. Only call hooks at top level

# Note:
->we can't rerender or update the value or state declared in normal is variable.