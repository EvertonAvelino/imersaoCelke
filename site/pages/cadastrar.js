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
        try{
        //enviar dados para o banco de dados
        const res = await fetch('http://localhost:8080/metas', {
            method: 'POST',
            body: JSON.stringify(meta),
            headers: {'Content-Type':'application/json'}
        });
        const responseEnv = await res.json();
        if(responseEnv.error){
            console.log(responseEnv.message);
        }else{
            console.log('Dados cadastrados com sucesso');
        }
    }catch(err){
        console.log('erro ao enviar dados');

    }
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