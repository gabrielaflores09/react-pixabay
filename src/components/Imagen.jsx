import React from 'react';
import { ThumbUp, Visibility} from '@material-ui/icons';
import {Card,
        CardActionArea,
        CardMedia,
        makeStyles, 
        CardActions,
        CardContent,
        Typography,
        Button} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 245,
    margin:5,
  },
  media: {
    height: 140,
  },
  icono: {
    marginLeft:35,
    marginRight:5,
    fontSize:15,
  },
  content: {
      padding:10,
      paddingBottom:0,
  }
});

const Imagen = ({image}) => {
    const classes = useStyles();

    return ( 
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image.previewURL}
                    title={image.tags}
                />
            </CardActionArea>
            <CardContent className={classes.content}>
                <Typography 
                    gutterBottom 
                    variant="subtitle2" 
                    align="justify"    
                >
                   <ThumbUp className={classes.icono} /> {image.likes} 
                   <Visibility className={classes.icono} />{image.views}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined" fullWidth color="primary" href={image.pageURL}>
                    Visit Page
                </Button>
                <Button size="small" variant="outlined" fullWidth color="primary" href={image.largeImageURL}>
                    View Image
                </Button>
            </CardActions>
        </Card>
     );
}
 
export default Imagen;