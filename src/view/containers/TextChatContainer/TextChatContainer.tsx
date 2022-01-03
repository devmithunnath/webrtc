import { Box, IconButton, TextField } from "@material-ui/core"
import Icon from "@material-ui/core/Icon"
import { makeStyles } from "@material-ui/styles"
import TextChatMessages from "./TextChatMessages"

const useStyle = makeStyles({
  textChatContainer: {
    backgroundColor: "#e5e5e5",
    position: "relative",
    margin: "0 auto",
    height: "100%",
    borderRadius: "25px",
  },
  chatBoxInput: {
    padding: "20px",
    position: "absolute",
    bottom: "0",
    width: "100%",
  },
  chatBoxInputContent: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "20px",
    position: "relative",
  },
  chatSendButton: {
    position: "absolute",
    right: "20px",
    top: "15px",
    color: '#00a389'
  },
  noBorder: {
    border: "none",
  },
  chatBoxMessageContent: {
    position: "absolute",
    top: "20px",
    left: "20px",
    right: "20px",
    bottom: "120px",
    padding: "10px",
    overflow: "auto",
  },
})

const TextChatContainer = () => {
  const classes = useStyle()
  return (
    <div className={classes.textChatContainer}>
      <div className={classes.chatBoxMessageContent}>
        <TextChatMessages />
      </div>
      <Box className={classes.chatBoxInput}>
        <div className={classes.chatBoxInputContent}>
          <TextField
            label='Type your messages'
            multiline
            variant='outlined'
            fullWidth
            InputProps={{
              classes: { notchedOutline: classes.noBorder },
            }}
          />
          <IconButton aria-label='send' className={classes.chatSendButton}>
            <Icon>send</Icon>
          </IconButton>
        </div>
      </Box>
    </div>
  )
}

export default TextChatContainer
