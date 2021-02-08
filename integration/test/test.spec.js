
import * as apimanager from '../../support/pageObject/apiManager';

  describe('Request login api ', ()=>{
    it('login', function (done){    
        apimanager.Login("https://run.mocky.io","/v3/734e3479-b9e9-4f10-a53b-e9f3827e7a2e","")
        done();
    })

})




