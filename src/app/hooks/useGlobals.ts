import { createContext } from "react";
import { Member } from "../../libs/types/member";
import { useContext } from "react";

interface GlobalInterface{
    authMember: Member | null;
    setAuthMember: (member: Member | null) => void;
}

export const GlobalContext = createContext<GlobalInterface | undefined> (
    undefined
);

export const useGlobals = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) throw new Error("useGlobals within Provider");
    return context;
}