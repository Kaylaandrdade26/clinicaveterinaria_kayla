const db = require('../database/db');

// 🔹 LISTAR TODOS
exports.getAll = async () => {
  const result = await db.query('SELECT * FROM animais');
  return result.rows;
};

// 🔹 BUSCAR POR ID
exports.getById = async (id) => {
  const result = await db.query(
    'SELECT * FROM animais WHERE id = $1',
    [id]
  );
  return result.rows[0];
};

// 🔹 CRIAR ANIMAL
exports.create = async (nome, especie, tutor_id) => {
  const result = await db.query(
    'INSERT INTO animais (nome, especie, tutor_id) VALUES ($1, $2, $3) RETURNING *',
    [nome, especie, tutor_id]
  );
  return result.rows[0];
};

// 🔹 ATUALIZAR
exports.update = async (id, nome, especie, tutor_id) => {
  const result = await db.query(
    `UPDATE animais 
     SET nome = $1, especie = $2, tutor_id = $3 
     WHERE id = $4 
     RETURNING *`,
    [nome, especie, tutor_id, id]
  );
  return result.rows[0];
};

// 🔹 DELETAR
exports.remove = async (id) => {
  await db.query(
    'DELETE FROM animais WHERE id = $1',
    [id]
  );
};
