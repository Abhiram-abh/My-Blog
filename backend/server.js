const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample data to simulate posts
const posts = [
  { id: 1, title: 'First Post', content: 'This is my first post.' },
  { id: 2, title: 'Second Post', content: 'This is my second post.' },
];

// Routes
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
