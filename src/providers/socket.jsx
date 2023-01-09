import React, { useMemo } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { createContext } from "react";
import { io } from 'socket.io-client'

const SocketContext = createContext()

export const useSocket = () => React.useContext(SocketContext)

export const SocketProvider = ({ children }) => {

    const getSocket = useCallback(() => io(
        'https://cybermeet-server.onrender.com/', {
        transports: ['websocket']
    }), [])

    return (
        <SocketContext.Provider value={{ getSocket }}>
            {children}
        </SocketContext.Provider>
    )
}
