const configs = {
    development: {
      SERVER_URI: 'http://localhost:8080',
    },
    production: {
      SERVER_URI: 'https://dulin-dis.herokuapp.com',
    },
  };
  
  module.exports.config = configs[process.env.NODE_ENV];