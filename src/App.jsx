import Table from './components/Table/Table';
import data from './data.json';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Table data={data} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  padding: 40px;
`;
