const fs = require('fs');
const express = require('express');
const pdf = require('html-pdf');
const template = require('./invoice_template'); 
const app = express(); 
const PORT = 3000;

app.use(express.json());

function generatePDF(templateData) {
    console.log(`Data:`, templateData.companyDetails.companyName);
    const htmlTemplate = template(templateData.companyDetails.companyName);

    return new Promise((resolve, reject) => {
        pdf.create(htmlTemplate, { format: 'A4' }).toBuffer((err, buffer) => {
            if (err) {
                reject(err);
            } else {
                resolve(buffer.toString('base64'));
            }
        });
    });
}

app.get('/generate-pdf', async (req, res) => {
    try {
        const templateData = req.body;
        const pdfBase64 = await generatePDF(templateData);
        res.status(200).send({ response: pdfBase64 });
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
