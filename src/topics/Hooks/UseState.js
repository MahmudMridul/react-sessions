import React from 'react';
import {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './UseState.css';

export const UseState = () => {

    const [count, setcount] = useState(0);
    
    return (

        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap','& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
        
                <Paper elevation={3} >
                    <span className='count'>{count}</span>
                </Paper>
            </Box>

            <Stack direction="row" spacing={2}>
                <Button 
                    variant="outlined" 
                    color="primary" 
                    startIcon={<FontAwesomeIcon icon={faPlus} />}
                    onClick={() => setcount(count + 1)}
                >
                    Inc
                </Button>
                
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    startIcon={<FontAwesomeIcon icon={faMinus} />}
                    onClick={() => setcount(count - 1)}
                >
                    Dec
                </Button>
            </Stack>
        </>
        
    )
}
