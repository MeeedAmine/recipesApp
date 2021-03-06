import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "auto",
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

function parseData(data){
  const ingredients = []
  if(data){
    for(let i=1; i<21; i++){
      if(data[`strIngredient${i}`] && data[`strIngredient${i}`].length > 1){
        ingredients.push(`${data[`strMeasure${i}`]} ${data[`strIngredient${i}`]}`)
      }
    }
    return ingredients;
  }
}
const CardRecipe = ({meal, setMeals, meals}) => {
    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const ingredients = parseData(meal);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
    };
    
    React.useEffect(() => {
      if(localStorage.getItem(meal.idMeal)){
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }, []);

    const handleStorage = (id) =>{
      if(!localStorage.getItem(id)){
        localStorage.setItem(id, JSON.stringify(meal));
        setIsFavorite(true);
      } else {
        localStorage.removeItem(id);
        setIsFavorite(false);
        if(meals){setMeals(meals.filter(item => {return item.idMeal !== id;}))}
      }
    }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={meal.strMealThumb}
        title={meal.strMeal}
      />
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
          Category : {meal.strCategory}
        </Typography>
        <Typography variant="h4" color="textSecondary" component="p">
          {meal.strMeal}
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          {meal.strArea}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => handleStorage(meal.idMeal)}>
          <FavoriteIcon color={isFavorite ? 'secondary' : 'inherit'} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6">Method:</Typography>
          <Typography paragraph>
            {meal.strInstructions}
          </Typography>
          <Typography variant="h6">Ingredients:</Typography>
          <Typography>
            <ul>
              {ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))}
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
     );
}
 
export default CardRecipe;