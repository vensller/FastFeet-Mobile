import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Alert, TouchableOpacity} from 'react-native';
import {useCamera} from 'react-native-camera-hooks';
import ImageResizer from 'react-native-image-resizer';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  PictureButton,
  SubmitButton,
  SignaturePreview,
  Camera,
  CameraContainer,
} from './styles';

import {Container, Header} from '~/Components/GlobalStyles/styles';

import api from '~/services/api';

export default function Confirm({initialProps, navigation}) {
  const delivery = navigation.getParam('delivery');
  const profile = useSelector((state) => state.user.profile);

  const [file, setFile] = useState(null);

  const [
    {cameraRef, type, ratio, autoFocus, autoFocusPoint},
    {takePicture},
  ] = useCamera(initialProps);

  async function handlePicture() {
    if (file) {
      setFile(null);
      return;
    }

    const data = await takePicture({quality: 0.5});
    setFile(data);
  }

  async function handleSubmit() {
    try {
      const resizedImage = await ImageResizer.createResizedImage(
        file.uri,
        500,
        300,
        'JPEG',
        100,
        0,
        null,
      );

      const data = new FormData();

      data.append('file', {
        uri: resizedImage.uri,
        name: 'file.jpeg',
        type: 'image/jpeg',
      });

      const response = await api.post('files', data);

      const {id} = response.data;

      await api.put(`delivery/${delivery.id}/deliver/${profile.id}`, {
        signature_id: id,
      });

      Alert.alert('Sucesso', 'Entrega realizada');

      navigation.navigate('Dashboard');
    } catch (error) {
      console.tron.log(error);
      const {response} = error;

      if (response?.data?.error) {
        Alert.alert('Atenção', response.data.error);
      } else {
        Alert.alert(
          'Atenção',
          'Não foi possível realizar a entrega, tente novamente mais tarde',
        );
      }
    }
  }

  return (
    <>
      <Header />
      <Container>
        {file ? (
          <SignaturePreview source={{isStatic: true, uri: file.uri}} />
        ) : (
          <CameraContainer>
            <Camera
              ref={cameraRef}
              autoFocusPointOfInterest={autoFocusPoint.normalized}
              type={type}
              ratio={ratio}
              autoFocus={autoFocus}
              captureAudio={false}
            />
          </CameraContainer>
        )}
        <PictureButton onPress={handlePicture}>
          <Icon name="camera" size={36} color="#ffffff" />
        </PictureButton>
        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Container>
    </>
  );
}

Confirm.navigationOptions = ({navigation}) => ({
  title: 'Confirmar entrega',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('DeliveryDetails')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
