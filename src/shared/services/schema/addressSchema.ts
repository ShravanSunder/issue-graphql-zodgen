import { ethers } from 'ethers';
import { z } from 'zod';

export const addressSchema = z.custom<`0x${string}`>((value: unknown) => {
  if (typeof value !== 'string') {
    return false;
  }
  return ethers.utils.isAddress(value);
});

// export const signatureSchema = z.custom<`0x${string}`>((value: unknown) => {
//   if (typeof value !== 'string') return false;
//   return ethers.utils.verifyMessage(message, value);
// });
