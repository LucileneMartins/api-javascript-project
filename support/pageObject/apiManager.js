import response from "../../helper/response";
import {requestInit} from "../../helper/request"
import STATUSCODE from "../../helper/statuscode"
const request = require('../../helper/request');


   function Login(url, endpoint,databody){

       requestInit(url,endpoint, databody)      
               
   }



   

export {
   Login
}
