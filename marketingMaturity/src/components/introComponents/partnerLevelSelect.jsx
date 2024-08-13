import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function PartnerLevelSelect({error, selected, setSelected}) {
  return (
    <div>
      <FormControl sx={{ marginBottom: '25px', width: 350, textAlign: 'left'}}>
        <InputLabel id="partner-level-select-label"></InputLabel>
        <Select
          labelId="partner-level-select-label"
          id="partner-level-select"
          value={selected || ''}
          onChange={(event) => setSelected(event.target.value)}
          label="Partner Level"
          variant='standard'
          error={error}
        >
          <MenuItem value={'Platinum'}>Platinum</MenuItem>
          <MenuItem value={'Gold'}>Gold</MenuItem>
          <MenuItem value={'Silver'}>Silver</MenuItem>
        </Select>
        {error &&   <FormHelperText sx={{ color: '#f44336' }}>
            Please select a partner level.
          </FormHelperText>}
      </FormControl>
    </div>  
  );
}
