import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/user.route.js';
const app = express();
connectDB();

// Routes 
app.use('/api/user', userRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    
}) 