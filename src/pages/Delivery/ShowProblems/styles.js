import styled from 'styled-components/native';

export const ProblemList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Problem = styled.View`
  background: #fff;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
`;

export const Description = styled.Text`
  font-size: 16px;
  flex: 1;
  color: #999;
`;

export const ProblemDate = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
`;
