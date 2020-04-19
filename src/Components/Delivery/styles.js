import styled from 'styled-components/native';

export const Container = styled.View`
  border: 0.5px solid #eee;
  flex: 1;
  margin: 10px 0;
  border-radius: 4px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
`;

export const Footer = styled.View`
  padding: 10px;
  background: #f8f9fd;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const DeliveryDetail = styled.View`
  flex-direction: column;
`;

export const Label = styled.Text`
  font-size: 8px;
  color: #999;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444;
`;

export const DetailButton = styled.TouchableOpacity`
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;

export const ShippingDetails = styled.View`
  flex-direction: row;
  padding: 20px 20px 0;
  align-items: center;
  justify-content: space-between;
`;

export const StateLine = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const ShippingState = styled.Text`
  font-size: 8px;
  color: #999;
  max-width: 50px;
  text-align: center;
`;

export const DeliveryState = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: ${(props) => (props.active ? '#7d40e7' : 'transparent')};
  border: 1px solid #7d40e7;
`;

export const DeliverySeparator = styled.View`
  height: 1px;
  flex: 1;
  background: #7d40e7;
`;
