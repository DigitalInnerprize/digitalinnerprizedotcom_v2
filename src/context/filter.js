import React, { useState, createContext } from 'react'

const defaultState = {
  filter: '',
  resetFilter: () => {},
  updateFilter: () => {}
};

export const FilterContext = createContext(defaultState);

export function FilterProvider({ children }) { 
  const [filter, setFilter] = useState('');

  const resetFilter = () => setFilter('');

  const updateFilter = val => setFilter(val);

  return (
    <FilterContext.Provider
      value={{ filter, updateFilter, resetFilter }}
    >
      {children}
    </FilterContext.Provider>
  )
 }
