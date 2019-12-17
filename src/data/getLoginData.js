
export default (username, password) => {
   
    const data = require('../data/loginData.json');

    return data.login.filter(element => username === element.username && password === element.password);           
};