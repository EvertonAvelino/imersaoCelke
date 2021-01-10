import React,{useState} from 'react';

function Cadastrar(){

    const [meta,setMeta] = useState({
        name:'',
        description:'',
        status:'',
    });
    const onChangeInput = e => setMeta({...meta,[e.target.name]:e.target.value})
    const sendMeta = async e =>{
        e.preventDefault();
        console.log(meta);
    }

    return (
    <div>
        <h1>Cadastrar minha meta</h1>
        <hr/>
        <form onSubmit = {sendMeta}>
            <label>Nome </label>
            <input type ="text" name ="name" id="name" placeholder="nome da meta" onChange={onChangeInput}/>
            <br></br>
            <label>Descrição </label>
            <input type ="text" name ="description" id="description" placeholder="descrição" onChange={onChangeInput}/>
            <br></br>
            <label>Status </label>
            <input type ="text" name ="status" id="status" placeholder="status:iniciada ou pendente" onChange={onChangeInput}/>
            <br></br>
            <br></br>
            <button type ="submit">Cadastrar</button>
        </form>
    </div>
    
    );
}
export default Cadastrar;