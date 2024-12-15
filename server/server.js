import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
const app = express();
connectDB();

app.use(express.json());


// Routes 
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    
}) 