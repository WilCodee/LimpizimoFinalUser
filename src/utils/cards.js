export function all(paymentezAuthToken, customerId){
    const options = {
        headers:{
            "Auth-Token": paymentezAuthToken, 
            "Content-type": "application/json"
        }
    }
    
    const request = fetch(`https://ccapi-stg.paymentez.com/v2/card/list?uid=${customerId}`, options)
    const json = request.then(response => response.json())
    return json;
}


export function remove(paymentezAuthToken, data){
    const options = {
        method: "POST",
        headers:{
            "Auth-Token": paymentezAuthToken, 
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const request = fetch(`https://ccapi-stg.paymentez.com/v2/card/delete/`, options)
    const json = request.then(response => response.json())
    return json;
}


export function debitWithToken(paymentezAuthToken, data){
    const options = {
        method: "POST",
        headers:{
            "Auth-Token": paymentezAuthToken, 
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const request = fetch(`https://ccapi-stg.paymentez.com/v2/transaction/debit/`, options)
    const json = request.then(response => response.json())
    return json;
}