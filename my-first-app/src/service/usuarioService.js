import  service from './service'


function authorizathion(email, password) {
    return  new Promise ((resolve, reject)=> {
        service.post('/login', {email, password})
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });

}

export default {
    authorizathion
}