import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Header} from '~/Components/GlobalStyles/styles';
import {SubmitButton} from './styles';

export default function ConfirmDelivery({navigation}) {
  const delivery = navigation.getParam('delivery');

  async function handleConfirmDelivery() {}

  return (
    <>
      <Header />
      <Container>
        <SubmitButton onPress={handleConfirmDelivery}>Enviar</SubmitButton>
      </Container>
    </>
  );
}

ConfirmDelivery.navigationOptions = ({navigation}) => ({
  title: 'Confirmar entrega',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('DeliveryDetails')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
