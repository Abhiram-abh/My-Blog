const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let posts = [
  { id: 1, title: 'Welcome to my blog!', content: 'This is my first post.' }
];

// Routes
app.get('/api/posts', (req, res) => res.json(posts));

app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (post) res.json(post);
  else res.status(404).send('Post not found');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
