import React, {useContext, useEffect, useState} from 'react';
import {FlatList, View, VStack} from 'native-base';
import {ActivityIndicator, Image} from 'react-native';
import InternalContainer from '../../containers/InternalContainer';
import TextApp from '../../components/TextApp';
import colors from '../../constants/colors';
import ButtonApp from '../../components/ButtonApp';
import {AuthContext} from '../../context/AuthContext';
import {getData} from '../../utils/fetch/getData';
import AddressItem from '../../components/AddressList/AddressItem';
import Carousel from 'react-native-snap-carousel';
import { generateAuthToken } from '../../utils/paymentez';
import { all } from '../../utils/cards';

const CardsListScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const initialRequest = async () => {
    const authToken = await generateAuthToken()
    const cardsRequest = await all(authToken , user['_id']['$oid'])
    console.info('bef', cardsRequest)
    if('result_size' in cardsRequest && cardsRequest['result_size'] >= 1){
        console.info('acc', cardsRequest)
        setCards(cardsRequest.cards)
    }
}

useEffect(() => {
    initialRequest()
}, [])

  const entries = [
    {
      title: 'A',
    },
    {
      title: 'B',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{backgroundColor: colors.primaryColor, height: 150, marginTop: 12}}>
        <TextApp.Default value={item.title} />
      </View>
    );
  };

  return (
    <InternalContainer
      title="Métodos de Pago"
      iconName="card"
      iconType="ionicon"
      iconColor="white">
      <View pt={8} pb={2} flex={1}>
        <TextApp.Default
          fontSize={30}
          fontWeight="bold"
          textAlign="center"
          value="Mis Métodos de pago"
        />

        <Carousel
          ref={c => c}
          data={entries}
          renderItem={renderItem}
          sliderWidth={375}
          itemWidth={300}
        />
        

        <ButtonApp.Default
          title="Agregar nuevo"
          onPress={() => navigation.navigate('CardForm')}
        />
      </View>
    </InternalContainer>
  );
};

export default CardsListScreen;
