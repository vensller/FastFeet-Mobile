import React, {useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Header} from '~/Components/GlobalStyles/styles';
import {FormInput, SubmitButton} from './styles';

import api from '~/services/api';

export default function NewProblem({navigation}) {
  const delivery = navigation.getParam('delivery');

  const [problem, setProblem] = useState('');

  async function handleSubmit() {
    try {
      await api.post(`delivery/${delivery.id}/problems`, {
        description: problem,
      });

      Alert.alert('Sucesso', 'Problema informado com sucesso');
      navigation.navigate('DeliveryDetails');
    } catch (error) {
      const {response} = error;

      if (response.data?.error) {
        Alert.alert('Atenção', response.data.error);
      } else {
        Alert.alert(
          'Atenção',
          'Não foi possível informar o problema, tente novamente mais tarde',
        );
      }
    }
  }

  return (
    <>
      <Header />
      <Container>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe aqui o problema que ocorreu na entrega"
          returnKeyType="send"
          value={problem}
          onChangeText={setProblem}
          multiline={true}
        />
        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Container>
    </>
  );
}

NewProblem.navigationOptions = ({navigation}) => ({
  title: 'Informar problema',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('DeliveryDetails')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
