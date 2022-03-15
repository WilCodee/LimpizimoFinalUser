
require('fast-text-encoding');
const appCodeServer = 'TPP3-EC-SERVER'
const appKeyServer = 'JdXTDl2d0o0B8ANZ1heJOq7tf62PC6'

function hash256(string) {
    const utf8 = new TextEncoder().encode(string)
    const h = crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
      return hashHex
    })
    const response = h.then(r => r)
    return response
}



export async function generateAuthToken(){
    let server_application_code = appCodeServer
    let server_app_key = appKeyServer
    let unix_timestamp = Math.floor(Date.now() / 100)
      // $unix_timestamp = "1546543146";
    let uniq_token_string = `${server_app_key}${unix_timestamp}`
    let uniq_token_hash = await hash256(uniq_token_string)
    //let auth_token = btoa(`${server_application_code};${unix_timestamp};${uniq_token_hash}`)
    //return auth_token
}