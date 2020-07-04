import React from 'react';
import {Card,
        CardActionArea,
        CardMedia,
        makeStyles, 
        CardActions,
        Button} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 245,
    margin:5,
  },
  media: {
    height: 140,
  },
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
            <CardActions>
                <Button size="small" color="primary" href={image.pageURL}>
                    Go to Page
                </Button>
                <Button size="small" color="primary" href={image.largeImageURL}>
                    View Image
                </Button>
            </CardActions>
        </Card>
     );
}
 
export default Imagen;