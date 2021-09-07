import React, { useContext, useState } from 'react'
import { Button, Container, TextField } from "@material-ui/core";
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
        width: "60%",
        marginRight:"5px"
    },
    search:{
        marginRight:"5px"
    }
})

const SearchBar = () => {
    const classes = useStyles();
    const [searchParams, setSearchParams] = useContext(RecipesContext);
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({random: false, byNmae: name})
    }
    const handleRandom = (e) => {
        e.preventDefault();
        setSearchParams({random: true, byName: ''})
    }

    return ( 
        <Container className={classes.root}>
            <form className={classes.form}>
                <TextField 
                id="outlined-basic" 
                label="Search by name" 
                variant="outlined" 
                onChange={e => setName(e.target.value)}
                className={classes.input}/>
                <Button 
                variant="contained" 
                color="primary"
                className={classes.search}>
                    Search
                </Button>
                <Button 
                variant="contained" 
                color="secondary"
                onClick={handleRandom}>
                    Surprise me!
                </Button>
            </form>
        </Container>
     );
}
 
export default SearchBar;