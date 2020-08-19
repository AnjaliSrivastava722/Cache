

import React from 'react';
import Typography from '@material-ui/core/Typography';
 
import {Grid} from "@material-ui/core";
import Link from '@material-ui/core/Link';


  const Content =() =>{
    
  
    return (
 
        
   <Grid container>
    <Grid item xs={2} sm={3} />
  
     <Grid item xs={4} sm={3} justify="center" alignItems="center" >
  
   <Typography><h2><Link color="inherit">About</Link></h2></Typography>
   <Typography><h2><Link color="inherit">About</Link></h2></Typography>
   <Typography><h2><Link color="inherit">About</Link></h2></Typography>
   
  

  </Grid>
  <Grid item  justify="center" alignItems="center" xs={2} sm={3}>
  
  <Typography><h2><Link color="inherit">About</Link></h2></Typography>
  <Typography><h2><Link color="inherit">About</Link></h2></Typography>
  <Typography><h2><Link color="inherit">About</Link></h2></Typography>

  </Grid>
  
  <Grid item  xs={8} sm={2} justify="flex-end" alignItems="flex-end">

  <Typography><h2><Link color="inherit">About</Link></h2></Typography>
  <Typography><h2><Link color="inherit">About</Link></h2></Typography>
  <Typography><h2><Link color="inherit">About</Link></h2></Typography>
    
  </Grid>
  <Grid item sm={3} />

 



</Grid>

       

        );
    };
     export default Content;
