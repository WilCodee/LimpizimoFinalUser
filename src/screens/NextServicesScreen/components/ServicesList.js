import React from 'react'; 
import ServiceItem from './ServiceItem';

const ServicesList = ({navigation}) => {
    const services = [
        {
            address: {
                name: "Casa",
                firstStreet: "Matilde Álvarez",
                secondStreet: "Matilde Hidalgo",
            },
            colaborator: {
                fullName: "Roberta Sánchez",
                stars: 5
            },
            details: {
                date: "07/07/22 8am a 11am",
                cost: "28.00",
                limpiPuntos: 100
            }
        }
    ]

    return(
        services.map((service) => 
            <ServiceItem serviceData={service}  onPress={() => navigation.navigate('DetailService')} />
        )
    )
}

export default ServicesList