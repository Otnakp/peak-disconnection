import fs from 'fs';
import path from 'path';

const tokensFile = path.join(process.cwd(), 'data', 'download-tokens.json');
const pdfFile = path.join(process.cwd(), 'public', 'screenmaxi-manifesto.pdf');

function getToken(token) {
  if (!fs.existsSync(tokensFile)) {
    return null;
  }
  
  try {
    const tokens = JSON.parse(fs.readFileSync(tokensFile, 'utf8'));
    return tokens[token] || null;
  } catch (e) {
    return null;
  }
}

function markTokenAsUsed(token) {
  if (!fs.existsSync(tokensFile)) {
    return;
  }
  
  try {
    const tokens = JSON.parse(fs.readFileSync(tokensFile, 'utf8'));
    if (tokens[token]) {
      tokens[token].used = true;
      tokens[token].usedAt = new Date().toISOString();
      fs.writeFileSync(tokensFile, JSON.stringify(tokens, null, 2));
    }
  } catch (e) {
    console.error('Error marking token as used:', e);
  }
}

function isTokenExpired(tokenData) {
  const createdAt = new Date(tokenData.createdAt);
  const now = new Date();
  const diffDays = (now - createdAt) / (1000 * 60 * 60 * 24);
  return diffDays > 7; // 7 days expiration
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ message: 'Download token is required' });
  }

  // Validate token
  const tokenData = getToken(token);
  
  if (!tokenData) {
    return res.status(404).json({ message: 'Invalid download token' });
  }

  if (isTokenExpired(tokenData)) {
    return res.status(410).json({ message: 'Download token has expired' });
  }

  // Check if PDF file exists
  if (!fs.existsSync(pdfFile)) {
    return res.status(404).json({ message: 'PDF file not found. Please contact support.' });
  }

  try {
    // Mark token as used (optional - you can allow multiple downloads)
    // markTokenAsUsed(token);

    // Read and serve the PDF file
    const pdfBuffer = fs.readFileSync(pdfFile);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="screenmaxi-manifesto.pdf"');
    res.setHeader('Content-Length', pdfBuffer.length);
    
    res.status(200).send(pdfBuffer);
    
  } catch (error) {
    console.error('Error serving PDF:', error);
    res.status(500).json({ message: 'Error serving PDF file' });
  }
}