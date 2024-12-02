import { createContext, useContext, useReducer } from 'react';

const initialState = {
  spells: [],
  wizards: [],
  editingItem: null, 
  editingFields: {},
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_SPELLS':
      return { ...state, spells: action.payload };
    case 'ADD_SPELL':
      return { ...state, spells: [...state.spells, action.payload] };
    case 'REMOVE_SPELL':
      return { ...state, spells: state.spells.filter(spell => spell._id !== action.payload) };
    case 'UPDATE_SPELL':
      return {
        ...state,
        spells: state.spells.map(spell =>
          spell._id === action.payload._id ? action.payload : spell
        ),
      };
    case 'SET_WIZARDS':
      return { ...state, wizards: action.payload };
    case 'ADD_WIZARD':
      return { ...state, wizards: [...state.wizards, action.payload] };
    case 'REMOVE_WIZARD':
      return { ...state, wizards: state.wizards.filter(wizard => wizard._id !== action.payload) };
    case 'UPDATE_WIZARD':
      return {
        ...state,
        wizards: state.wizards.map(wizard =>
          wizard._id === action.payload._id ? action.payload : wizard
        ),
      };
    case 'START_EDIT':
      return { ...state, editingItem: action.payload, editingFields: { ...action.payload } };
    case 'UPDATE_EDIT_FIELDS':
      return {
        ...state,
        editingFields: { ...state.editingFields, ...action.payload }, 
      };
    case 'STOP_EDIT':
      return { ...state, editingItem: null, editingFields: {} }; 
    default:
      return state;
  }
}

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};