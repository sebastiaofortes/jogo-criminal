const express = require('express');
const path    = require('path');
const fs      = require('fs');
const multer  = require('multer');
const crypto  = require('crypto');

const app         = express();
const PORT        = process.env.PORT || 3000;
const SCENES_FILE = path.join(__dirname, 'scenes.json');

// ── Helpers ────────────────────────────────────────────────────────────────
function readScenes() {
  if (!fs.existsSync(SCENES_FILE)) return { scenes: [] };
  return JSON.parse(fs.readFileSync(SCENES_FILE, 'utf8'));
}

function writeScenes(data) {
  fs.writeFileSync(SCENES_FILE, JSON.stringify(data, null, 2));
}

// ── Middleware ─────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── Uploads ────────────────────────────────────────────────────────────────
const uploadBg     = multer({ dest: path.join(__dirname, 'public/fundos/') });
const uploadObj    = multer({ dest: path.join(__dirname, 'public/objects/') });
const uploadMusic  = multer({ dest: path.join(__dirname, 'public/music/') });
const uploadSounds = multer({ dest: path.join(__dirname, 'public/sounds/') });

app.post('/api/upload/background', uploadBg.single('file'), (req, res) => {
  const ext     = path.extname(req.file.originalname);
  const newPath = req.file.path + ext;
  fs.renameSync(req.file.path, newPath);
  res.json({ path: 'fundos/' + path.basename(newPath) });
});

app.post('/api/upload/object', uploadObj.single('file'), (req, res) => {
  const ext     = path.extname(req.file.originalname);
  const newPath = req.file.path + ext;
  fs.renameSync(req.file.path, newPath);
  res.json({ path: 'objects/' + path.basename(newPath) });
});

app.post('/api/upload/music', uploadMusic.single('file'), (req, res) => {
  const ext     = path.extname(req.file.originalname);
  const newPath = req.file.path + ext;
  fs.renameSync(req.file.path, newPath);
  res.json({ path: 'music/' + path.basename(newPath) });
});

app.post('/api/upload/clicksound', uploadSounds.single('file'), (req, res) => {
  const ext     = path.extname(req.file.originalname);
  const newPath = req.file.path + ext;
  fs.renameSync(req.file.path, newPath);
  res.json({ path: 'sounds/' + path.basename(newPath) });
});

// ── CRUD de cenas ──────────────────────────────────────────────────────────
app.get('/api/scenes', (req, res) => {
  res.json(readScenes().scenes);
});

app.post('/api/scenes', (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Nome é obrigatório' });
  }
  const data  = readScenes();
  const scene = {
    id:        crypto.randomUUID(),
    name:      name.trim(),
    createdAt: new Date().toISOString(),
    background:  'fundos/fundo-2d.png',
    objects:     [],
    nextSceneId: null,
    music:       null,
    clickSound:  null,
    buttons:     []
  };
  data.scenes.push(scene);
  writeScenes(data);
  res.status(201).json(scene);
});

app.get('/api/scenes/:id', (req, res) => {
  const scene = readScenes().scenes.find(s => s.id === req.params.id);
  if (!scene) return res.status(404).json({ error: 'Cena não encontrada' });
  res.json(scene);
});

app.put('/api/scenes/:id', (req, res) => {
  const data = readScenes();
  const idx  = data.scenes.findIndex(s => s.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Cena não encontrada' });
  // Nunca sobrescrever id e createdAt
  const { id, createdAt, ...updates } = req.body;
  data.scenes[idx] = { ...data.scenes[idx], ...updates };
  writeScenes(data);
  res.json(data.scenes[idx]);
});

app.delete('/api/scenes/:id', (req, res) => {
  const data = readScenes();
  const idx  = data.scenes.findIndex(s => s.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Cena não encontrada' });
  data.scenes.splice(idx, 1);
  writeScenes(data);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
