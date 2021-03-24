import api_env from './api_env';

const configHead = {
    'ContentType' : 'application/json',
    'Accept' : 'version=1'

}

const configHeadToken = {'Authorization': 'Token token=' +  api_env.token}

 
 export{
    configHead,
    configHeadToken
}