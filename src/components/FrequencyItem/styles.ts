import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 10px;
  
`;

export const FrequencyWrapper = styled.View<{color: string}>`
  width: 70px;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 3px;
  background-color: #e6e6e6;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-left-width: 12px;
  border-color: ${({color}) => color || '#e6e6e6'};
`;

export const Frequency = styled.Text`
  font-size: 24px;
`;

export const NameWrapper = styled.View`
  background-color: #e6e6e6;
  flex: 1;
  height: 100%;
  justify-content: center;
  padding: 0 12px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Name = styled.Text`
  font-size: 24px;
`;