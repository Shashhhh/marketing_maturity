import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function NextButton(props) {
return (

    <IconButton aria-label="next" {...props}>
        <NavigateNextIcon />
    </IconButton>

);
}