import  service from './service'

function authorizathion(email, senha){
    return new Promise((resolve, reject) => {
        service.post('/login', {email, senha})
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}



// validarUsuarioAutenticado();

export default {
    authorizathion
}