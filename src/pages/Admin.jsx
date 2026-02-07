import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
    const [forms, setForms] = useState([]);
    const [team, setTeam] = useState([]);
    const [newMember, setNewMember] = useState({ name: '', role: '', image: '' });
    const [activeTab, setActiveTab] = useState('forms');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/admin/login', { password });
            const newToken = res.data.token;
            setToken(newToken);
            localStorage.setItem('adminToken', newToken);
            setIsAuthenticated(true);
            fetchData(newToken);
        } catch (err) {
            alert('Invalid Password');
        }
    };

    const fetchData = async (authToken) => {
        try {
            const config = { headers: { 'x-auth-token': authToken } };
            const formsRes = await axios.get('/api/admin/forms', config);
            const teamRes = await axios.get('/api/admin/team', config);
            setForms(formsRes.data);
            setTeam(teamRes.data);
            setIsAuthenticated(true);
        } catch (err) {
            setIsAuthenticated(false);
            localStorage.removeItem('adminToken');
        }
    };

    React.useEffect(() => {
        if (token) {
            fetchData(token);
        }
    }, []);

    const handleAddMember = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { 'x-auth-token': token } };
            await axios.post('/api/admin/team', newMember, config);
            setNewMember({ name: '', role: '', image: '' });
            fetchData(token);
        } catch (err) {
            alert('Error adding member: ' + (err.response?.data?.message || err.message));
        }
    };

    const handleDeleteMember = async (id) => {
        try {
            const config = { headers: { 'x-auth-token': token } };
            await axios.delete(`/api/admin/team/${id}`, config);
            fetchData(token);
        } catch (err) {
            alert('Error deleting member');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="admin-login-container">
                <div className="login-card">
                    <h1>Sewa Admin Login</h1>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            placeholder="Enter Admin Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard">
            <div className="admin-sidebar">
                <h2>Admin Panel</h2>
                <button className={activeTab === 'forms' ? 'active' : ''} onClick={() => setActiveTab('forms')}>Form Submissions</button>
                <button className={activeTab === 'team' ? 'active' : ''} onClick={() => setActiveTab('team')}>Manage Team</button>
                <button onClick={() => { setIsAuthenticated(false); localStorage.removeItem('adminToken'); }}>Logout</button>
            </div>
            <div className="admin-content">
                {activeTab === 'forms' ? (
                    <div className="forms-section">
                        <h1>Contact Form Submissions</h1>
                        <div className="forms-list">
                            {forms.map(form => (
                                <div key={form._id} className="form-item">
                                    <h3>{form.name}</h3>
                                    <p><strong>Email:</strong> {form.email}</p>
                                    <p><strong>Phone:</strong> {form.phone}</p>
                                    <p><strong>Message:</strong> {form.message}</p>
                                    <span className="date">{new Date(form.createdAt).toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="team-section">
                        <h1>Manage Team</h1>
                        <form onSubmit={handleAddMember} className="add-member-form">
                            <input type="text" placeholder="Name" value={newMember.name} onChange={e => setNewMember({ ...newMember, name: e.target.value })} required />
                            <input type="text" placeholder="Role" value={newMember.role} onChange={e => setNewMember({ ...newMember, role: e.target.value })} required />
                            <input type="text" placeholder="Image URL" value={newMember.image} onChange={e => setNewMember({ ...newMember, image: e.target.value })} required />
                            <button type="submit">Add Member</button>
                        </form>
                        <div className="team-grid">
                            {team.map(member => (
                                <div key={member._id} className="member-card">
                                    <img src={member.image} alt={member.name} />
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                    <button onClick={() => handleDeleteMember(member._id)}>Remove</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
