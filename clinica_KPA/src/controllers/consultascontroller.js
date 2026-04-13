const db = require('../database/db');

exports.getAll = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM consultas');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM consultas WHERE id = $1',
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ mensagem: 'Consulta não encontrada' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.create = async (req, res) => {
  const { data, descricao, animal_id } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO consultas (data, descricao, animal_id) VALUES ($1, $2, $3) RETURNING *',
      [data, descricao, animal_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.update = async (req, res) => {
  const { data, descricao, animal_id } = req.body;

  try {
    const result = await db.query(
      'UPDATE consultas SET data=$1, descricao=$2, animal_id=$3 WHERE id=$4 RETURNING *',
      [data, descricao, animal_id, req.params.id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await db.query('DELETE FROM consultas WHERE id=$1', [req.params.id]);
    res.json({ mensagem: 'Removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};