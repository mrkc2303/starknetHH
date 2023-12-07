import React, { createContext, useContext, useEffect, useState } from "react";
import { Contract, ProviderInterface, Signer } from "starknet";
import { connect } from "starknetkit";
import abiJson from "./abi.json";
import { contractAddress } from "../config";

interface IConnectContext {
    provider: ProviderInterface | null;
    signer: Signer | null;
    contract: Contract | null;
}

export const ConnectContext = createContext<IConnectContext>({} as IConnectContext);

export function ConnectContextProvider({children}: {children: React.ReactNode}) {
    const [provider, setProvider] = useState<ProviderInterface | null>(null);
    const [signer, setSigner] = useState<Signer | null>(null);
    const [contract, setContract] = useState<Contract | null>(null);

    useEffect(() => {
        (async () => {

            const connection = await connect();

            setProvider(connection.provider);
            setSigner(connection.account)

            const _contract= new Contract(
                abiJson,
                contractAddress,
                connection.account);

              setContract(_contract);
        })().catch(err => console.error(err));
    }, []);
    
    return <ConnectContext.Provider value={{contract, signer, provider}}>{children}</ConnectContext.Provider>
}

export const useConnectContext = () => useContext(ConnectContext);