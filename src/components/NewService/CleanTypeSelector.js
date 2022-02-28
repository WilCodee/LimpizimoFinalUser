import React, {useContext} from 'react'; 
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import Images from '../../assets/images'
import colors from '../../constants/colors';
import { NewServiceContext } from '../../context/NewServiceContext';

const cleanTypes = [
    {
        id: 1,
        title: "NORMAL",
        image: Images.normalCleaning
    },
    {
        id: 2,
        title: "PROFUNDA",
        image: Images.deepCleaning,
    }
]

const CleanOptions = () => {
    const { service, setCleanType } = useContext(NewServiceContext)
    return(
        cleanTypes.map((cleanType) => 
        <TouchableOpacity onPress={() => setCleanType(cleanType.id)} activeOpacity={1} >
            <View style={{
                ...styles.cleaningImageContainer,
                backgroundColor: service.cleanType.id === cleanType.id ? colors.secondaryColor : 'transparent',
                transform: [...styles.cleaningImageContainer.transform, { scale: service.cleanType.id === cleanType.id ? 1.2 : 1 }],
            }}>
            <Image style={styles.cleaningImage} source={cleanType.image} resizeMode="contain" />
            </View>
            <View style={{marginTop: 8}}>
            <Text style={styles.cleaningText}>Limpieza</Text>
            <Text style={{...styles.cleaningText, fontWeight: 'bold' }}>{cleanType.title}</Text>
            </View>
        </TouchableOpacity>
        )
    )
}


const CleanTypeSelector = () => {
    return(
        <View style={styles.mainContainer}>
           <CleanOptions />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 100,
        marginVertical: 16
    },
    cleaningImageContainer: {
        height: 65,
        width: 65,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 38,
        borderColor: colors.mainColorLight,
        borderWidth: 3,
        transform: [{ perspective: 1000 }],
    },
    cleaningImage: {
        height: 36,
        width: 36,
    },
    cleaningText: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    }
})

export default CleanTypeSelector; 