import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  padding-top: 10px;
`;

export const HeaderPage = styled(RectButton) <{ selected: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected }) => selected ? '#797979' : '#ececec'};
`;

export const PageName = styled.Text<{ selected: boolean }>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ selected }) => selected ? '#eee' : '#555'};
`;

export const Pages = styled.ScrollView`
  flex: 1;
`;

export const Page = styled.View`
  width: ${Dimensions.get('window').width}px;
  flex: 1;
  padding: 10px 10px 0;
`;

export const Footer = styled.View`
  background-color: #e9e9e9;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-width: 2px;
  border-color: black;
  height: 200px;
`;

export const TextBox = styled.TextInput`
  width: 100%;
  flex: 1;
  padding: 16px;
  padding-bottom: 60px;
`;

export const TranslateButton = styled(RectButton)`
  height: 50px;
  background-color: #82eb94;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const TranslateText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export const VictoryPieWrapper = styled.View`
  flex: 1;
  align-items: center;
`;