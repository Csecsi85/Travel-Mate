const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

// Define routes
app.use('/api', require('./routes/api/api'));

app.get('/', (req, res) => {
	res.send('API running');
});
app.listen(PORT, () => console.log('Server started on port: ', PORT));
