import { onAuthStateChanged } from 'firebase/auth';
import { create } from 'zustand'
import { auth } from '../firebase';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setUser: (user) => set({ user }),

  initializeAuth: () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        set({ isAuthenticated: true, user });
      } else {
        set({ isAuthenticated: false, user: null });
      }
    });
  },
}))

export default useAuthStore
