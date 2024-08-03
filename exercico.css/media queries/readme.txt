Responsividade & Media Querie

## Responsividade
A responsividade de tela é a capacidade de se adaptar a diferentes dispositivos e diferentes tamnahos de tela.

## Media Queries
É um recurso CSS que permite aplicar diferentes estilos em diferentes tamanhos de telas, tornando o site responsivo.

## Red Flag

1° width definido em PX pixel limita sua Responsividade, pois esse valor fixo nao sera redimencionado quando as telas forem menores.

### Mobile First
é uma tecnica de desenvolvimento onde iremos pensar primeiro em layout para dispositivos menores e depois adaptarmos para telas maiores.

## Adicionando media Querie 

o @media serve para adicionar parametros que so seram seguidos quando o valor em () for alcançado.
nesse caso as regras so seram validas quando o tamanho da tela for 1024px. tecnica conhecida como break points. 
conhecidos por serem pontos onde o layout do nosso site vai mudar por conta do tamanho da tela, nesse caso o layout mudará quando a tela atingir 1024px.
# O mesmo foi feito para tablets adicionando um min-width de 768px, será apresentado um layout diferente do desktop e do Mobile.