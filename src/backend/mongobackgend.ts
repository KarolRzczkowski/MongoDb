import { Request, Response } from "express";
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001

const dbURI = 'mongodb://localhost:27017';

app.get("/api/engines", async (req: Request, res: Response) => {
  const client = new MongoClient(dbURI);

  try {
    await client.connect();
    const database = client.db('cars');
    const enginesCollection = database.collection('engines');
    const enginesData = await enginesCollection.find().toArray();
    res.json(enginesData);
  } catch (error) {
    console.log('Error connecting to MongoDb', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
