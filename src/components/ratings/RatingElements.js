import styled from 'styled-components';

export const Container = styled.div`
  outline: 1px solid green;
  width: 100%;
  padding: 20px;
`;

export const RatingContainer = styled.div`
  background: ${({ theme }) => theme.lightGrayMagenta};
  max-width: 27em;
  padding: 1em 1.2em;
  border-radius: 0.5em;
  margin-bottom: 1em;
`;

export const Img = styled.img`
  padding: 0 5px;
`;

export const GrayImg = styled(Img)`
  filter: grayscale(100%);
`;

export const RatingDesc = styled.span`
  color: ${({ theme }) => theme.darkMagenta};
  font-weight: 700;
  margin-left: 1.5em;
`;

export const Offset = styled.div`
  margin-left: ${({ index }) => `calc(${index} * 2.6em)`};
`;
