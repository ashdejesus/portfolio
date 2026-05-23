const fs = require('fs');
const pdf = require('pdf-parse');
const parsePdf = pdf.default || pdf;

const file = process.argv[2];
if (!file) {
  console.error('Usage: node extractResume.js <path-to-pdf>');
  process.exit(1);
}

const dataBuffer = fs.readFileSync(file);

parsePdf(dataBuffer).then(function(data) {
  console.log(JSON.stringify({text: data.text}));
}).catch(err => {
  console.error('ERROR', err);
  process.exit(2);
});
