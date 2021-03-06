import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button  from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';
import {Link} from 'react-router-dom';
import '../resources/styles.css';

class Header extends Component {

  state = {
    drawerOpen: false,
    headerShow: false
  }

  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);
  }

  // componentWillUnmount(){
  // normally if not on homepage remove addEventlistener
  // }

  handleScroll = () =>{
    if(window.scrollY>0){
        this.setState({
          headerShow:true
        })
    } else {
        this.setState({
          headerShow: false

        })
    }
  }

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value
    })
  }
  render() {
    const styles = {
       marginLeft: 'auto'
    }
    return (
      <AppBar
          position="fixed"
          style={{
            backgroundColor: this.state.headerShow ? '#2f2f2f': 'rgba(0%, 0%, 0%, .6)',
            boxShadow: 'none',
            padding: '10px 0px'
          }}
        >

        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">CY Taxi 24h</div>
            <div className="header_logo_title">Your Taxi Service</div>
          </div>

          {/* <Link to="/attractions">
            <Button color="inherit">The team</Button>
          </Link> */}

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={()=>this.toggleDrawer("right", true)}
          >
        
          <MenuIcon/>
    
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value)=> this.toggleDrawer(value)}
            />
     

        </Toolbar>

      </AppBar>
    )
  }
}

export default Header;