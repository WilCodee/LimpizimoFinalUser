const Config = {
    URL_API: 'https://limpizimo-backend-staging.rj.r.appspot.com/'
}

export function getData(endPoint){
    /*
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
    }
    */
    const request = fetch( `${Config.URL_API}${endPoint}`)
    const json = request.then(response => response.json())
    return json;
}