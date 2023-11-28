const connection = require('../config/db');
async function createStudent(request, response) {
    const query = 'INSERT INTO alunos(nome, idade) VALUES(?, ?)'

    const params = Array(
        request.body.nome,
        request.body.idade
    );

    connection.query(query, params, (err, results) => {
        if (results) {
            response
            .status(201)
            .json({
                success: true,
                message: 'Aluno cadastrado com sucesso',
                data : results
            })
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: 'Aluno não cadastrado',
                data : err
            })
        }
    });
};

module.exports = {
    createStudent
}