function Home({data}) {
    return (
    <div>
      <h1>Minhas metas</h1>
      <hr/>
      {
        data.metas.map(meta=>(
          <div key="{meta.id}">
            <h2>meta : { meta.name}</h2>
            <p>descrição:{ meta.description}</p>
            <p>status: { meta.status}</p>
            <hr/>
          </div>
        ))
      }
    </div>
    
    );

  }
  // realiza conexão com a api
  export async function getServerSideProps() {
    const response = await fetch(`http://localhost:8080/metas`);
    const data = await response.json();
    //console.log(data);
    return { props: { data } };
}
  
  export default Home;