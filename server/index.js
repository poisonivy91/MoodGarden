const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

const admin = require('firebase-admin');
const serviceAccount = require('./firebaseKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount), 
});

const db = admin.firestore();

app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => {
    res.json({ message: 'Pong 🏓' });
});


app.post('/entries', async (req, res) => {
  try {
    const { title, mood, content } = req.body;

    const entry = {
      title,
      mood,
      content,
      timestamp: new Date(),
    };

    const docRef = await db.collection('entries').add(entry);
    res.status(200).json({ id: docRef.id, ...entry });
  } catch (err) {
    res.status(500).json({
      error: 'Failed to add entry',
      details: err.message,
    });
  }
});
app.get('/entries', async (req, res) => {
  try {
    const snapshot = await db.collection('entries').orderBy('timestamp', 'desc').get();
    const entries = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
