const assert = require('assert');
const axios = require('axios');
const indentPayload = require('../data/indent-creation');

class IndentCreation {
  static async login(email,password,url) {
    this.url=url;
    const axiosInstance = axios.create({
      baseURL: url,
    });


    const payload = {
      data:{
        email:email,
        password:password,
      }
    }
    const response = await axiosInstance.put('api/login',payload);
    
    // console.log(response);
    // this.setVariable("headers",response.headers['x-auth-token']);
    this.headers=response.headers['x-auth-token'];
    console.log(this.headers);
    return true;
  }





  static async createIndent() {
    console.log("=======testing==============",this.headers);
    const axiosInstance = axios.create({
      baseURL: this.url,
    });

    
  
    const response = await axiosInstance.post('api/order/v1/',indentPayload,{headers:this.headers});
    console.log(response);
    
    // console.log(this.headers);
    return true;
  }
}




























const { Given, When, Then } = require('@cucumber/cucumber');
AsdfsfsdfnkjsfdkjsdksdfkjsdsdfjasdkfjsdfjsfdksfdjksfAsdfsfsdfnkjsfdkjsdksdfkjsdsdfjasdkfjsdfjsfdksfdjksfdjdj

Given('user enters username {string} and password {string} with URL {string}', async function (email,password,url) {
console.log(email,password,url);
await IndentCreation.login(email,password,url);
return true;

});

Then ('create an indent with preset payload',async function(){
  await IndentCreation.createIndent();
  return true;
});
         