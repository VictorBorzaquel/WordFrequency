import React, { useRef, useState } from 'react';
import { Alert, FlatList, Keyboard, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { FrequencyItem } from '../../components/FrequencyItem';
import { VictoryPie } from 'victory-native';

import {
  Container,
  Footer,
  Header,
  HeaderPage,
  Page,
  PageName,
  Pages,
  TextBox,
  TranslateButton,
  TranslateText,
  VictoryPieWrapper
} from './styles';

type TPage = 'list' | 'graphic';

export interface IWordFrequencyObject {
  [name: string]: number;
}

export interface IWordFrequency {
  name: string;
  frequency: number;
}

export function Home() {
  const [page, setPage] = useState<TPage>('list')
  const [wordFrequencyList, setWordFrequencyList] = useState([] as IWordFrequency[])
  const [text, setText] = useState('')
  const [colorScale, setColorScale] = useState([] as string[])

  const pageList = ['list', 'graphic'] as TPage[]

  const { width } = useWindowDimensions()

  const pageRef = useRef<ScrollView>()

  function handleChangePage(page: TPage) {
    const x = pageList.indexOf(page) * width
    pageRef.current?.scrollTo({ x, animated: false })
    setPage(page)
  }

  function handleTranslate() {
    if (text.trim() === '') return Alert.alert('Você precisa inserir um texto!')
    
    const words = text.split(' ')

    const frequenciesObject = words.reduce((acc, word) => {
      if (word === '') return acc

      let frequency = acc[word] || 0
      return { ...acc, [word]: ++frequency }
    }, {} as IWordFrequencyObject)

    const frequencies = [] as IWordFrequency[]
    for (let key in frequenciesObject) {
      frequencies.push({
        name: key,
        frequency: frequenciesObject[key]
      })
    }

    const frequencySort = frequencies.sort((a, b) => b.frequency - a.frequency)
    const getHex = () => (Math.floor(Math.random() * 255)).toString(16).padStart(2, '0')
    const getColorScale = () => `#${getHex()}${getHex()}${getHex()}`

    const colorScale = [] as string[]
    frequencySort.forEach(() => {
      colorScale.push(getColorScale())
    })

    Keyboard.dismiss()
    setColorScale(colorScale)
    setWordFrequencyList(frequencySort)
  }

  function handleScrollPage(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const xPosition = event.nativeEvent.contentOffset.x
    const index = Math.round(xPosition / width)
    setPage(pageList[index])
  }

  return (
    <Container>
      <Header>
        <HeaderPage
          selected={page === 'list'}
          onPress={() => handleChangePage('list')}
        >
          <PageName selected={page === 'list'}>
            Lista
          </PageName>
        </HeaderPage>
        <HeaderPage
          selected={page === 'graphic'}
          onPress={() => handleChangePage('graphic')}
        >
          <PageName selected={page === 'graphic'}>
            Gráfico
          </PageName>
        </HeaderPage>
      </Header>

      <Pages
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={pageRef as any}
        onScroll={handleScrollPage}
      >
        <Page>
          <FlatList
            nestedScrollEnabled
            data={wordFrequencyList}
            keyExtractor={item => item.name}
            renderItem={({ item, index }) => <FrequencyItem item={item} color={colorScale[index]} />}
          />
        </Page>

        <Page>
          <VictoryPieWrapper>
            <VictoryPie
              data={wordFrequencyList}
              colorScale={colorScale}
              x="name"
              y="frequency"
              width={width / 1.2}
              innerRadius={50}
              // labelRadius={110}
            />
          </VictoryPieWrapper>
        </Page>
      </Pages>

      <Footer>
        <TextBox
          placeholder='Digite o texto aqui!'
          placeholderTextColor="#575757"
          selectTextOnFocus
          multiline
          maxLength={2048}
          onChangeText={setText}
          value={text}
        />
        <TranslateButton onPress={handleTranslate}>
          <TranslateText>CONFIRMAR</TranslateText>
        </TranslateButton>
      </Footer>
    </Container>
  );
}
