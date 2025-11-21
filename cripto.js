// npm i bcrypt
import bcrypt from "bcrypt";



// function gerarCripto() {
//     const senha1 = "1234567";

//     const salt = bcrypt.genSaltSync(1);//Geração de um "sal" com custo de processamento 1
//     const senhaCriptografada = bcrypt.hashSync(senha1, salt);

//     console.log(senhaCriptografada)

// };

// function validarCripto() {
//     const senha1 = "1234567";
//     const senhaDigitada = "1234567";

//     const salt = bcrypt.genSaltSync(1);
//     const senhaCriptografada = bcrypt.hashSync(senha1, salt);

//     const saoIguais = bcrypt.compareSync(senhaDigitada, senhaCriptografada);

//     console.log(saoIguais);
// };




    const senha1 = "1234567";
    const salt = bcrypt.genSaltSync(1);    
    const senhaCriptografada = bcrypt.hashSync(senha1, salt);
    //$2b$04$i6N4RQt0U4vyytHdAVS.xuDr9yFQ9YszOenW8K1K9HwFOqRdMJ8OK

    // console.log(senhaCriptografada);
    // guardamos então a senha criptografada no banco de dados

    const senhaDigitada = "1234567";


    // esse textão criptofado nasceu do senha1. O que ele significa? Não sei, mas é o que tá no banco de dados. Daí eu pego ele, com base no nome do usuário, e a biblioteca faz a comparação pra mim
    const saoIguais = bcrypt.compareSync(senhaDigitada, '$2b$04$i6N4RQt0U4vyytHdAVS.xuDr9yFQ9YszOenW8K1K9HwFOqRdMJ8OK');

    console.log(saoIguais);


//gerarCripto();
//validarCripto();