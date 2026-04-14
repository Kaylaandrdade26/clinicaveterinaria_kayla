const service = require('../services/tutoresservices');

exports.getAll = async (req, res) => {
  try {
    const dados = await service.getAll();
    res.json(dados);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const tutor = await service.getById(req.params.id);

    if (!tutor) {
      return res.status(404).json({ mensagem: 'Tutor não encontrado' });
    }

    res.json(tutor);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { nome, telefone } = req.body;

    const novo = await service.create(nome, telefone);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { nome, telefone } = req.body;

    const atualizado = await service.update(
      req.params.id,
      nome,
      telefone
    );

    res.json(atualizado);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await service.remove(req.params.id);
    res.json({ mensagem: 'Tutor removido' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};