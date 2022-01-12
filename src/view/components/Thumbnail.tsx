import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles({
  videoThumbnail: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "180px",
    width: "180px",
    position: "absolute",
    right: "0",
    border: "4px solid white",
    borderRadius: "25px",
    margin: "20px",
  },
})

const Thumbnail = () => {
  const classes = useStyle()
  return <div className={classes.videoThumbnail}></div>
}

export default Thumbnail
