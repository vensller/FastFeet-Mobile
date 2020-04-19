import React, {useMemo} from 'react';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Title,
  Footer,
  DeliveryDetail,
  Label,
  Text,
  DetailButton,
  ButtonText,
  ShippingDetails,
  DeliveryState,
  DeliverySeparator,
  ShippingState,
  StateLine,
} from './styles';

export default function Delivery({delivery, onShowDelivery}) {
  const formattedDate = useMemo(
    () =>
      format(parseISO(delivery.createdAt), 'dd/MM/yyyy', {
        locale: pt,
      }),
    [delivery.createdAt],
  );

  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={24} color="#7D40E7" />
        <Title>{`Encomenda ${delivery.id}`}</Title>
      </Header>
      <ShippingDetails>
        <DeliveryState active={true} />
        <DeliverySeparator />
        <DeliveryState active={delivery.start_date} />
        <DeliverySeparator />
        <DeliveryState active={delivery.end_date} />
      </ShippingDetails>
      <StateLine>
        <ShippingState>Aguardando retirada</ShippingState>
        <ShippingState>Retirado</ShippingState>
        <ShippingState>Entregue</ShippingState>
      </StateLine>
      <Footer>
        <DeliveryDetail>
          <Label>Data</Label>
          <Text>{formattedDate}</Text>
        </DeliveryDetail>
        <DeliveryDetail>
          <Label>Cidade</Label>
          <Text>{delivery.recipient.address.city}</Text>
        </DeliveryDetail>
        <DetailButton onPress={onShowDelivery}>
          <ButtonText>Ver detalhes</ButtonText>
        </DetailButton>
      </Footer>
    </Container>
  );
}
