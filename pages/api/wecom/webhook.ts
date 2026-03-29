import type { NextApiRequest, NextApiResponse } from 'next';

// WeChat Work webhook handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle WeChat Work URL verification (GET request)
  if (req.method === 'GET') {
    const { msg_signature, timestamp, nonce, echostr } = req.query;

    if (!msg_signature || !timestamp || !nonce || !echostr) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // TODO: Verify signature using your WeChat Work token and encoding_aes_key
    // For now, return the echostr for basic verification
    const echoStrValue = Array.isArray(echostr) ? echostr[0] : echostr;
    return res.status(200).send(echoStrValue);
  }

  // Handle WeChat Work messages/events (POST request)
  if (req.method === 'POST') {
    try {
      const { msg_signature, timestamp, nonce } = req.query;

      if (!msg_signature || !timestamp || !nonce) {
        return res.status(400).json({ code: 400, message: 'Missing signature parameters' });
      }

      // Parse the request body
      const body = req.body;

      // TODO: Verify and decrypt the message using your WeChat Work credentials
      // TODO: Process the message based on its type (text, image, event, etc.)

      console.log('Received WeChat Work webhook:', {
        timestamp,
        body
      });

      // Return success response
      return res.status(200).json({ code: 0, message: 'success' });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return res.status(500).json({ code: 500, message: 'Internal server error' });
    }
  }

  // Method not allowed
  return res.status(405).json({ code: 405, message: 'Method not allowed' });
}

// Disable body parsing for WeChat Work XML messages if needed
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
