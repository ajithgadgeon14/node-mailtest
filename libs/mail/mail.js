// "use strict";
const nodemailer = require("nodemailer");

async function main(mailDetailsJson, mailCredentials) {
  let testAccount = await nodemailer.createTestAccount();

  var transporter = nodemailer.createTransport(mailCredentials);

  //  var transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //          user: 'testgadgeonmail@gmail.com',
  //          pass: 'gadgeon123'
  //      }
  //  });

   //------------------------------
   var hbs = require('nodemailer-express-handlebars');   
    const handlebarOptions = {
      viewEngine: {
        extName: '.hbs',
        partialsDir: 'views',
        layoutsDir: 'views',
        // defaultLayout: 'simplemail.hbs',
        defaultLayout: mailDetailsJson.template+'.hbs',
      },
      viewPath: 'views',
      extName: '.hbs',
    };

    transporter.use('compile', hbs(handlebarOptions));
    var inlineBase64 = require('nodemailer-plugin-inline-base64');
    transporter.use('compile', inlineBase64({cidPrefix: 'somePrefix_'}));
   //------------------------------

   try {
    let info = await transporter.sendMail(mailDetailsJson);
  } catch (e) {
    throw e;
  }

  // console.log("Message sent: %s", info.messageId);
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // return info;
  return;
}

function callSendMail(mailDetailsJson,mailCredentials){
  return main(mailDetailsJson,mailCredentials).catch((err) => {
      console.log(err)
      throw err;
  });
}

module.exports = { callSendMail  };
