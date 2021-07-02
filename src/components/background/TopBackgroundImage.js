import styled from 'styled-components';
import TopSrc from '../../images/bg-pattern-top.svg';

const Img = styled.img`
  position: fixed;
  left: 0;
  top: -4.5em;
`;

export default function TopBackgroundImage() {
  return <Img src={TopSrc} />;
}
