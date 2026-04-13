const db = require('../database/db');

exports.getAll = async () => {
  const result = await db.query('SELECT * FROM tutores');
  return result.rows;
};

exports.getById = async (id) => {
  const result = await db.query(
    'SELECT * FROM tutores WHERE id = $1',
    [id]
  );
  return result.rows[0];
};

exports.create = async (nome, telefone) => {
  const result = await db.query(
    'INSERT INTO tutores (nome, telefone) VALUES ($1, $2) RETURNING *',
    [nome, telefone]
  );
  return result.rows[0];
};

exports.update = async (id, nome, telefone) => {
  const result = await db.query(
    'UPDATE tutores SET nome=$1, telefone=$2 WHERE id=$3 RETURNING *',
    [nome, telefone, id]
  );
  return result.rows[0];
};

exports.remove = async (id) => {
  await db.query('DELETE FROM tutores WHERE id=$1', [id]);
};