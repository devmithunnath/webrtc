export const server = {
  iceServers: [
    {
      urls: ["stun:stun1.1.google.com:19302", "stun:stun2.1.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
}


// Global states


let pc = new RTCPeerConnection(server)
let remoteStream = null
let localStream = null // localStream should be set when user click start
// localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true})
// this should bring up a dialog in the browser for the user to give permissions

