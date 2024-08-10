import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';

const OptionContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    borderBottom: '1px solid #ddd',
    '&:last-child': {
        borderBottom: 'none'
    }
}));

export default function RadioButtonsGroup({ formLabel, options }) {
    return (
        <FormControl sx={{ marginTop: 2 }} required>
            <FormLabel id={formLabel}>{formLabel}</FormLabel>
            <RadioGroup aria-labelledby={formLabel} name="radio-buttons-group">
                {options.map((option, index) => (
                    <OptionContainer key={index}>
                        <FormControlLabel
                            value={index + 1}
                            control={<Radio />}
                            label={option}
                        />
                    </OptionContainer>
                ))}
            </RadioGroup>
        </FormControl>
    );
}
