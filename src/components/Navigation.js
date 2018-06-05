import React from 'react';
import { Button } from '@material-ui/core';


const Navigation = ({onRouteChange}) =>{
    return(
       <div>
            <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <Button variant="contained" color="primary" onClick={() => onRouteChange('home')} style={{ justifyContent: 'flex-start'}}> home </Button>
                <Button variant="contained" color="primary" onClick={() => onRouteChange('Db')} style={{ justifyContent: 'flex-end'}}> DB </Button>
                <Button variant="contained" color="primary"  onClick={() => onRouteChange('Sw')} > SW </Button>
                <Button variant="contained" color="primary" onClick={() => onRouteChange('Port')}> Port </Button>
                <Button variant="contained" color="primary" onClick={() => onRouteChange('About')}> About </Button>
                <Button variant="contained" color="primary" onClick={() => onRouteChange('Contact')}> Contact </Button>
            </nav>
       </div>
    );
}

export default Navigation;