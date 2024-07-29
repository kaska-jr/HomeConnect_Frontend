import { createContext, useContext, useReducer } from "react";

// Create the context
const PropertyContext = createContext();

// Define an initial state
const initialState = {
  propertyData: {
    propertyType: "",
    unit: "",
    location: "",
    price: "",
    tag: "",
    bathroom: "",
    toilet: "",
    features: [],
    gallery: "",
    propertydescription: "",
    leisureandshopping: "",
    nightlife: "",
    interestingfacts: "",
  },
  preview: "Nothing to Preview yet",
};

// Define actions (action types)
const SET_PROPERTY_DATA = "SET_PROPERTY_DATA";
const SET_PREVIEW = "SET_PREVIEW";

// Reducer function to update the state
const propertyReducer = (state, action) => {
  switch (action.type) {
    case SET_PROPERTY_DATA:
      return {
        ...state,
        propertyData: { ...state.propertyData, ...action.payload },
      };
    case SET_PREVIEW:
      return {
        ...state,
        preview: action.payload,
      };
    default:
      return state;
  }
};

// PropertyContext Provider component
export function PropertyProvider({ children }) {
  const [state, dispatch] = useReducer(propertyReducer, initialState);

  return (
    <PropertyContext.Provider value={{ state, dispatch }}>
      {children}
    </PropertyContext.Provider>
  );
}

// Custom hook to access the context
export function useProperty() {
  return useContext(PropertyContext);
}
