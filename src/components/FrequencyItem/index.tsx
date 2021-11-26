import React from 'react';
import { ColorValue } from 'react-native';
import { IWordFrequency } from '../../screens/Home';

import {
  Container,
  Frequency,
  FrequencyWrapper,
  Name,
  NameWrapper
} from './styles';

interface Props {
  item: IWordFrequency;
  color: string;
}

export function FrequencyItem({ item, color }: Props) {
  return (
    <Container>
      <FrequencyWrapper color={color}>
        <Frequency adjustsFontSizeToFit>{item.frequency}</Frequency>
      </FrequencyWrapper>
      <NameWrapper>
        <Name adjustsFontSizeToFit>{item.name}</Name>
      </NameWrapper>
    </Container>
  );
}