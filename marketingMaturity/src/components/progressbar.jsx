import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: '100%',
  height: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));

export default function ProgressBar({ progress, prevProgress, navBack = false }) {
  const [currentProgress, setCurrentProgress] = useState(() => navBack ? progress : prevProgress);


  useEffect(() => {
    if (currentProgress < progress && !navBack) {
      setCurrentProgress(progress);
    } 
  }, [progress, navBack, currentProgress]);

  return (
    <Box sx={{ width: '100%' }}>
      <BorderLinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
