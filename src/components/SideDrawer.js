import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import { scroller } from 'react-scroll';
 

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
        duration: 1500,
        delay: 50,
        smooth: true,
        });
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
            >
            <List component="nav">
            <Link to="/" style={{ textDecoration: 'none', color: '#000' }}> 
                    <ListItem button onClick={()=> scrollToElement('Home')}>
                        Home
                    </ListItem>
                </Link>
                <Link to="/attractions" style={{ textDecoration: 'none', color: '#000' }}> 
                    <ListItem button onClick={()=> scrollToElement('Attractions')}>
                        Attractions
                    </ListItem>
                </Link>
                <Link to="/Contact" style={{ textDecoration: 'none', color: '#000' }}> 
                    <ListItem button onClick={()=>  scrollToElement('Contact')}>
                        Contact
                    </ListItem>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: '#000' }}> 
                    <ListItem button onClick={()=>  scrollToElement('About')}>
                        About
                    </ListItem>
                </Link>
                <Link to="/prices" style={{ textDecoration: 'none', color: '#000' }}> 
                    <ListItem button onClick={()=>  scrollToElement('Pricing')}>
                        Prices
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    );
};

export default SideDrawer;