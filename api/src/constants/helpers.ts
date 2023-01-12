import { v4 as uuidv4 } from 'uuid';
export const createUUID = () => uuidv4();
export const makeSeed = async (cb: () => void) => {
  try {
    await cb();
  } catch (err) {
    console.log('err', err)
    throw new Error('seed error');
  }
};