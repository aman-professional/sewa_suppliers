const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

const loadData = () => {
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify({ team: [], forms: [] }, null, 2));
    }
    return JSON.parse(fs.readFileSync(DATA_FILE));
};

const saveData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

const db = {
    team: {
        find: async () => loadData().team,
        create: async (member) => {
            const data = loadData();
            const newMember = { ...member, _id: Date.now().toString() };
            data.team.push(newMember);
            saveData(data);
            return newMember;
        },
        findByIdAndDelete: async (id) => {
            const data = loadData();
            data.team = data.team.filter(m => m._id !== id);
            saveData(data);
        }
    },
    forms: {
        find: async () => loadData().forms,
        create: async (form) => {
            const data = loadData();
            const newForm = { ...form, _id: Date.now().toString(), createdAt: new Date().toISOString() };
            data.forms.push(newForm);
            saveData(data);
            return newForm;
        }
    }
};

module.exports = db;
