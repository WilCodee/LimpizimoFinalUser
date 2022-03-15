import React, {useState} from 'react'; 
import {View, Text, Image, ScrollView, ImageBackground } from 'react-native'
import Images from '../../assets/images';
import styles from './styles';
import { Avatar } from 'native-base';
import Colors  from '../../constants/colors'; 
import TextApp from '../../components/TextApp';

const businesses = [
    {
        photo: 'https://w7.pngwing.com/pngs/950/728/png-transparent-company-ocala-main-street-cleaning-cleaner-business-clean-and-pollution-free.png',
        name: 'Santa Fe Limpieza',
        description: '30 de años de experiencia en el negocio, servicio profesional garantizado. Quito y valles.',
        experienceYears: "30", 
        availableEmployees: "1-8",
        services: 230, 
        hourPrice: 7.2,
        grade: 4.7
    },
    {
      
        photo: 'https://w7.pngwing.com/pngs/950/728/png-transparent-company-ocala-main-street-cleaning-cleaner-business-clean-and-pollution-free.png',
        name: 'NatureClean',
        description: '30 de años de experiencia en el negocio, servicio profesional garantizado. Quito y valles.',
        experienceYears: "30", 
        availableEmployees: "1-8",
        services: 230, 
        hourPrice: 7.2,
        grade: 4.8
    },
    {
      photo: 'https://w7.pngwing.com/pngs/950/728/png-transparent-company-ocala-main-street-cleaning-cleaner-business-clean-and-pollution-free.png',
      name: 'Santa Fe Limpieza',
      description: '30 de años de experiencia en el negocio, servicio profesional garantizado. Quito y valles.',
      experienceYears: "30", 
      availableEmployees: "1-8",
      services: 230, 
      hourPrice: 7.2,
      grade: 4.7
  },
  {
    
      photo: 'https://w7.pngwing.com/pngs/950/728/png-transparent-company-ocala-main-street-cleaning-cleaner-business-clean-and-pollution-free.png',
      name: 'NatureClean',
      description: '30 de años de experiencia en el negocio, servicio profesional garantizado. Quito y valles.',
      experienceYears: "30", 
      availableEmployees: "1-8",
      services: 230, 
      hourPrice: 7.2,
      grade: 4.8
  },
  {
    photo: 'https://w7.pngwing.com/pngs/950/728/png-transparent-company-ocala-main-street-cleaning-cleaner-business-clean-and-pollution-free.png',
    name: 'Santa Fe Limpieza',
    description: '30 de años de experiencia en el negocio, servicio profesional garantizado. Quito y valles.',
    experienceYears: "30", 
    availableEmployees: "1-8",
    services: 230, 
    hourPrice: 7.2,
    grade: 4.7
},
{
  
    photo: 'https://w7.pngwing.com/pngs/950/728/png-transparent-company-ocala-main-street-cleaning-cleaner-business-clean-and-pollution-free.png',
    name: 'NatureClean',
    description: '30 de años de experiencia en el negocio, servicio profesional garantizado. Quito y valles.',
    experienceYears: "30", 
    availableEmployees: "1-8",
    services: 230, 
    hourPrice: 7.2,
    grade: 4.8
},
{
  photo: 'https://w7.pngwing.com/pngs/950/728/png-transparent-company-ocala-main-street-cleaning-cleaner-business-clean-and-pollution-free.png',
  name: 'Santa Fe Limpieza',
  description: '30 de años de experiencia en el negocio, servicio profesional garantizado. Quito y valles.',
  experienceYears: "30", 
  availableEmployees: "1-8",
  services: 230, 
  hourPrice: 7.2,
  grade: 4.7
},
{

  photo: 'https://w7.pngwing.com/pngs/950/728/png-transparent-company-ocala-main-street-cleaning-cleaner-business-clean-and-pollution-free.png',
  name: 'NatureClean',
  description: '30 de años de experiencia en el negocio, servicio profesional garantizado. Quito y valles.',
  experienceYears: "30", 
  availableEmployees: "1-8",
  services: 230, 
  hourPrice: 7.2,
  grade: 4.8
}
]

