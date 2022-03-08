import React, { useState, useEffect } from 'react'
import { Image, View, Text } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import styles from './styles';
import { strings } from '../../i18n';
import { useSelector, useDispatch } from 'react-redux';
import Images from '../../assets/images';
import Touchable from 'react-native-platform-touchable';
import SelectApp from '../../components/SelectApp';
import ServicesList from './components/ServicesList';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonApp from '../../components/ButtonApp';
import { getData } from '../../utils/fetch/getData'


const NextServices = ({navigation}) => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const authInfo = useSelector(state => state.auth)
    const serviceInfo = useSelector(state => state.service)

    const [services, setServices] = useState([])

    const _openPopup = () => {
        setDialogVisible(true);
    };

    const _closePopup = () => {
        setDialogVisible(false);
    };


    const initialRequest = async () => {
        const currentUserId = authInfo.user._id['$oid']
        const servicesRequest = await getData(`services/getAllServicesByClientId/${currentUserId}`)
        if('error' in servicesRequest){
            console.info('Error!!!', servicesRequest.error)
            return; 
        }
        
        if(servicesRequest.OK){
            setServices(servicesRequest.data)
        }
    }

    useEffect(() => {
        initialRequest()
    }, [])


    return (
        <ScrollView>
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
            <Text style={styles.greeting}>{strings('common.greeting', { name: authInfo.user.name ?? "" })}</Text>


            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
                <Text style={styles.title}>Tus próximos servicios</Text>
            </View>

          
            <View style={{ margin: 16 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text>Mis Servicios</Text>
                    <Image source={Images.service1} style={{ width: 20, height: 40 }} resizeMode="contain" />
                    <View style={{ position: 'absolute', right: 4 }}>
                        <SelectApp.Default items={[{ label: "HOY", value: 1 }]} />
                    </View>
                </View>
                {
                    services.length > 0 && 
                    <ServicesList navigation={navigation}   />
                }
                {
                    services.length === 0 && (<>
                    <Text>Actualmente no tienes servicios</Text>
                    <ButtonApp.Default 
                        title="Nuevo Servicio" 
                        onPress={() => navigation.navigate('AskService')} 
                        marginTop={16}
                    /> 
                    </>
                    )
                }

                <Text style={{ ...styles.greenText, textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 16 }} >¿Qué incluye los servicios?</Text>
                <Text style={{ textAlign: 'center' }}>Descubre los detalles de los servicios que las colaboradoras harán en tu hogar u oficina</Text>


                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }} >
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={Images.greenNormalCleaning} style={{ width: 150, height: 90 }} resizeMode="contain" />
                        <Text style={styles.purpleText} >LIMPIEZA</Text>
                        <Text style={{ ...styles.purpleText, fontWeight: 'bold' }} >NORMAL</Text>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={Images.greenNormalCleaning} style={{ width: 150, height: 90 }} resizeMode="contain" />
                        <Text style={styles.purpleText} >LIMPIEZA</Text>
                        <Text style={{ ...styles.purpleText, fontWeight: 'bold' }} >PROFUNDA</Text>
                    </View>
                </View>

                <View style={{ ...styles.cuponContainer, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 16, borderRadius: 25 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }} >CUPÓN: LIMPIA 2022</Text>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }} >20% DE DESCUENTO</Text>
                    <Text style={{ color: 'white', fontStyle: 'italic' }} >En tu siguiente servicio</Text>
                </View>

                <View style={{marginTop: 12}}>
                    <Text style={{ ...styles.greenText, textAlign:'center', fontWeight:'bold', fontSize:18}}>Invitar amigos</Text>
                    <Text style={{  textAlign:'center', color:'gray' }}>Invita al mejor servicio de limpieza y obtén beneficios</Text>
                </View>

                <View style={{...styles.cuponDetails, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 16, borderRadius: 25}}>
                    <View style={{ flexDirection:'row' }}>
                        <Image source={Images.trust3} style={{width: 40, height: 40}} resizeMode="contain" />
                        <Text style={{color:'white', fontSize: 16, fontWeight:'bold'}}>LIMPIASEGURO</Text>
                    </View>

                    <Text style={{textAlign:'center', color: 'white', fontSize: 12}}>Cuando tus amigos, ingresen el código, obtendrán
                    $5.00 en su primer servicio, y te daremos el mismo valor
                    en tu próximo servicio en tu cuenta.</Text>
                </View>

                <ButtonApp.Default 
                    title="Invitar amigos" 
                    onPress={() => alert('Característica en desarrollo')} 
                    marginTop={16}
                />
            </View>
           
        </View>
        </ScrollView>
    )
}

export default NextServices;


