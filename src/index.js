const Greenlock = require('greenlock');
const pkg = require('../package.json');
const acmeDnsCloudflare = require('acme-dns-01-cloudflare');
const app = require('./app')

require("greenlock-express")
.init({
    packageRoot: __dirname,
    configDir: "./greenlock.d",

    maintainerEmail: "me@mustafaallam.com",

    cluster: false
})

// Serves on 80 and 443
// Get's SSL certificates magically!
.serve(app);



// // challenges 
// const http01 = require('le-challenge-fs').create({ webrootPath: '/tmp/acme-challenges' });
// const cloudflareDns01 = new acmeDnsCloudflare({
//     // use the token genetared from cloud flare here
//     token: 'xxxxxx',
//     verifyPropagation: true,
// });

// function approveDomains(opts, certs, cb) {
//     // This is where you check your database and associated
//     // email addresses with domains and agreements and such
   
//     // i don't want to get any updates or emails
//     opts.communityMember = false;
   
//     // If you wish to replace the default challenge plugin, you may do so here
//     opts.challenges = { 'http-01': http01 };
   
//     // The domains being approved for the first time are listed in opts.domains
//     // Certs being renewed are listed in certs.altnames
//     if (certs) {
//       opts.domains = certs.altnames;
//     }
//     else {
//       opts.email = 'me@mustafaallam.com';
//       opts.agreeTos = true;
//     }
   
//     // NOTE: you can also change other options such as `challengeType` and `challenge`
//     // opts.challengeType = 'http-01';
//     // opts.challenge = require('le-challenge-fs').create({});
   
//     cb(null, { options: opts, certs: certs });
//   }

  
  


// const greenlock = Greenlock.create({
//     packageAgent: pkg.name + '/' + pkg.version,
//     configDir: "./store",
//     packageRoot: __dirname,
//     maintainerEmail: "me@mustafaallam.com"
// });
 
// greenlock.manager.defaults({
//     agreeToTerms: true,
//     subscriberEmail: "example@example.com",
//     store: {
//         module: "greenlock-store-fs",
//         basePath: "./store/certs"
//     },
//     challenges: {
//         "dns-01": cloudflareDns01
//     }
// }).then((fullConfig)=>{
//     console.log('fullConfig',fullConfig)
// })
 
// greenlock.add({
//     subject: "example.com",
//     altnames: ["example.com", "www.example.com"]
// }).then(function(){
//     console.log("SUCCESS");
// }).catch(console.error);