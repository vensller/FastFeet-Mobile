import React, {useState, useEffect} from 'react';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Header} from '~/Components/GlobalStyles/styles';

import api from '~/services/api';
import {ProblemList, Problem, Description, ProblemDate} from './styles';

export default function ShowProblems({navigation}) {
  const delivery = navigation.getParam('delivery');
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`delivery/${delivery.id}/problems`);
      setProblems(response.data);
    }

    loadProblems();
  }, [delivery.id]);
  return (
    <>
      <Header />
      <Container>
        <ProblemList
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <Problem>
              <Description>{item.description}</Description>
              <ProblemDate>
                {format(parseISO(item.createdAt), 'dd/MM/yyyy', {locale: pt})}
              </ProblemDate>
            </Problem>
          )}
        />
      </Container>
    </>
  );
}

ShowProblems.navigationOptions = ({navigation}) => ({
  title: 'Visualizar problemas',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('DeliveryDetails')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
