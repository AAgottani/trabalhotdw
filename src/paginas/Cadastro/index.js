import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//e-mail, senha, nome, sobrenome e data de nascimento

class Cadastro extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>Cadastro</h1>
            <form>
            <label>Email</label>  
            <br/> 
            <input type="text" size="20" name="email"/>
            <br/> 
            <label>Password</label> 
            <br/>  
            <input type="text" size="20" name="Password"/>
            <br/> 
            <label>Nome</label>  
            <br/> 
            <input type="text" size="20" name="Nome"/>
            <br/> 
            <label>Sobrenome</label>  
            <br/> 
            <input type="text" size="20" name="Sobrenome"/>
            <br/> 
            <label>Data de Nascimento</label> 
            <br/>  
            <input type="text" size="20" name="Nascimento"/>
            <br/> 
            </form>
            <br/> 
            <button>Cadastrar</button>
            <>      </>
            <Link to="/"><button>Home</button></Link>
            
        </div>
      )
    }
}

export default Cadastro;