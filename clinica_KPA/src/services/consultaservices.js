const db = require('../database/db');

exports.getAll = async () => {
  const result = await db.query('SELECT * FROM consultas');
  return result.rows;
};

exports.getById = async (id) => {
  const result = await db.query('SELECT * FROM consultas WHERE id=$1', [id]);
  return result.rows[0];
};

exports.create = async ({ data, descricao, animal_id }) => {
  const result = await db.query(
    'INSERT INTO consultas (data, descricao, animal_id) VALUES ($1,$2,$3) RETURNING *',
    [data, descricao, animal_id]
  );
  return result.rows[0];
};

exports.update = async (id, { data, descricao, animal_id }) => {
  const result = await db.query(
    'UPDATE consultas SET data=$1, descricao=$2, animal_id=$3 WHERE id=$4 RETURNING *',
    [data, descricao, animal_id, id]
  );
  return result.rows[0];
};

exports.remove = async (id) => {
  await db.query('DELETE FROM consultas WHERE id=$1', [id]);
};