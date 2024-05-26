//* Encrypt function to encode the ID
export function encryptId(id: string) {
   return btoa(id) // Base64 encode the ID
}

//* Decrypt function to decode the ID
export function decryptId(id: string) {
   return atob(id) // Base64 decode the ID
}
