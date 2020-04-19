import styled from 'styled-components/native';
import Input from '~/Components/Input';
import Button from '~/Components/Button';

export const FormInput = styled(Input).attrs({
  textAlignVertical: 'top',
})`
  margin-bottom: 10px;
  height: 400px;
  text-align: justify;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background: #7d40e7;
`;
