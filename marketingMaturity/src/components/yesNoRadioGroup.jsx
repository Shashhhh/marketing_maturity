import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function YesNoGroup({error}) {
  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Do you have a dedicated marketing person on staff?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        required
        error={error}
      >
        <FormControlLabel  value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel  value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}