import * as jwt from 'jsonwebtoken';

export function decodeToken(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your secret key
    return decoded; // Return the decoded token payload
  } catch (error) {
    return null; // Invalid token
  }
}
