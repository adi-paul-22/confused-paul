
/**
 * Utility functions for persisting data across the application
 */

/**
 * Saves data to localStorage with the specified key
 */
export const saveData = <T,>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Failed to save data for key ${key}:`, error);
  }
};

/**
 * Loads data from localStorage for the specified key
 * @returns The parsed data or fallback if not found/invalid
 */
export const loadData = <T,>(key: string, fallback: T): T => {
  try {
    const savedData = localStorage.getItem(key);
    if (!savedData) return fallback;
    return JSON.parse(savedData) as T;
  } catch (error) {
    console.error(`Failed to load data for key ${key}:`, error);
    return fallback;
  }
};

/**
 * Custom hook for persistent state using localStorage
 */
import { useState, useEffect } from 'react';

export const usePersistentState = <T,>(key: string, initialValue: T) => {
  // Initialize state with data from localStorage or initial value
  const [state, setState] = useState<T>(() => loadData(key, initialValue));
  
  // Update localStorage whenever state changes
  useEffect(() => {
    saveData(key, state);
  }, [key, state]);
  
  return [state, setState] as const;
};
