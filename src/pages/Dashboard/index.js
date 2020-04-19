import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Delivery from '~/Components/Delivery';

import {
  Container,
  Header,
  Avatar,
  Profile,
  NameView,
  Label,
  Name,
  LogoutButton,
  DeliveryFilter,
  FilterTitle,
  FilterOptions,
  Option,
  OptionText,
  DeliveryList,
} from './styles';

import api from '~/services/api';

import {signOut} from '~/store/modules/auth/actions';

function Dashboard({isFocused, navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [option, setOption] = useState(1);
  const [deliveries, setDeliveries] = useState([]);

  function handleSignOut() {
    dispatch(signOut());
  }

  useEffect(() => {
    async function loadDeliveries() {
      const params = {};

      if (option === 2) {
        params.delivered = true;
      }

      const response = await api.get(`deliveryman/${profile.id}/deliveries`, {
        params,
      });

      setDeliveries(response.data);
    }

    if (isFocused) {
      loadDeliveries();
    }
  }, [isFocused, option, profile.id]);

  function handleShowDelivery(delivery) {
    navigation.navigate('DeliveryDetails', {delivery});
  }

  return (
    <Container>
      <Header>
        <Profile>
          <Avatar
            source={{
              uri: profile.avatar
                ? profile.avatar.url
                : `https://api.adorable.io/avatar/68/${profile.name}.png`,
            }}
          />
          <NameView>
            <Label>Bem vindo de volta,</Label>
            <Name>{profile.name}</Name>
          </NameView>
        </Profile>
        <LogoutButton onPress={() => handleSignOut()}>
          <Icon name="exit-to-app" color="#E74040" size={24} />
        </LogoutButton>
      </Header>
      <DeliveryFilter>
        <FilterTitle>Entregas</FilterTitle>
        <FilterOptions>
          <Option onPress={() => setOption(1)}>
            <OptionText active={option === 1}>Pendentes</OptionText>
          </Option>
          <Option onPress={() => setOption(2)}>
            <OptionText active={option === 2}>Entregues</OptionText>
          </Option>
        </FilterOptions>
      </DeliveryFilter>
      <DeliveryList
        data={deliveries}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <Delivery
            delivery={item}
            onShowDelivery={() => handleShowDelivery(item)}
          />
        )}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  header: () => <></>,
};

export default withNavigationFocus(Dashboard);
