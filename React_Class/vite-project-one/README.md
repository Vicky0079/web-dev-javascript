# Note

1. First letter of the component 
must be capital
2. Diffing algo and reconciliation
3. Only one component (function) 
allowed to be default export.
4. Wrap named name export component 
in { }

'''javascript
const Demo=()=>{
    return "hello World"
}
export{Demo}
'''
Import in other component
'''

#Note
Import About, { Demo } from './componets/About'

5.Lifecycle Method:
- Class component uses life cycle method to perform
multiple task.
- life cycle method has so much unnessessary
boilerplate code so the application is getting complex and hard to manage.
- So that why we shifted to functional component.
6. We cant re-render normal variable in JSX.
7. inside onclick or any event just write the function name, 