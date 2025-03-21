const { createCanvas } = require('canvas');
const fs = require('fs');

// Create backpack image
const backpackCanvas = createCanvas(800, 800);
const backpackCtx = backpackCanvas.getContext('2d');

// Background
backpackCtx.fillStyle = '#2C3E50';
backpackCtx.fillRect(0, 0, 800, 800);

// Simple backpack shape
backpackCtx.fillStyle = '#E67E22';
backpackCtx.beginPath();
backpackCtx.moveTo(300, 200);
backpackCtx.lineTo(500, 200);
backpackCtx.lineTo(550, 600);
backpackCtx.lineTo(250, 600);
backpackCtx.closePath();
backpackCtx.fill();

// Save backpack image
const backpackBuffer = backpackCanvas.toBuffer('image/jpeg');
fs.writeFileSync('backpack.jpg', backpackBuffer);

// Create jacket image
const jacketCanvas = createCanvas(800, 800);
const jacketCtx = jacketCanvas.getContext('2d');

// Background
jacketCtx.fillStyle = '#34495E';
jacketCtx.fillRect(0, 0, 800, 800);

// Simple jacket shape
jacketCtx.fillStyle = '#3498DB';
jacketCtx.beginPath();
jacketCtx.moveTo(250, 200);
jacketCtx.lineTo(550, 200);
jacketCtx.lineTo(600, 600);
jacketCtx.lineTo(200, 600);
jacketCtx.closePath();
jacketCtx.fill();

// Save jacket image
const jacketBuffer = jacketCanvas.toBuffer('image/jpeg');
fs.writeFileSync('jacket.jpg', jacketBuffer); 