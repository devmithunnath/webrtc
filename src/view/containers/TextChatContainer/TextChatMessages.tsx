import { makeStyles } from "@material-ui/styles"
import Message from "../../components/Message"

const useStyle = makeStyles({
    textChatMessagesContent: {
        position: 'relative'
    }
})

const TextChatMessages = () => {
    const classes = useStyle()
    return (
        <div className={classes.textChatMessagesContent}>
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    )
}

export default TextChatMessages
