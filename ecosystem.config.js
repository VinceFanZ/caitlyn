module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [{
    name: 'APP',
    script: 'index.js',
    max_memory_restart: '500M',
    out_file: 'out.log',
    error_file: 'error.log',
    instances: 1,
    env: {
      COMMON_VARIABLE: 'true'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

};