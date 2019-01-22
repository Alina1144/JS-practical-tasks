for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }
};
/*Что выведет консоль и почему?
Я: консоль выведет ошибку « Uncaught SyntaxError: missing ) after argument list» так как не хватает закрывающей скобки после console.log(i);*/
