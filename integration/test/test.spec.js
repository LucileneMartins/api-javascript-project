
import * as request from '../../helper/request';
import * as endpoint from '../../helper/endpoint';
import api_env from '../../helper/api_env';
import statusCode from '../../helper/statuscode';

  describe('Request login api ', ()=>{
    it('Login', async () => {     

      const response = await request.logg(endpoint.mock,endpoint.mockBody);              
      expect(response.statusCode).toBe(statusCode.StatusCodeOK);      
      api_env.token = response.body.authentication_token;    
      console.log(response.body.authentication_token)
    })  

})




