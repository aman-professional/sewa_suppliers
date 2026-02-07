const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../jsonDb');

// Admin Login
router.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }
    res.status(401).json({ message: 'Invalid password' });
});

// Middleware to verify Admin Token
const auth = (req, res, next) => {
    const token = req.headers['x-auth-token'];
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

// Team Management
router.get('/team', auth, async (req, res) => {
    const team = await db.team.find();
    res.json(team);
});

router.post('/team', auth, async (req, res) => {
    try {
        const { name, role, image } = req.body;
        const newMember = await db.team.create({ name, role, image });
        res.status(201).json(newMember);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/team/:id', auth, async (req, res) => {
    try {
        await db.team.findByIdAndDelete(req.params.id);
        res.json({ message: 'Team member removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Form Data Viewing
router.get('/forms', auth, async (req, res) => {
    try {
        const forms = await db.forms.find();
        res.json([...forms].reverse());
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
