import styled, { ThemeProvider } from 'styled-components';
import Colors from './Colors';
import TextHeader from './components/text-header';
import Ratings from './components/ratings';
import Cards from './components/cards';

const Container = styled.div`
  min-height: 100vh;
`;

export default function App() {
  return (
    <ThemeProvider theme={Colors}>
      <Container>
        <TextHeader />
        <Ratings />
        <Cards />
      </Container>
    </ThemeProvider>
  );
}
