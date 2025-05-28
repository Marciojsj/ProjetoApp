// npm install expo-secure-store
// npx expo install expo-secure-store




import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import api from '../services/api';

// Define the User type or import it from your models/types file
interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties as needed
}

interface AuthContextData {
  user: User | null;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // carrega token salvo e busca perfil
    (async () => {
      const token = await SecureStore.getItemAsync('token');
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // fetch perfil
      }
    })();
  }, []);

  async function login(email: string, pass: string) {
    interface LoginResponse {
      token: string;
      user: User;
    }
    const res = await api.post<LoginResponse>('/auth/login', { email, pass });
    const { token, user } = res.data;
    await SecureStore.setItemAsync('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(user);
  }

  async function logout() {
    setUser(null);
    await SecureStore.deleteItemAsync('token');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);