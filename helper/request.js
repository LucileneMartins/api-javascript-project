import response from "./response";

var express = require('express');
var supertest = require('supertest');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

function requestInit(url, endpoint,paramsBody){                              
                supertest(url)
                .post(endpoint)
                .send(paramsBody)
                .set('Content-Type', 'application/json');              

}


export{
        requestInit
}