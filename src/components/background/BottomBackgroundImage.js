import styled from 'styled-components';
import BottomSrc from '../../images/bg-pattern-bottom.svg';

const Img = styled.img`
  position: fixed;
  right: 0;
  bottom: -2.5em;
`;

export default function BottomBackgroundImage() {
  return <Img src={BottomSrc} />;
}
