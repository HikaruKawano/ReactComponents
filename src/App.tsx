
import  Card  from './components/atom/card/CardDefault'
import Container from './components/atom/container'
import Input from './components/atom/input'
import Text from './components/atom/text'
import Title from './components/atom/title'

function App() {
 

  return (
    <Container width='50%' height='50vh' display='flex' align='center' margin='0 auto' >
      <Input width='12px' height='40px' />
        <Input width='120px' height='40px' />
        <Input width='120px' height='40px' />
        <Input width='120px' height='40px' />
        <Input width='120px' height='40px' />
    </Container>
  )
}

export default App
