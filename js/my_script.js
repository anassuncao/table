/*
Explicação da lição:

Usamos esta função para garantir que o documento já foi carregado/lido/rendered no browser antes de o começarmos a manipular. 
É má prática começar directamente a manipular um documento sem ter a certeza que já está todo carregado.

$(document).ready(function(){
    $("h2").css("text-decoration", "underline");
    $("ul").css("border", "solid 1px #ccc");
})

O código acima permite manipular o documento mas adiciona os estilos css inline, o que não é boa prática.
Assim, a solução é irmos ao nosso ficheiro css (que neste caso está dentro de uma <script></script> no html e
adicionarmos duas classes (ver ficheiro table.html) que nos permite depois fazer o mesmo usando o seguinte código:*/

$(document).ready(function(){
    $("h2").addClass("underline");
    $("ul").addClass("border");
})