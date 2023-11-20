const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3002;
app.use(cors());
mongoose.connect("mongodb+srv://aadiudu:scared2compile@scared2compile.wxkvott.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemSchema = new mongoose.Schema({
  film:String,
  total:Number,
  seats: Array,
  date:String,
  names:String,
  phone:Number,
});

const Item = mongoose.model('Item', itemSchema);

app.use(express.json());

// GET route for fetching data
app.get('/api/data', async (req, res) => {
  try {
    const items = await Item.find();
    console.log(items);
    res.json(items);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST route for adding new item
app.post('/api/data', async (req, res) => {
  console.log(req.body);
  const newArray = new Item(req.body);

  try {
    await newArray.save();
    res.status(201).json(newArray);
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});