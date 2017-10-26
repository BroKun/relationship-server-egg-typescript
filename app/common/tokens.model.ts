import { SignOptions } from 'jsonwebtoken';
export function SignOptions(): SignOptions {
  return {
    expiresIn: 60 * 60 * 24 * 7,
    issuer: 'system',
    subject: 'basic',
  };
}
