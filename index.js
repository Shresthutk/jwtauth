const express=require('express');
const jwt=require('jsonwebtoken');
const PORT=80
const app= express()
app.listen(PORT,()=>{console.log(`listening on http://localhost/${PORT}`)})