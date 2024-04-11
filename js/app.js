let totalGeral;
limpar();


function adicionar(){
// recuperar valores, nome do produto, qualidade e valor

let produto = document.getElementById('produto').value; 
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
// calcular o preço, o subtotal

let preco = quantidade * valorUnitario;
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul"> ${quantidade} - </span> ${nomeProduto} - <span class="texto-azul"> R$ ${preco},00 </span>
</section>`;

totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral},00`;
document.getElementById('quantidade').value;




}


function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';
}

