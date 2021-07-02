import { Container, Offset, CardContainer, Header, UserImage, Details, UserName, Title, Content } from './CardElements';
import PropTypes from 'prop-types';

import ImgAnne from '../../images/image-anne.jpg';
import ImgColton from '../../images/image-colton.jpg';
import ImgIrene from '../../images/image-irene.jpg';

const CardsConfig = [
  {
    img: ImgColton,
    userName: 'Colton Smith',
    title: 'Verified Buyer',
    content:
      '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
  },
  {
    img: ImgIrene,
    userName: 'Irene Roberts',
    title: 'Verified Buyer',
    content:
      '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
  },
  {
    img: ImgAnne,
    userName: 'Anne Wallace',
    title: 'Verified Buyer',
    content:
      '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
  },
];

const Card = ({ img, userName, title, content }) => {
  img, userName, title, content;
  return (
    <CardContainer>
      <Header>
        <UserImage src={img} alt={userName} />
        <Details>
          <UserName>{userName}</UserName>
          <Title>{title}</Title>
        </Details>
      </Header>
      <Content>{content}</Content>
    </CardContainer>
  );
};

export default function Cards() {
  return (
    <Container>
      {CardsConfig.map((item, index) => (
        <Offset key={index} index={index}>
          <Card img={item.img} userName={item.userName} title={item.title} content={item.content} />
        </Offset>
      ))}
    </Container>
  );
}

Card.propTypes = {
  img: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
