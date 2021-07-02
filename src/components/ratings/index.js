import { Container, RatingContainer, Img, GrayImg, RatingDesc, Offset, Stars } from './RatingElements';
import PropTypes from 'prop-types';
import IconStar from '../../images/icon-star.svg';

const MaxStarsNumber = 5;

const makeStars = number => {
  const arr = [];
  for (let i = 0; i < number; i++) arr.push(<Img key={i} src={IconStar} />);
  for (let i = number; i < MaxStarsNumber; i++) arr.push(<GrayImg key={i} src={IconStar} />);
  return arr;
};

const Rating = ({ stars, domain }) => {
  stars = Math.min(stars, MaxStarsNumber);

  return (
    <RatingContainer>
      <Stars>{makeStars(stars)}</Stars>
      <RatingDesc>
        Rated {stars} stars in {domain}
      </RatingDesc>
    </RatingContainer>
  );
};

export default function Ratings() {
  return (
    <Container>
      {[
        { stars: 5, domain: 'Reviews' },
        { stars: 5, domain: 'Report Guru' },
        { stars: 5, domain: 'BestTech' },
      ].map((item, index) => (
        <Offset key={index} index={index}>
          <Rating stars={item.stars} domain={item.domain} />
        </Offset>
      ))}
    </Container>
  );
}

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  domain: PropTypes.string.isRequired,
};
