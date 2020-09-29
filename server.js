const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 5000;

const app = express();

// Connect database
connectDB();

// Inist middleware
app.use(express.json({ extended: false }));
app.get('/', (req, res) => {
	res.send('API running');
});

// Define routes
app.use('/api', require('./routes/api/api'));

app.listen(PORT, () => console.log('Server started on port: ', PORT));
