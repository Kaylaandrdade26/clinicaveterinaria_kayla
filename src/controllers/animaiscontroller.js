const db = require('../database/db');

exports.getConsultasByAnimal = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT consultas.*, animais.nome AS animal_nome
      FROM consultas
      JOIN animais ON consultas.animal_id = animais.id
      WHERE animais.id = $1
    `, [req.params.id]);

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
