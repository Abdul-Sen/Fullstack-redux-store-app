import React, { Fragment } from 'react'
import {makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Paper } from '@material-ui/core';
import FormComponent from '../components/formComponent/formComponent'
const useStyles = makeStyles(theme =>({
    root : {
        [theme.breakpoints.up('md')]:{
            height: "100vh",
            background: "#6190E8",
            background: "linear-gradient(220deg, #A7BFE8, #5a8ae6)"    
        }
        
    },
    card: {
        marginTop: "15px"
    }
    ,
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "100%"
        },

    gridItem: {
        height: "100%",
    },
    paperContainer: {
        [theme.breakpoints.up('md')]:
        {
            height: "80%",
            marginTop: "6%"    
        }
    }
}))

function Login(props)
{
    const cssStyle = useStyles();
    return (
        <Fragment>
            <CssBaseline />
            <Grid container  component="main" className={cssStyle.root} justify="center">
                <Grid item md={8} sm={12} xs={12} className={cssStyle.gridItem}>

                    <Grid  container  direction="row"  justify="center"  alignItems="stretch"  className={cssStyle.paperContainer} component={Paper} elevation={12} >

                        <Grid item md={6} sm={6} xs={false} className={cssStyle.image} ></Grid>
                        <Grid item md={6} sm={12} xs={12} className={cssStyle.card}>
                            <FormComponent/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default Login;