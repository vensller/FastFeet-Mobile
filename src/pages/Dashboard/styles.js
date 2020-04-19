import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
`;

export const Profile = styled.View`
  flex-direction: row;
`;

export const NameView = styled.View`
  flex-direction: column;
  margin: 10px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const LogoutButton = styled.TouchableOpacity`
  align-self: center;
`;

export const DeliveryFilter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
export const FilterTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const FilterOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Option = styled.TouchableOpacity`
  margin: 0px 5px;
  align-self: center;
`;

export const OptionText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.active ? '#7D40E7' : '#999')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;

export const DeliveryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
