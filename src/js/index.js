/*
    OBJETIVO 1 - Quando o mouse passar em cima do personagem
    temos que :
    
    - colocar a classe selecionado no personagem que passamos
     o mouse em cima para adicionar a animação nele
    -  retirar a classe selecionado do personagem que 
    está selecionado

     -----------------------------------------------------------

    OBJETIVO 2 -  Quando passar o mouse em cima do personagem,
    trocar a imagem e nome do personagem grande

    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/

    const personagens = document.querySelectorAll('.personagem')

    personagens.forEach((personagem) => {
        personagem.addEventListener('mouseenter', () => {

     const idSelecionado = personagem.attributes.id.value;
     
     if(idSelecionado === 'ultron') return;

        /* OBJETIVO 1 - Quando o mouse passar em cima do personagem
        temos que :
        
        - colocar a classe selecionado no personagem que passamos
        o mouse em cima para adicionar a animação nele

        -  retirar a classe selecionado do personagem que 
        está selecionado
        */



        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        /* OBJETIVO 2 - Quando passar o mouse em cima do personagem,
        da lsitagem,trocar a imagem e nome do personagem grande
    
        - alterar a imagem do jogador 1

        - alterar o nome do jogador 1
        */
        
    
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomejogador1 = document.getElementById('nomejogador1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        
        nomejogador1.innerHTML = nomeSelecionado; 

        musica.play();
    })
})


