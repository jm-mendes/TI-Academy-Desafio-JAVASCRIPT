    //Objeto com a lista de frutas a ser inserida dinamicamente;
    
    let listaFrutas = [ //objeto
        { descricao: 'Banana', preco: 4.50 },
        { descricao: 'Morango', preco: 8.50 },
        { descricao: 'Melancia', preco: 6.99 },
        { descricao: 'Laranja', preco: 5.60 },
        { descricao: 'Goiaba', preco: 7.20 },
        { descricao: 'Limão', preco: 8.90 },
    ]

    let cestaCliente = [];
    const ulListaFrutas = document.querySelector("#produtos");
    var ulCestaDoCliente = document.querySelector("#cestaDoCliente");
    const valorResultado = document.querySelector("#mostraTotalCompra");
    let totalCompras = 0;

    //Função autoexecutável que adiciona lista de frutas na ul #produtos 
    function listarFrutas(listaFrutas) {
        for (let lista of listaFrutas) {
            const filhoLi = document.createElement('li');
            for (let listaP in lista) {
                if (listaP == 'preco') {
                    ulListaFrutas.appendChild(filhoLi).setAttribute('data-preco', lista[listaP]);
                } else {
                    ulListaFrutas.appendChild(filhoLi).textContent = `${lista[listaP]}`;
                }
            }
        }

    };

    function adicionarCestaCliente() {
        const listaProduto = document.querySelectorAll(`#produtos >li`);
        let filhoLi = document.createElement('li');

        for (let produto of listaProduto) {
            produto.addEventListener('click', function () {
                if (cestaCliente.indexOf(produto) == -1) {
                    cestaCliente.push(produto);
                    filhoLi = document.createElement('li');
                    ulCestaDoCliente.appendChild(filhoLi).textContent = produto.textContent
                    totalCompras += Number(produto.dataset.preco);
                    valorResultado.value = totalCompras.toFixed(2);
                } else {
                    alert(`A fruta ${produto.textContent} já existe na lista`)
                }
            });
        }
    };


export {adicionarCestaCliente, listarFrutas, listaFrutas};