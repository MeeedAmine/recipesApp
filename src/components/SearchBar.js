import React, { useContext, useState} from 'react'
import { Button, TextField } from "@material-ui/core";
import { makeStyles} from "@material-ui/core";
import { RecipesContext } from "./RecipesContext";


const useStyles = makeStyles({
    root: {
        margin: "20px 0",
        display: "flex"
    },
    form:{
        width:"100%",
        display: "flex",
        justifyContent: "center"
    },
    input: {
        width: "50%",
        marginRight:"5px"
    },
    search:{
        marginRight:"5px"
    }
})

const SearchBar = () => {
    const classes = useStyles();
    const [url, setUrl] = useContext(RecipesContext);
    const [name, setName] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(`https://www.themealdb.com/api/json/v2/1/search.php?s=${name}`);
        setName("")
    }
    const handleRandom = (e) => {
        e.preventDefault();
        setUrl("https://www.themealdb.com/api/json/v2/1/random.php");
    }

    return ( 
        <div className={classes.root}>
            <form className={classes.form} >
                <TextField 
                id="outlined-basic" 
                label="Search by name" 
                value={name}
                variant="outlined" 
                onChange={e => setName(e.target.value)}
                className={classes.input}/>
                <Button 
                variant="contained" 
                color="primary"
                className={classes.search}
                onClick={handleSubmit}>
                    Search
                </Button>
                <Button 
                variant="contained" 
                color="secondary"
                onClick={handleRandom}>
                    Surprise me!
                </Button>
            </form>
        </div>
     );
}
 
export default SearchBar;