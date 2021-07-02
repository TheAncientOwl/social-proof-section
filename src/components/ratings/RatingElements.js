import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';

export const Container = styled.div`
  @media (max-width: ${Breakpoints.mobile}) {
    margin-top: 2em;
  }
`;

export const RatingContainer = styled.div`
  background: ${({ theme }) => theme.lightGrayMagenta};
  max-width: 27em;
  padding: 1em 1.2em;
  border-radius: 0.5em;
  margin-bottom: 1em;
  display: flex;

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  padding: 0 5px;
`;

export const GrayImg = styled(Img)`
  filter: grayscale(100%);
`;

export const Stars = styled.div``;

export const RatingDesc = styled.span`
  color: ${({ theme }) => theme.darkMagenta};
  font-weight: 700;
  margin-left: 1.5em;

  @media (max-width: ${Breakpoints.mobile}) {
    margin-left: 0;
    margin-top: 0.5em;
  }
`;

export const Offset = styled.div`
  @media (min-width: ${Breakpoints.mobile}) {
    margin-left: ${({ index }) => `calc(${index} * 2.6em)`};
  }
`;
