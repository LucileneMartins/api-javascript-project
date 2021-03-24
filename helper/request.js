var express = require('express');
var supertest = require('supertest');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

import * as header from './header'
import api_env from './api_env'

function logg(url, endpoint, body){
        const response =  supertest(url)
        .post(endpoint)
        .send(body)
        .set(header.configHead)  
  
        return response;     
}
function get(url, endpoint,body){      
        const _body = body || ""  
        const response =  supertest(url)
        .get(endpoint) 
        .send(_body)
        .set({'Authorization': 'Token token=' +  api_env.token})  
        .set(header.configHead)  
  
        return response;     
}

function post(url, endpoint, body){
        const response =  supertest(url)
        .post(endpoint)
        .send(body)
        .set({'Authorization': 'Token token=' +  api_env.token})  
        .set(header.configHead) 
  
        return response;     
}


export{
        logg,
        get,
        post
        
}