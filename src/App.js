import styled, { ThemeProvider } from 'styled-components';
import Colors from './Colors';
import TextHeader from './components/text-header';
import Ratings from './components/ratings';
import Cards from './components/cards';
import Breakpoints from './Breakpoints';
import TopBackgroundImage from './components/background/TopBackgroundImage';
import BottomBackgroundImage from './components/background/BottomBackgroundImage';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${Breakpoints.desktop}) {
    transform: scale(0.9);
  }

  @media (max-width: ${Breakpoints.desktop2}) {
    transform: scale(0.8);
  }

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 3em 2em 5em 2em;
    transform: scale(1);
  }
`;

const TopContainer = styled.div`
  display: flex;

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const BottomContainer = styled.div`
  margin-top: 2em;
`;

export default function App() {
  return (
    <ThemeProvider theme={Colors}>
      <Container>
        <TopBackgroundImage />
        <BottomBackgroundImage />

        <TopContainer>
          <TextHeader />
          <Ratings />
        </TopContainer>

        <BottomContainer>
          <Cards />
        </BottomContainer>
      </Container>
    </ThemeProvider>
  );
}
