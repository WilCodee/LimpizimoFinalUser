import React, {useState} from 'react'; 
import {View, Text, Image, ScrollView, ImageBackground } from 'react-native'
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Touchable from 'react-native-platform-touchable';
import { strings } from '../../i18n';
import Images from '../../assets/images';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from 'react-native-elements';
import Colors  from '../../constants/colors'; 

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
                avatarStyle={{ borderWidth: 3, borderColor:Colors.$secondaryColor } }
                size={68}
                rounded
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
          
          <View style={{ position:'absolute', right: 0, top: "33%", backgroundColor: Colors.$secondaryColor, borderRadius: 50, padding:8   }}>
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
    <ScrollView horizontal contentContainerStyle={{ marginVertical: 16, marginLeft: 4 }}>
      {
        collaborators.map((c, index) => 
        <View key={index} style={{ paddingHorizontal: 4 }}>
           <Avatar
                avatarStyle={{ borderWidth: 3, borderColor:Colors.$primaryColor } }
                size={80}
                rounded
                source={c.photo ? { uri: c.photo } : {}}
            />
            <Text style={{ color: Colors.$primaryColor, fontWeight:'bold', textAlign:'center'  }} >{c.name}</Text>
            <Text style={{ color: Colors.$secondaryColor, textAlign:'center'  }} >{c.business.name}</Text>
            <View style={{ backgroundColor:'black', height: 1, marginVertical: 2 }} />
            <Text style={{ fontSize: 10, textAlign:'center', opacity: 0.5 }} >{`${c.distance}Km de distancia`}</Text>
        </View>)
      }
    </ScrollView>
  )
}




const AvailableBusiness = () => {
    const authInfo = useSelector(state => state.auth)

    const [dialogVisible, setDialogVisible] = useState(false);

    const _closePopup = () => {
        setDialogVisible(false);
      };

    return(
        <View style={styles.container}>
        <Dialog visible={dialogVisible} onTouchOutside={_closePopup}>
          <DialogContent style={styles.popupContainer}>
            <View style={styles.popupImgContainer}>
              <Image source={Images.cleaningLady} style={styles.popupImg} resizeMode="contain" />
              <Text style={styles.messagePopupText}>{strings('common.selectCleaningType')}</Text>
            </View>
            <View style={styles.lineSeparator} />
            <Touchable style={styles.popupTouchable} onPress={_closePopup}>
              <View style={styles.popupTextContainer}>
                <Text style={styles.okPopupText}>{strings('common.understood').toUpperCase()}</Text>
              </View>
            </Touchable>
          </DialogContent>
        </Dialog>
        <Text style={styles.greeting}>Servicio: Casa</Text>
        
       
          <Text style={{color: Colors.$primaryColor, fontWeight:'bold', fontSize: 18 }}>Personas Destacadas</Text>
          <View>
          <HighlightCollaborators />
          </View>
          <Text style={{color: Colors.$primaryColor, fontWeight:'bold', fontSize: 18 }}>14 empresas</Text>
          
          <BusinessList />
          
        </View>
    )
}

export default AvailableBusiness;