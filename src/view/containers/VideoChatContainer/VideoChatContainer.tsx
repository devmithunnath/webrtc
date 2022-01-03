import Button from "./../../components/Button"
import { makeStyles } from "@material-ui/styles"
import Thumbnail from "../../components/Thumbnail"
import { Grid } from "@material-ui/core"

const useStyle = makeStyles({
  videoChatContainer: {
    position: "relative",
    margin: "0 auto",
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    borderRadius: "25px",
  },
  videoButtonContainer: {
    position: "absolute",
    bottom: "100px",
    right: "100px",
    left: "100px",
  },
  videoButtonWrapper: {
    position: 'relative',
    margin: '0 auto',
    width: '300px'
  }
})

const VideoChatContainer = () => {
  const classes = useStyle()

  return (
    <div className={classes.videoChatContainer}>
      <Thumbnail />
      <div className={classes.videoButtonContainer}>
        <Grid container className={classes.videoButtonWrapper}> 
          <Grid 
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          >
            <Button />
          </Grid>
          <Grid 
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          >
            <Button />
          </Grid>
          <Grid 
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          >
            <Button />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default VideoChatContainer
