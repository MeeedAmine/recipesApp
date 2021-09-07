import { makeStyles, Drawer, Typography } from '@material-ui/core'
import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { useHistory, useLocation } from 'react-router-dom';

const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        page:{
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer:{
            width: drawerWidth
        },
        drawerPaper:{
            width: drawerWidth
        },
        root:{
            display:'flex'
        },
        active:{
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar:{
            width: `calc(100% - ${drawerWidth}px)`,
            background: '#ffff'
        },
        toolbar: theme.mixins.toolbar,
        date:{
            flexGrow: 1
        },
        avatar:{
            marginLeft: theme.spacing(2)
        }
    }
})


const Layout = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text: 'Recipes',
            icon: <RestaurantIcon color="secondary" />,
            path: '/'
        },
        {
            text: 'My Favourites',
            icon: <FavoriteIcon color="secondary" />,
            path: '/create'
        }
    ]
    return ( 
        <div className={classes.root}>
            <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                           Recipes
                    </Typography>
                </div>
            {/* list/ links */}
            <List>
                {menuItems.map(item => (
                    <ListItem
                    button
                    key={item.text}
                    onClick={() => history.push(item.path)}
                    className={location.pathname === item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}>
                </div>
                {children}
            </div>

        </div>
     );
}
 
export default Layout;