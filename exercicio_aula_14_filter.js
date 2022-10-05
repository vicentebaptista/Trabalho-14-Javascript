let filtroNome = document.getElementById("boxSearch");
let botaoPesquisar = document.getElementById("btnPesquisar");
let botaoLimpar = document.getElementById("btnLimpar");
onload = funcaoLimpar;
const listaUsuarios = [
    {
        id:1,
        nome:"Thiago Pereira",
        sexo:"Masculino",
        idade:20,
        email:"fulanodetal@termail.com",
    },
    {
        id:2,
        nome:"Thaís Lins",
        sexo:"Feminino",
        idade:19,
        email:"thaisdetal@gtemail.com",
    },
    {
        id:3,
        nome:"Mariana Ferreira",
        sexo:"Feminino",
        idade:25,
        email:"marianaferreira@tailme.com",
    },
    {
        id:4,
        nome:"Pedro Ivo Silva",
        sexo:"Feminino",
        idade:28,
        email:"manuelatrait@gteprmail.com",
    }
];
    function funcaoLimpar(){
    document.getElementById("resultado").innerHTML = ""; 
    listaUsuarios.forEach(function(item) {
    document.getElementById("resultado").innerHTML += `<tr>
            <th>${item.id}</th>
            <th>${item.nome}</th>
            <th>${item.sexo}</th>
            <th>${item.idade}</th>
            <th>${item.email}</th>
        </tr>`;
})};

function itemPesquisado(){
    let textoinserido = filtroNome.value;
    let validaCampo = listaUsuarios.filter(function(item){
        return item.sexo == textoinserido || item.id == textoinserido || item.nome == textoinserido || item.email == textoinserido || item.idade == textoinserido
    })
    validaCampo.forEach(function(item){
        document.getElementById("resultado").innerHTML = `<tr>
            <th>${item.id}</th>
            <th>${item.nome}</th>
            <th>${item.sexo}</th>
            <th>${item.idade}</th>
            <th>${item.email}</th>
        </tr>`;
        filtroNome.value = "";
    }
    )
    if (validaCampo == ""){
        document.getElementById("resultado").innerHTML = `<span>${"Item não encontrado"}</span>`
        filtroNome.value = "";
    }
}
    
;




botaoPesquisar.addEventListener("click",itemPesquisado)
botaoLimpar.addEventListener("click", funcaoLimpar)
