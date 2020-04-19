import styled from 'styled-components/native';
import Button from '~/Components/Button';

export const Container = styled.SafeAreaView`
  margin-top: 30px;
  padding: 30px;
  flex: 1;
`;

export const LogoutButton = styled(Button)`
  margin-top: 30px;
  background: #f64c75;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  align-self: center;
  margin-bottom: 30px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 20px;
`;

export const Description = styled.Text`
  font-size: 20px;
  color: #444;
  font-weight: bold;
`;
