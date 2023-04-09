import Table from './components/Table/Table'
import data from './data.json'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Table data={data} />     
    </Container>
  )
}

export default App


const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`