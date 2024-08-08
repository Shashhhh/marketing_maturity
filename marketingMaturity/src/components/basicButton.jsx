import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  padding: 8,
  borderRadius: 25,
  width: 150,
  fontSize: 16,
  fontWeight: 'bold',
  backgroundColor: '#099',
  '&:hover': {
    backgroundColor: '#077',
  },
}));

function BasicButton(props) {
  return <StyledButton variant="contained" {...props} />;
}

export default BasicButton;
