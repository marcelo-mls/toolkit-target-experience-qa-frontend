import React from 'react';
import PropTypes from 'prop-types';
import { SPACES_OBJECT } from '../../../utils/spaces';
// import CardCentralAvisos from '../CardCentralAvisos';
import CardTravaTelas from '../CardTravaTelas';
import CardGeneric from '../CardGeneric';
import CardResumo from '../CardResumo';
import CardToast from '../CardToast';
import icons from '../../../assets';
import { CardContent, CardTitles, TypeContainer, QAContainer } from './style';


export default function Card(props) {
  const { offer, activity } = props;
  const { audienceDetails, ordination } = offer;
  const { payload } = offer.offerDetails.content;

  const offerName = payload.nomeOferta || payload.name;
  const ordinationTextInfo = `Posição: ${ordination.position}\nPrioridade: ${ordination.priority}`;
  const lowerCaseName = activity.name.toLowerCase();

  let cardContainerWidth = lowerCaseName.includes(SPACES_OBJECT.travaTelas.mBox.toLowerCase()) ? '216px' : '262px';

  const setSpaceTemplate = () => {
    const isCardResumo = [
      SPACES_OBJECT.dashResumo1.mBox.toLowerCase(),
      SPACES_OBJECT.dashResumo2.mBox.toLowerCase(),
      SPACES_OBJECT.dashResumo3.mBox.toLowerCase(),
      SPACES_OBJECT.homeResumo1.mBox.toLowerCase(),
      SPACES_OBJECT.homeResumo2.mBox.toLowerCase(),
      SPACES_OBJECT.homeResumo3.mBox.toLowerCase(),
      'mBox1'.toLowerCase() // Configuração para tela de mock
    ].some((space) => lowerCaseName.includes(space));
    
    const isCardToast = [
      SPACES_OBJECT.modalHomeCartaoProd.mBox.toLowerCase(),
      SPACES_OBJECT.modalHomeContaProd.mBox.toLowerCase(),
      SPACES_OBJECT.modalHomeCreditoProd.mBox.toLowerCase(),
      'mBox2'.toLowerCase() // Configuração para tela de mock
    ].some((space) => lowerCaseName.includes(space));
    
    if(isCardResumo) {
      return (<CardResumo payload={offer} />);

      // } else if(lowerCaseName.includes(SPACES_OBJECT.telaCentralAvisos.mBox)) {
      //   return (<CardCentralAvisos payload={offer} />);

    } else if(lowerCaseName.includes(SPACES_OBJECT.travaTelas.mBox.toLowerCase())) {
      return (<CardTravaTelas payload={offer} />);

    } else if(isCardToast) {
      return (<CardToast payload={offer} />);

    } else {
      return (<CardGeneric payload={offer} />);
    }
  };

  const offerActivityType = offer.type.activity === 'auto_allocate' ? 'aa' : offer.type.activity;

  const setBackgroundColorForType = (type) => {
    if(type === 'xt') return '#963484';
    if(type === 'ab' || type === 'aa') return '#3A7D44';
    return '#1a1a1a';
  };

  const isQA = (audienceDetails.name.toLowerCase().includes('target qa')) ||
    ([2437296, 2143318, 2565598, 2544056, 2567469, 2571312, 2583493, 2582484, 2616969, 3406153].includes(audienceDetails.id));

  const qualityAssurance = {
    isQA,
    title: 'Oferta em validação ou testes',
    alt: 'Ícone de um balão Erlenmeyer, um recipiente utilizado em laboratórios químicos',
    blackIconSrc: icons.QA,
    whiteIconSrc: icons.whiteQA,
  };

  return (
    <>
      <CardTitles style={{ width: cardContainerWidth }}>
        <p title={audienceDetails.name}><strong>Audiência: </strong>{audienceDetails.name}</p>
        <p title={offerName}><strong>Oferta: </strong>{offerName}</p>
      </CardTitles>
      <CardContent>
        <div>
          <TypeContainer title={offer.experience.name} $typeColor={setBackgroundColorForType(offerActivityType)}>
            {offerActivityType.toUpperCase()}
          </TypeContainer>
          <span title={ordinationTextInfo}>{ordination.priority}</span>
          {qualityAssurance.isQA && <QAContainer title={qualityAssurance.title}>
            <img src={qualityAssurance.whiteIconSrc} alt={qualityAssurance.alt}/>
          </QAContainer>}
        </div>
        {setSpaceTemplate()}
      </CardContent>
    </>
  );
}

Card.propTypes = {
  offer: PropTypes.object,
  activity: PropTypes.object,
}.isRequired;
