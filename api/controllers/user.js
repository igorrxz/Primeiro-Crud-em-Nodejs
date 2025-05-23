// Controladores com as funções que interagem diretamente com o banco de dados.
// Cada função executa uma query e retorna o resultado (ou erro) na resposta HTTP.

import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getUserById = (req, res) => {
  const q = "SELECT * FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    if (data.length === 0) return res.status(404).json("Usuário não encontrado.");

    return res.status(200).json(data[0]);
  });
};

export const getUsersByName = (req, res) => {
  const q = "SELECT * FROM usuarios WHERE `nome` LIKE ?";
  const searchTerm = `%${req.params.name}%`;

  db.query(q, [searchTerm], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};