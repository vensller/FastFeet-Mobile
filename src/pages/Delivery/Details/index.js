import React, {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Header} from '~/Components/GlobalStyles/styles';

import {
  DetailGroup,
  Label,
  Text,
  DetailRow,
  DetailColumn,
  Title,
  TitleText,
  DeliveryButtons,
  Button,
  ButtonText,
} from './styles';

import api from '~/services/api';

export default function Details({navigation}) {
  const delivery = navigation.getParam('delivery');
  const profile = useSelector((state) => state.user.profile);

  const [startFormatted, setStartFormatted] = useState(
    delivery.start_date
      ? format(parseISO(delivery.start_date), 'dd/MM/yyyy', {locale: pt})
      : '--/--/----',
  );

  const endFormatted = useMemo(
    () =>
      delivery.end_date
        ? format(parseISO(delivery.end_date), 'dd/MM/yyyy', {locale: pt})
        : '--/--/----',
    [delivery.end_date],
  );

  function handleShowProblems() {
    navigation.navigate('ShowProblems', {delivery});
  }

  function handleNewProblem() {
    navigation.navigate('NewProblem', {delivery});
  }

  function handleConfirmDelivery() {
    if (!delivery.start_date) {
      Alert.alert('Atenção', 'A encomenda ainda não foi retirada');
      return;
    }

    if (delivery.end_date) {
      Alert.alert('Atenção', 'A encomenda já foi entregue');
      return;
    }

    navigation.navigate('ConfirmDelivery', {delivery});
  }

  async function handleStartDelivery() {
    if (delivery.end_date) {
      Alert.alert('Atenção', 'A encomenda já foi entregue');
      return;
    }

    if (delivery.start_date) {
      Alert.alert('Atenção', 'A encomenda já foi retirada');
      return;
    }

    try {
      const response = await api.put(
        `delivery/${delivery.id}/pickup/${profile.id}`,
      );

      delivery.start_date = response.start_date;

      setStartFormatted(
        response.start_date
          ? format(parseISO(response.start_date), 'dd/MM/yyyy', {locale: pt})
          : '--/--/----',
      );

      Alert.alert('Sucesso', 'Encomenda retirada com sucesso');
    } catch (error) {
      const {response} = error;

      if (response.data?.error) {
        Alert.alert('Atenção', response.data.error);
      } else {
        Alert.alert(
          'Atenção',
          'Não foi possível confirmar a retirada, tente novamente mais tarde',
        );
      }
    }
  }

  return (
    <>
      <Header />
      <Container>
        <DetailGroup>
          <Title>
            <Icon name="local-shipping" size={24} color="#7D40E7" />
            <TitleText>Informações da entrega</TitleText>
          </Title>
          <Label>Destinatário</Label>
          <Text>{delivery.recipient.name}</Text>
          <Label>Endereço de entrega</Label>
          <Text>{delivery.recipient.address.full_address}</Text>
          <Label>Produto</Label>
          <Text>{delivery.product}</Text>
        </DetailGroup>
        <DetailGroup>
          <Title>
            <Icon name="event" size={24} color="#7D40E7" />
            <TitleText>Situação da entrega</TitleText>
          </Title>
          <Label>Status</Label>
          <Text>{delivery.status.description}</Text>
          <DetailRow>
            <DetailColumn>
              <Label>Data de retirada</Label>
              <Text>{startFormatted}</Text>
            </DetailColumn>
            <DetailColumn>
              <Label>Data de entrega</Label>
              <Text>{endFormatted}</Text>
            </DetailColumn>
          </DetailRow>
        </DetailGroup>
        <DeliveryButtons>
          <Button onPress={handleNewProblem}>
            <Icon name="cancel" size={24} color="#E74040" />
            <ButtonText>Informar problema</ButtonText>
          </Button>
          <Button onPress={handleShowProblems}>
            <Icon name="info" size={24} color="#E7BA40" />
            <ButtonText>Visualizar problemas</ButtonText>
          </Button>
          <Button onPress={handleStartDelivery}>
            <Icon name="check" size={24} color="#82BF18" />
            <ButtonText>Confirmar retirada</ButtonText>
          </Button>
          <Button onPress={handleConfirmDelivery}>
            <Icon name="check-circle" size={24} color="#7D40E7" />
            <ButtonText>Confirmar entrega</ButtonText>
          </Button>
        </DeliveryButtons>
      </Container>
    </>
  );
}

Details.navigationOptions = ({navigation}) => ({
  title: 'Detalhes da encomenda',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
