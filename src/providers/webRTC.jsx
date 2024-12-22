import React, { useCallback, useContext } from 'react'
import { createContext } from 'react'

const WebRTCContext = createContext()

export const useWebRTC = () => useContext(WebRTCContext)

export const WebRTCProvider = ({ children }) => {

    const createPeer = useCallback(() => new RTCPeerConnection({
        // iceServers: [
        //     { 'urls': 'stun:stun.stunprotocol.org:3478' },
        //     { 'urls': 'stun:stun.l.google.com:19302' },
        // ]
        iceServers: [
            {
        urls: "stun:stun.relay.metered.ca:80",
      },
      {
        urls: "turn:standard.relay.metered.ca:80",
        username: "f5e468243799a579176db227",
        credential: "c99uOx9T7hK6oYfL",
      },
      {
        urls: "turn:standard.relay.metered.ca:80?transport=tcp",
        username: "f5e468243799a579176db227",
        credential: "c99uOx9T7hK6oYfL",
      },
      {
        urls: "turn:standard.relay.metered.ca:443",
        username: "f5e468243799a579176db227",
        credential: "c99uOx9T7hK6oYfL",
      },
      {
        urls: "turns:standard.relay.metered.ca:443?transport=tcp",
        username: "f5e468243799a579176db227",
        credential: "c99uOx9T7hK6oYfL",
      },
        ],
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

