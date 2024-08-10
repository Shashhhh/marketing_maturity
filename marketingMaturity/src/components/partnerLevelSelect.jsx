import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function PartnerLevelSelect() {
  const [partnerLevel, setPartnerLevel] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleChange = (event) => {
    setPartnerLevel(event.target.value);
    setError(false);
  };

  const validateSelection = () => {
    if (!partnerLevel) {
      setError(true);
      return false;
    }
    return true;
  };

  return (
    <div>
      <FormControl sx={{ marginBottom: '22px', width: 300 }}>
        <InputLabel id="partner-level-select-label">Partner Level</InputLabel>
        <Select
          labelId="partner-level-select-label"
          id="partner-level-select"
          value={partnerLevel}
          onChange={handleChange}
          label="Partner Level"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Platinum'}>Platinum</MenuItem>
          <MenuItem value={'Gold'}>Gold</MenuItem>
          <MenuItem value={'Silver'}>Silver</MenuItem>
        </Select>
        {error && <FormHelperText>Please select a partner level.</FormHelperText>}
      </FormControl>
    </div>  
  );
}
