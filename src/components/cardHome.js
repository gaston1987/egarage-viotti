import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard () {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container fixed>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            G
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Mi primer CARD"
                    subheader="Junio 01, 2021"
                />
                <CardMedia
                    className={classes.media}
                    image="./public/images/logo192.png"
                    title="Card HOME"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Estoy realmente impresionado de ver lo que hace React
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="Mi card favorito">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Compartir">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Ver m??s"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Descripci??n de Producto:</Typography>
                        <Typography paragraph>
                            Impresionante y novedoso producto exclusivo para vos
                        </Typography>
                        <Typography paragraph>
                            Fabricado especialmente para resolver todos tus problemas
                        </Typography>
                        <Typography paragraph>
                            Seguime para enterarte de los avances
                        </Typography>
                        <Typography>
                            Muy pronto todo esto mejorar??
                        </Typography>
                    </CardContent>
                </Collapse>
                <div className={classes.root}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<ShoppingCartIcon />}
                    >
                        Comprar
                    </Button>
                </div>
            </Card>
        </Container>
    );
}