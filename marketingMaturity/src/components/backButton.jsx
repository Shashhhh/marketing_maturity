import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
export default function BackButton(props) {
return (

    <IconButton aria-label="next" {...props}>
        <NavigateBeforeIcon />
    </IconButton>

);
}