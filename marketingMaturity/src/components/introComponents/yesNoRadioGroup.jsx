import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import PillButton from './buttons/pillButton';

export default function YesNoGroup({ error, selected, setSelected }) {
    return (
        <FormControl error={error}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginBottom: 10 }}>
                <PillButton 
                    onClick={() => setSelected('yes')} 
                    style={{ backgroundColor: selected === 'yes' ? '#099' : 'gray' }}
                >
                    Yes
                </PillButton>
                <PillButton 
                    onClick={() => setSelected('no')} 
                    style={{ backgroundColor: selected === 'no' ? '#099' : 'gray' }}
                >
                    No  
                </PillButton>
            </div>
            {error && (
                <FormHelperText style={{ textAlign: 'center' }}>
                    Please choose an option.
                </FormHelperText>
            )}
        </FormControl>
    );
}
