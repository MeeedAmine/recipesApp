import { makeStyles, Drawer, Typography, Hidden, CssBaseline } from '@material-ui/core'
import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { useTheme } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';

const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        page:{
            background: '#f9f9f9',
            padding: theme.spacing(3),
            flexGrow: 1,
        },
        drawer:{
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
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
        appBar:{
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        toolbar: theme.mixins.toolbar,
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
              display: 'none',
            },
        },
    }
})


const Layout = ({ children }) => {
    const theme = useTheme();
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
    const menuItems = [
        {
            text: 'Recipes',
            icon: <RestaurantIcon color="secondary" />,
            path: '/'
        },
        {
            text: 'My Favorites',
            icon: <FavoriteIcon color="secondary" />,
            path: '/favorites'
        }
    ]

    const drawerContent = (
        <div>
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
        </div>
    )
    
    return ( 
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                Find the best recipes
            </Typography>
            </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
            <Drawer
            className={classes.drawer}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
                {drawerContent}
            </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
            <Drawer
            classes={{
                paper: classes.drawerPaper,
              }}
            variant="permanent"
            open
            >
                {drawerContent}
            </Drawer>
        </Hidden>
        </nav>
            <main className={classes.page}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
     );
}
 
export default Layout;