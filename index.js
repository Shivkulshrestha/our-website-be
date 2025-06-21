const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // For now, just log and return success
  console.log('Contact form submission:', { name, email, message });
  res.status(200).json({ success: true, message: 'Message received!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 