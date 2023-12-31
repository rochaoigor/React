import './index.css';

import {Link, useLocation} from 'react-router-dom';

function Menu() {
   
        if(useLocation().pathname !== '/login'){
            return (

                
                <div className="navbar">
                <ul className= 'menu'>


                    <li><Link to='/login'>Sair</Link></li>   
                    <li><Link to='/clientes'>Clientes</Link></li>
                    <li><Link to='/produtos'>Produtos</Link></li>
                    <li><Link to='/'>Home</Link></li>
                    
                </ul>
                </div>
            )
        }else {
            return null;
        }

    }

export default Menu;