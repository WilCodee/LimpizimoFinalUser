const Config = {
    URL_API: 'https://limpizimo.com/'
}

export function postData(endPoint, data){
    console.log('data', data)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }   
    const request = fetch( `${Config.URL_API}${endPoint}`, options)
    request.catch((error)=> console.log('e', error))
    const json = request.then(response => response.json())
    return json;
}