
import renderer from 'react-test-renderer'
import Header from '../views/Header'

test('render correctly',()=>{

   const tree = renderer.create(<Header title='Welcome To My App'/>).toJSON()
   expect(tree).toMatchSnapshot()

})