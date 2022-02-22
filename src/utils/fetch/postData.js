const Config = {
    URL_API: 'https://limpizimo-backend-staging.rj.r.appspot.com/'
}

export function postData(endPoint, data){
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }   
    const request = fetch( `${Config.URL_API}${endPoint}`, options)
    const json = request.then(response => response.json())
    return json;
}