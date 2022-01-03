import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles({
  messageContainer: {
    display: "flex",
    justifyContent: "flex-end",
    margin: '20px auto',
  },
  messageContent: {
    position: "relative",
    backgroundColor: "#d0d3e3",
    width: "100%",
    textAlign: "left",
    border: "1px solid #d0d3e3",
    borderRadius: "10px",
  },
  message: {
      margin: '10px',
  }
})

const Message = () => {
  const classes = useStyle()
  return (
    <div className={classes.messageContainer}>
      <div className={classes.messageContent}>
        <p className={classes.message}>Message Right</p>
      </div>
    </div>
  )
}

export default Message
