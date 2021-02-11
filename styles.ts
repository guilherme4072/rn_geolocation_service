import styled from 'styled-components/native';

export const Container = styled.View`
justify-content:center;
  background-color:#3366ff;
  flex:1;
  flex-direction:column;
`;

export const Btn = styled.TouchableOpacity`
  background-color:#99ccff;
  border-radius:5px;
  elevation:3px;
  padding: 10px;
  margin: 10px;
`;

export const TextBtn = styled.Text`
  text-align: center;
  font-size:20px;
  color: #000;
`;

export const TextResultGPS = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #fff;
`;