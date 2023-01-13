import create from 'zustand';
import { storage } from '../constants/helpers';
export default create((set, get) => ({
  user: null,
  token: null,
  logout: async () => {
    try {
      await storage.removeItem('token');
      set({
        user: null,
        token: null
      });
      return true;
    } catch (e) {
      return false;
    }
  }
}));