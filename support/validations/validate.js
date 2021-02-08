import STATUSCODE from '../../helper/statuscode'

function error404(response){
    expect(response).to.be.equal(STATUSCODE.StatusCodeNotFound);

}

function error500(response){
    expect(response).to.be.equal(STATUSCODE.StatusCodeBadRequest);

}

function statusOK(response){
    expect(response).to.be.equal(STATUSCODE.statusOK);
}


export {
    error500,
    error404,
    statusOK
    
}