const BusinessList = () => {
    return(
      <ScrollView contentContainerStyle={{ marginHorizontal: 8 }} style={{ marginBottom: 24 }} >
      {
            businesses.map((b) =>
        <ImageBackground 
        resizeMode="contain"
        source={Images.bussinessBackground} 
        style={{ width: "100%" }}
        //style={{width: "100%", height: 100, marginVertical: 8 }} 
        >
          <View style={{ padding:12, display:'flex', flexDirection:'row', width: "85%" }}>
          <View style={{ flexDirection:'column' }}>
          <Avatar
                style={{ borderWidth: 3, borderColor:Colors.secondaryColor } }
                size="68px"

                source={b.photo ? { uri: b.photo } : {}}
          />
          <Text>Verificada</Text>
          </View>
          <View style={{ flexDirection:'column', marginLeft: 16, width: "75%" }} >
            <Text style={{ color:'white', fontSize: 20, fontWeight: 'bold'   }} >{b.name}</Text>
            <Text style={{ color:'white', fontSize: 12 }} >{b.description}</Text>
             
             <View style={{ flexDirection:'row', justifyContent:'space-between', width: "75%" }}>
               <Text style={{color: 'white'}} >{b.experienceYears}</Text>
               <Text style={{color: 'white'}}>{b.availableEmployees}</Text>
               <Text style={{color: 'white'}}>{b.services}</Text>
               <Text style={{color: 'white'}}>{b.hourPrice}</Text>
             </View>

          </View>
          </View>
          
          <View style={{ position:'absolute', right: 0, top: "33%", backgroundColor: Colors.secondaryColor, borderRadius: 50, padding:8   }}>
            <Text style={{color: 'white', fontWeight:'bold' }} >{b.grade}</Text>
          </View>
        </ImageBackground>
            )
        }
        </ScrollView>
    )
}


const collaborators = [
  {
    name: 'Alejandra',
    photo: 'https://media.vogue.mx/photos/5c0706516d624e994aa1b1a7/master/w_1600%2Cc_limit/tendencia_cortes_de_pelo_rostro_redondo_belleza_671202338.jpg',
    business: {
      name: 'Grupo Terra'
    },
    distance: '2',
    grade: 5
  },
  {
    name: 'Alejandra',
    photo: 'https://media.vogue.mx/photos/5c0706516d624e994aa1b1a7/master/w_1600%2Cc_limit/tendencia_cortes_de_pelo_rostro_redondo_belleza_671202338.jpg',
    business: {
      name: 'Grupo Terra'
    },
    distance: '2',
    grade: 5
  },
  {
    name: 'Alejandra',
    photo: 'https://media.vogue.mx/photos/5c0706516d624e994aa1b1a7/master/w_1600%2Cc_limit/tendencia_cortes_de_pelo_rostro_redondo_belleza_671202338.jpg',
    business: {
      name: 'Grupo Terra'
    },
    distance: '2',
    grade: 5
  },
  {
    name: 'Alejandra',
    photo: 'https://media.vogue.mx/photos/5c0706516d624e994aa1b1a7/master/w_1600%2Cc_limit/tendencia_cortes_de_pelo_rostro_redondo_belleza_671202338.jpg',
    business: {
      name: 'Grupo Terra'
    },
    distance: '2',
    grade: 5
  },
  {
    name: 'Alejandra',
    photo: 'https://media.vogue.mx/photos/5c0706516d624e994aa1b1a7/master/w_1600%2Cc_limit/tendencia_cortes_de_pelo_rostro_redondo_belleza_671202338.jpg',
    business: {
      name: 'Grupo Terra'
    },
    distance: '2',
    grade: 5
  },
  {
    name: 'Alejandra',
    photo: 'https://media.vogue.mx/photos/5c0706516d624e994aa1b1a7/master/w_1600%2Cc_limit/tendencia_cortes_de_pelo_rostro_redondo_belleza_671202338.jpg',
    business: {
      name: 'Grupo Terra'
    },
    distance: '2',
    grade: 5
  }
]

const HighlightCollaborators = () => {
  return(
    <ScrollView horizontal contentContainerStyle={{ marginLeft: 4 }}>
      {
        collaborators.map((c, index) => 
        <View key={index} style={{ paddingHorizontal: 4 }}>
           <Avatar
           size="80px"
            style={{ borderWidth: 3, borderColor:Colors.primaryColor } }    
            source={c.photo ? { uri: c.photo } : {}}
            />
            <TextApp.Default 
            fontWeight="bold"
            textAlign='center'
            value={c.name}
            />
            <TextApp.Default
            color={Colors.secondaryColor}
            textAlign="center"
            value={c.business.name}
            />
            <View style={{ backgroundColor:'black', height: 1, marginVertical: 2 }} />
            <TextApp.Default
            color={Colors.greyTextLight}
            textAlign="center"
            value={c.business.name}
            fontSize={10}
            />
        </View>)
      }
    </ScrollView>
  )
}




const AvailableBusiness = () => {
    return(
        <View style={styles.container}>
        
        <Text style={styles.greeting}>Servicio: Casa</Text>
        
       
          <Text style={{color: Colors.primaryColor, fontWeight:'bold', fontSize: 18 }}>Personas Destacadas</Text>
          <View>
          <HighlightCollaborators />
          </View>
          <Text style={{color: Colors.primaryColor, fontWeight:'bold', fontSize: 18 }}>14 empresas</Text>
          
          <BusinessList />
          
        </View>
    )
}

export default AvailableBusiness;