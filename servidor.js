// na pasta
// npm init -y
// no package json, depois do main, colocar "type":"module"; e de dentro do script, "dev":"node server.js",
//npm i express
//npm i jsonwebtoken
//criar o arquivo server.js

import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000;
const SECRET_KEY = 'ca7d10e9f937ce3ac4f57a7158db675682150f3f';

app.use(express.json());

const users = [
    { id: 1, username: 'nunesfb', password: '12345678', role: 'admin' },
    { id: 2, username: 'felipe', password: '12345678', role: 'user' }
];


// (te conheço?) ? "Entra, mas vai rápido" : "Cai fora!"

// Rota para realizar a autenticação e gerar o token
// é a rota que gera a token, aqui tu consegue ver se o usuario e senha batem
app.post('/login', (req, res) => {
    const { username, password } = req.body;


    // obs : não iremos armazenar no banco de dados a senha em texto puro, mas sim a senha criptografada. Ou seja, não iremos fazer essa comparaçãp direta, teremos que fazer uma comparação por fora 
    //                                                                V               V
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.status(201).json({ message: token });

    } else {
        res.status(401).json({ message: 'Usuário ou senha inválidos' });
    }

});




// "Se o carinha pode continuar aqui ou tem que sair"

// Middleware para autenticar o token
// verifica se a token é valida
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(403).json({ message: 'Token não fornecido!' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token inválido!' });
        req.user = user;
        next();
    });
};






// Rota autenticada
// caso haja token válida, pode acessar essa rota
app.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Bem-vindo à rota autenticada!' });
});






// Rota autenticada e privada para o usuário admin
app.get('/admin', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Acesso negado!' });
    }
    res.status(200).json({ message: 'Bem-vindo à área administrativa!' });
});



app.listen(PORT, () => {
    console.log('SERVIDOR ONLINE!');
});