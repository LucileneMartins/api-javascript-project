const response = require('../response');

const CONFIG_HEADER = {
    'ContentType' : 'application/json',
    'Accept' : 'version=1'

}

const  CONFIG_HEADER_TOKEN =  {
    'Authorization': 'Token token='+response.getToken()            
 }


 
 export{
    CONFIG_HEADER,
    CONFIG_HEADER_TOKEN
}