function Initialize(config) {
    this.dbConfig = config.db;
    const mailServices = require('./src/mailservices')(dbConfig);
    
    return {
        mailServices : mailServices
    }
}

module.exports = Initialize;