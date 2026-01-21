import React from 'react';
import PropTypes from 'prop-types';
import icons from '../../../assets';
import { Container, X, Content } from './style';


export default function CardToast(props) {
  const { title, description, button, theme } = props.payload.offerDetails.content.payload;

  return (
    <Container temaOferta={theme}>
      <X>x</X>
      <Content>
        <img src={icons.bell} alt="Ringing bell icon" />
        <h1>{title}</h1>
        <p>{description}</p>
        <div>{button}</div>
      </Content>
    </Container>
  );
}

CardToast.propTypes = {
  payload: PropTypes.object,
}.isRequired;
