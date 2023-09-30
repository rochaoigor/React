import {useState} from 'react';
import Swal from 'sweetalert2'
import './login.css';
import usuarioService from '../../service/usuarioService';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

  const logIn = () =>  {
   if(!email || !password) {
    Swal.fire({
        icon: 'error',
        text: 'Os campos de e-mail e senha são obrigatórios'
      })

      return;
   }
   
   usuarioService.authorizathion(email, password)
   .then(response => 
    console.log(response))
  }

    return (
        <div className="form-login">
        <div className="title-login">
            <h1>Login</h1>
        </div>

        <div className="box">
            <label for="email">E-mail:</label><br/>
            <input value={email} onChange= {(e)=> setEmail(e.target.value)}name="email" type="text" id="email"/>
            <span className="errorMessage"></span>
        </div>

        <div class="box">
            <label for="passWord">Senha:</label><br/>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} name="password" type="password" id="passWord"/>
            <span className="errorMessage"></span>
        </div>
        
     

        <div className="btn-access">
            <button type="button"  onClick={logIn}id="btn-entry">Entrar</button>
        </div>
    </div>

    )
}

export default Login;