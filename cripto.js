// npm i bcrypt
import bcrypt from "bcrypt";



function gerarCripto() {
    const senha1 = "1234567";

    const salt = bcrypt.genSaltSync(1);//Geração de um "sal" com custo de processamento 1
    const senhaCriptografada = bcrypt.hashSync(senha1, salt);

    console.log(senhaCriptografada)

};

function validarCripto() {
    const senha1 = "1234567";
    const senhaDigitada = "1234567";

    const salt = bcrypt.genSaltSync(1);
    const senhaCriptografada = bcrypt.hashSync(senha1, salt);

    const saoIguais = bcrypt.compareSync(senhaDigitada, senhaCriptografada);

    console.log(saoIguais);
};


//gerarCripto();
//validarCripto();



