function mailServices(config) {
    this.jwtSecret = config.jwtSecret
    this.jsonFileDataContent = config.jsonFileData;
    this.mailCredentials = config.mailCredentials;

    const { Validator } = require('node-input-validator');
    const mail = require('../libs/mail/mail');

    var mailServices = {}

    mailServices.sendMail = (mailDetailsJson) => {
        // console.log("--2---");
        return mail.callSendMail(mailDetailsJson,this.mailCredentials);
    }


    return mailServices
}

module.exports = mailServices