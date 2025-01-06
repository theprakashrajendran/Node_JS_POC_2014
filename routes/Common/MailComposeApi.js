var nodemailer = require("nodemailer");

// Mail sending
var transporter = nodemailer.createTransport();

exports.MailSend = function (Vcode, username, MailType) {
    var hlink = username + '/' + Vcode;
    
    if (MailType == 'Registration') {
        var mailcontent = "Dear " + username + ",<br/><br/>We are pleased to advise that you have been added as a Registered User to CricketSocial. Please read the following information carefully and be sure to save this message in a safe location for future reference.";
        mailcontent = mailcontent + "<br/><br/>Portal Website Address: www.crickesoical.com";
        mailcontent = mailcontent + "<br/>Username: " + username;
        mailcontent = mailcontent + "<br/><br/>You can use the following link to complete your verified registration:"
        mailcontent = mailcontent + "<br/><a target='_blank' href=http://localhost:1337/VerifyUser/" + hlink + ">" + "http://localhost:1337/VerifyUser/" + hlink + "</a><br/><br/>Thank you, we appreciate your support...<br/>CricketSocial";
    }
    else if (MailType == 'ForgotPassword') {
        var mailcontent = "Dear " + username + ",<br/><br/>You have requested a Password Reset Token from CricketSocial.";
        mailcontent = mailcontent + "<br/>Please login using the following information:";
        mailcontent = mailcontent + "<br/><br/>Website Address: www.cricketsocial.com";
        mailcontent = mailcontent + "<br/>Username: " + username;
        mailcontent = mailcontent + "<br/><br/>Link to reset password:";
        mailcontent = mailcontent + "<br/><a target='_blank' href=http://localhost:1337/ForgetresetPassword/" + hlink + ">" + "http://localhost:1337/ForgetresetPassword/" + hlink + "</a>";
        mailcontent = mailcontent + "<br/><br/>Sincerely";
        mailcontent = mailcontent + "<br/>CricketSocial";
        mailcontent = mailcontent + "<br/><br/><br/>* Note: If you did not request a Password Reset Token, please disregard this Message";
    }
    else if (MailType == 'ProfileSuccess') {
        var mailcontent = "Dear " + username + ",<br/><br/>Your Profile has been updated successfully";
        mailcontent = mailcontent + "<br/><br/>Sincerely";
        mailcontent = mailcontent + "<br/>CricketSocial";
    }
    return mailcontent;
};


exports.InternetService = function (to, subject, html) {
    transporter.sendMail(
        {
            service: '192.168.2.20',
            auth: {
                user: "narendra.kumar@hexacorp.com",
                pass: "Naren123"
            }
        });
    // console.log('SMTP Configured');
    var mailOptions = {
        from: 'narendra.kumar@hexacorp.com',  
        to: to, 
        subject: subject,
        html: html , 
    //html: 'Please Join In Cricket Social'
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
}


/* call mailsend api from other api
 * 
 *  var html1 = MailSend(results[0][0].PasswordResetCode, emailid , "ForgotPassword");
                InternetService(emailid, "CricketSocial Password Reminder", html1);  */
