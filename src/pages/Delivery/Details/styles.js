import styled from 'styled-components/native';

export const DetailGroup = styled.View`
  border: 1px solid #eee;
  border-radius: 4px;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  margin: 10px 0 0;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
  margin-top: 10px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const DetailRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailColumn = styled.View`
  flex-direction: column;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 10px;
`;

export const DeliveryButtons = styled.View`
  background: #f8f9fd;
  border-radius: 4px;
  max-height: 80px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: #999;
  text-align: center;
  max-width: 80px;
`;
