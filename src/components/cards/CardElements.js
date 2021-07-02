import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';

export const Container = styled.div`
  display: flex;
  border: 1px solid red;

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const Offset = styled.div`
  @media (min-width: ${Breakpoints.mobile}) {
    margin-top: ${({ index }) => `calc(${index} * 1em)`};
  }
`;

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.darkMagenta};
  padding: 1.5em;
  border-radius: 0.7em;
  margin: 0.6em;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImage = styled.img`
  display: block;
  border-radius: 50%;
  transform: scale(0.65);
`;

export const Details = styled.div``;

export const UserName = styled.div`
  color: ${({ theme }) => theme.white};
  font-weight: 700;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.softPink};
  margin-top: 0.3em;
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.lightGrayMagenta};
  margin-top: 1em;
  width: 33ch;
  margin-bottom: 1em;
`;
