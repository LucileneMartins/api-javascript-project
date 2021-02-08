
  class Response {
    constructor() {
      this.data = {};
    }
  
    get token() {
      return this.data.token;
    }
  
    set token(token) {
      this.data.token = token;
    }
  }
  
  const response = new Response();
  
  export default response;