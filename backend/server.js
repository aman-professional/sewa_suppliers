const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use JSON File DB (Bulletproof fallback)
const db = require('./jsonDb');

// Routes
// 1. Team Routes
app.get('/api/team', async (req, res) => {
    try {
        const team = await db.team.find();
        res.json(team);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. Form Submission Route
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
        await db.forms.create({ name, email, phone, message });
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 3. Admin Routes (Protected)
const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
