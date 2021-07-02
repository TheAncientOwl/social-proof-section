import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';

export const Container = styled.div``;

export const Title = styled.div`
  color: ${({ theme }) => theme.darkMagenta};
  font-size: 3em;
  font-weight: 700;
  width: 16ch;
  line-height: 0.9em;

  @media (max-width: ${Breakpoints.mobile}) {
    margin: 0 auto;
    text-align: center;
  }
`;

export const Paragraph = styled.div`
  color: ${({ theme }) => theme.darkGrayMagenta};
  font-size: 1.2em;
  font-weight: 400;
  width: 35ch;
  line-height: 1.4em;
  margin-top: 1em;

  @media (max-width: ${Breakpoints.mobile}) {
    margin: 1.4em auto 0 auto;
    text-align: center;
  }
`;
