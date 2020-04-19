import React, {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import {Container, Avatar, Label, Description, LogoutButton} from './styles';

import {signOut} from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const formattedDate = useMemo(
    () => format(parseISO(profile.createdAt), 'dd/MM/yyyy', {locale: pt}),
    [profile.createdAt],
  );

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: profile.avatar
            ? profile.avatar.url
            : `https://api.adorable.io/avatar/150/${profile.name}.png`,
        }}
      />

      <Label>Nome completo</Label>
      <Description>{profile.name}</Description>

      <Label>Email</Label>
      <Description>{profile.email}</Description>

      <Label>Data de cadastro</Label>
      <Description>{formattedDate}</Description>

      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={24} color={tintColor} />
  ),
};
