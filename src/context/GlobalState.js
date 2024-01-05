import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import AppReducer, { initialState } from "./AppReducer";
import { auth } from "../firebase";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // const [currentUser, setCurrentUser] = useState();

  // useEffect(() => {
  //   auth.auth().onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //   });
  // }, []);

  return (
    <GlobalContext.Provider value={{ user: state.user, dispatch: dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useAuth = () => {
  return useContext(GlobalContext);
};
