import { Button, CssBaseline, Grid, makeStyles } from "@material-ui/core"
import { useState } from "react"
import TextChatContainer from "../../containers/TextChatContainer/TextChatContainer"
import VideoChatContainer from "../../containers/VideoChatContainer/VideoChatContainer"

const useStyles = makeStyles({
  container: {
    height: "100vh",
    padding: "20px",
  },
  videoContainer: {
    padding: "20px",
  },
  chatContainer: {
    padding: "20px",
  },
})

const Chat = () => {
  const classes = useStyles()
  const [connectionInProgress, setConnectionProgress] = useState(false)
  const [connectionEstablished, establishConnection] = useState(false)

  function connect() {
    console.log("Starting to connect")
    setConnectionProgress(true)
    // establishConnection(true)
  }

  if (!connectionInProgress && !connectionEstablished) {
    return (
      <>
        <CssBaseline />
        <h1>Start Connecting</h1>
        <Button onClick={connect}>Connect Now</Button>
      </>
    )
  }

  if (connectionInProgress && !connectionEstablished) {
    return (
      <>
        <CssBaseline />
        <h1>Connecting......</h1>
      </>
    )
  }

  if (connectionInProgress && connectionEstablished) {
    return (
      <>
        <CssBaseline />
        <Grid container className={classes.container}>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            className={classes.videoContainer}
          >
            <VideoChatContainer />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className={classes.chatContainer}
          >
            <TextChatContainer />
          </Grid>
        </Grid>
      </>
    )
  }

  return <></>
}

export default Chat
