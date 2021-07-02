import styled from 'styled-components';

export const Container = styled.div`
  outline: 1px solid red;
  display: grid;
  justify-content: center;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.darkMagenta};
  font-size: 2em;
  font-weight: 700;
  width: 40%;
  line-height: 0.9em;
`;

export const Paragraph = styled.div`
  color: ${({ theme }) => theme.darkGrayMagenta};
  font-size: 1.2em;
  font-weight: 400;
  width: 80%;
  line-height: 1.4em;
  margin-top: 0.5em;
`;
