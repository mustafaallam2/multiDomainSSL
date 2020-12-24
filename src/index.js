const app = require('./app')
const path = require('path')
const glExpress = require("greenlock-express")
const { execSync } = require('child_process');

/**
 * generate config file and add sites
 */  
execSync('npx greenlock add --subject test.mustafaallam.com --altnames test.mustafaallam.com')
execSync('npx greenlock add --subject test2.mustafaallam.com --altnames test2.mustafaallam.com')

/**
 * start serving the expressapp
 */ 
glExpress
.init({
    packageRoot: path.join(__dirname,'../'),
    configDir: "./greenlock.d",
    maintainerEmail: "me@mustafaallam.com",
    cluster: false
})
.serve(app);



