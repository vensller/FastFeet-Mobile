import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Background from '~/Components/Background';
import Logo from '~/assets/fastfeet-logo.svg';

import {signInRequest} from '~/store/modules/auth/actions';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [id, setId] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Background>
      <Container>
        <Logo width={250} height={50} />
        <Form>
          <FormInput
            keyboardType="numeric"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu ID de cadastro"
            returnKeyType="send"
            value={id}
            onChangeText={setId}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
