import { Magic } from 'magic-sdk'

// Create client-side Magic instance
/**
 * @param {string} key
 */
const createMagic = (key: string)  => typeof window != "undefined" && new Magic(key)

export const magic = createMagic(process.env.MAGIC_KEY as string)
