import React, { useCallback, useContext } from 'react'
import { createContext } from 'react'

const WebRTCContext = createContext()

export const useWebRTC = () => useContext(WebRTCContext)

export const WebRTCProvider = ({ children }) => {

    const createPeer = useCallback(() => new RTCPeerConnection({
        iceServers: [
            { 'urls': 'stun:stun.stunprotocol.org:3478' },
            { 'urls': 'stun:stun.l.google.com:19302' },
        ]
    }))

    const createOffer = useCallback(async (peer) => {
        const offer = await peer.createOffer()
        await peer.setLocalDescription(offer);
        return offer;
    }, [])

    return (
        <WebRTCContext.Provider value={{ createPeer, createOffer }}>
            {children}
        </WebRTCContext.Provider>
    )
}

