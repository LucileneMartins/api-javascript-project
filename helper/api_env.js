
  class API_ENV {
    
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
  
  const api_env = new API_ENV();
  
  export default api_env;