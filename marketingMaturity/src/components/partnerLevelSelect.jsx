import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PartnerLevelSelect() {
  const [partnerLevel, setPartnerLevel] = React.useState('');

  const handleChange = (event) => {
    setPartnerLevel(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ marginLeft: 3, marginBottom: 3, width: 300 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Partner Level</InputLabel>
        <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={partnerLevel}
        onChange={handleChange}
        label="partnerLevel"
        >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        <MenuItem value={'Platinum'}>Platinum</MenuItem>
        <MenuItem value={'Gold'}>Gold</MenuItem>
        <MenuItem value={'Silver'}>Silver</MenuItem>
        </Select>
    </FormControl>
    </div>  
);
}