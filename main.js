// USAMOS O $ PARA CHAMAR O jQuery

$(document).ready(function(){
    $('header button').click(function(){ //essa função com jQuery é igual à de cima
        $('form').slideDown(); //efeito de expandir o formulário
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp(); //efeito de retrair o formulário
    })

    $('form').on('submit', function(e){ //função para prevenir a recarga da página ao enviar o formulário
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //pegando valor do elemento por id (LEMBRAR DE USAR O ####)
        const novoItem = $('<li style="display: none"></li>'); //display none para podermos aplicar o efeito de fadeIn
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); //pegamos o elemento entre crases e o colocamos dentro do li
        
        // isso tudo é 1 linha de código
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); //função para fazer as imagens novas entrarem com uma transição em milisegundos
        $('#endereco-imagem-nova').val(''); //Limpando o campo do formulário
    })
})