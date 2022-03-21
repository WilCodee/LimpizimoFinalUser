import React from 'react';
import {View, ScrollView, Image} from 'react-native';

import Spaces from './components/Spaces';
import Images from '../../assets/images';
import TextApp from '../../components/TextApp';
import colors from '../../constants/colors';
import CommonLayout from '../../components/Layout/CommonLayout';

const arrsBedroom = [
  'Limpiar los polvos.',
  'Tender las camas.',
  'Alzar y lavar ropa sucia.',
  'Barrer, trapear o aspirar.',
  'Doblar y guardar las toallas limpias.',
  'Limpiar ventanales interiores.',
];

const arrsKitchen = [
  'Lava y acomodar los platos.',
  'Limpieza de electrodomésticos y lockers.',
  'Limpieza interior y exterior del microondas.',
  'Limpieza interior y exterior del horno.',
  'Limpieza de fregadero, barras y grifos.',
  'Cocina básica.',
];

const arrsbathroom = [
  'Limpieza del baño.',
  'Limpia barras, grifos, accesorios y gabinetes.',
  'Recoge toallas sucias, tapetes y ropa sucia.',
  'Limpia la ducha y los ventanales.',
  'Limpiar el sarro interno del váter.',
  'Limpiar la duña o bañera.',
  'Limpiar espejos.',
  'Barrer y trapear.',
];

const commonSpaces = [
  'Barrer, trapear o aspirar pisos.',
  'Desempolvar y limpiar superficies.',
  'Limpiar ventanas interiores.',
  'Separar y sacar la basura.',
  'Organizar y limpiar repisas.',
  'Limpiar los focos.',
];

const NormalCleanScreen = () => {
  return (
    <ScrollView>
      <CommonLayout
        image={Images.normalCleaning}
        title="LIMPIESA NORMAL"
        subtitle="Conoce las tareas a realizar por cada área">
        <Spaces arr={arrsBedroom} image={Images.bedroom} space="Dormitorio" />
        <Spaces arr={arrsKitchen} image={Images.kitchenRoom} space="Cosina" />
        <Spaces arr={arrsbathroom} image={Images.bathRoom} space="Baño" />
        <Spaces
          arr={commonSpaces}
          image={Images.commonSpaces}
          space="Espacios comunes"
        />
      </CommonLayout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddinBottom: 30,
          paddingHorizontal: 20,
          backgroundColor: colors.primaryColor,
        }}>
        <Image
          source={Images.alertIcon}
          style={{width: 70, height: 80}}
          resizeMode="contain"
        />

        <TextApp.Default
          fontSize={20}
          fontWeight="bold"
          value="Importante"
          color={colors.secondaryColor}
        />
        <TextApp.Default
          fontSize={12}
          fontWeight="bold"
          textAlign="center"
          value={`Hemos realizado este estudio, basados en nuestra experiencia, un estimado de las tareas que se deben realizar por cada área de la casa, si deseas realizar otro tipo de tarea no te preocupes puedes indicarle a la colaboradora sin problema. Es importante aclarar que todas las tareas que realizan se sujetan a las horas contratadas.\n\n En el caso que se termine el tiempo contratado y deseas que la colaboradora te ayude en algo extra, no te preocupes, el tiempo seguirá corriendo y se te cobrará una vez tu y la colaboradora deslicen el botón de finalizar, es ahí cuando se te cobrará el total de las horas trabajadas.`}
          color={colors.mainColorLight}
        />

        <Image
          source={Images.logo}
          style={{width: 100, height: 100}}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
};

export default NormalCleanScreen;
