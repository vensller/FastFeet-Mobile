import styled from 'styled-components/native';
import {RNCamera} from 'react-native-camera';

import Button from '~/Components/Button';

export const PictureButton = styled.TouchableOpacity`
  margin-top: -40px;
  width: 61px;
  height: 61px;
  border-radius: 30.5px;
  align-self: center;
  background-color: #0000004d;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled(Button)`
  background: #7d40e7;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;

export const CameraContainer = styled.View`
  margin-top: 20px;
  height: 400px;
  width: 80%;
  border-radius: 4px;
  align-self: center;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  width: 100%;
  height: 100%;
  align-self: center;
  border-radius: 4px;
`;

export const SignaturePreview = styled.Image`
  height: 400px;
  width: 80%;
  border-radius: 4px;
  align-self: center;
`;
