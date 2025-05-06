const express = require('express');
const app = express();
const customerRoutes = require('./routes/customerRoutes');

app.use(express.json());
app.use('/api/customers', customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));q