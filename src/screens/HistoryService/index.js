import React from 'react'
import styles from './styles'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import {  Icon,Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const HistoryService = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.backButton}>
                    <Icon
                        onPress={() => navigation.navigate('Home')}
                        name='chevron-back-outline'
                        type='ionicon'
                        color='white'
                    />
                </View>
                <Icon
                    size={60}
                    name='newspaper-outline'
                    type='ionicon'
                    color='white'
                />
                <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}>Historial de servicios</Text>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12 }}>Revisa el historial de los servicios realizados</Text>

                <View style={styles.card}>
                    <View style={{flexDirection:'row', width:'100%'}}>

                    <Text style={{flex:1, color: '#767676', alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 18, marginTop: 20,marginLeft:20 }}>Mis servicios</Text>
                    
                        <View style={{borderRadius:50,backgroundColor:'#767676',flexDirection:'row',height:20,width:100,marginRight:20,marginTop:20}}>

                        <Text style={{ textAlign:'right', color: 'white', fontWeight: 'bold', fontSize: 12,paddingTop:1,marginRight:15,paddingLeft:5 }}>
                            Anteriores
                        </Text>
                            <Icon
                            size={20}
                            name='chevron-down-outline'
                            type='ionicon'
                            color='white'
                            
                        />
                        </View>
                    </View>
                   <View style={{backgroundColor:'#5f2490',width:'92%',marginLeft:15,borderRadius:50,flexDirection:'row'}}>
                        <View style={{marginTop:5,paddingLeft:5}}>
                        <Avatar
                            
                            size={45}
                            rounded
                            source={{
                            uri:
                                'https://cdn.iconscout.com/icon/free/png-64/avatar-369-456321.png'
                            }}
                        />
                        </View>
                        <View style={{paddingLeft:10}}>
                        <Text style={{fontSize:12,color:'white',fontWeight:'bold'}}>Roberta Sanchez</Text>
                        <Text style={{fontSize:12,color:'white',fontWeight:'bold'}}>1/13/20 8am a 11am</Text>
                        <Text style={{fontSize:12,color:'white',fontWeight:'bold'}}>100 Limpipuntos</Text>
                        </View>
                        
                        <View style={{alignSelf:'center',paddingLeft:50}}>
                        
                        <Text style={{fontSize:14,color:'white'}}>U$D 28.00</Text>
                        <View style={{flexDirection:'row'}}>
                        <Icon
                                size={15}
                                name='star'
                                type='ionicon'
                                color='white'
                            />
                        <Icon
                                size={15}
                                name='star'
                                type='ionicon'
                                color='white'
                            />
                        <Icon
                                size={15}
                                name='star'
                                type='ionicon'
                                color='white'
                            />
                        <Icon
                                size={15}
                                name='star'
                                type='ionicon'
                                color='white'
                            />
                        <Icon
                                size={15}
                                name='star'
                                type='ionicon'
                                color='white'
                            />
                        </View>
                        </View>

                        <View style={{alignSelf:'center'}}>
                            <Icon
                                size={30}
                                name='arrow-forward-outline'
                                type='ionicon'
                                color='white'
                                onPress={() => navigation.navigate('DetailService')}
                            />
                        </View>
                   </View>
                   
                </View>

            </View>
        </ScrollView >


    )
}

export default HistoryService