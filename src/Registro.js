import React from 'react';
import {Label, Button, Form, FormGroup, Input} from 'reactstrap';
function Registro(){
    return(
     <div>
      <form inline className='formulario'>
       <FormGroup id='mudanca'className='mr-2 mr-sm-2 mb-sm-0'>
           <label for='email' className='mr-sm-2'>Email:</label>
           <input type='text' name='email' id='email' placeholder='Entre com o email' />
       </FormGroup>
       <FormGroup>
           <label for='senha' className='mr-sm-2'>Senha:</label>
           <input type='password' name='senha' id='email' placeholder='Entre com a senha'/>
       </FormGroup>
       <button>Cadastrar</button>
      </form>
     </div>
    );
}
export default Registro;