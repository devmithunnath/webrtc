import { Icon, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyle = makeStyles({
  videoButton: {
      padding: '30px',
      color: 'white',
      backgroundColor: 'red',
      borderRadius: '25px',
      transition: "background 500ms, color 500ms",
      "&:hover": {
          backgroundColor: 'rey',
          
      }
  },
})

const Button = () => {
  const classes = useStyle()
  return (
    <>
      <IconButton className={classes.videoButton}>
        <Icon fontSize="large">call</Icon>
      </IconButton>
    </>
  )
}

export default Button
