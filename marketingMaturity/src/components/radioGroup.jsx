import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';

const OptionContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginTop: theme.spacing(1),
    textAlign: 'left',
}));

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

export default function RadioButtonsGroup({ formLabel, options, selectedValue, onValueChange, error }) {
    return (
        <FormControl sx={{ marginTop: 2 }} required error={error}>
            <StyledFormLabel id={formLabel}>{formLabel}</StyledFormLabel>
            <RadioGroup
                aria-labelledby={formLabel}
                name="radio-buttons-group"
                value={selectedValue}
                onChange={(e) => onValueChange(e.target.value)}
            >
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
