import React from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

function CustomTextField({ label, height }) {
  return (
    <TextField 
      disabled
      label={label}
      fullWidth
      sx={{
       
        paddingRight:1,
        marginTop:5,
       
        marginRight: 2,
        '& .MuiInputBase-root': {
          height: 43,
          borderRadius: '7px',
          borderColor:"#283B54"
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" disabled>
              <KeyboardArrowDown fontSize='small' />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

function DataList() {
  return (
    <Box display="flex" alignItems="center"  >
      <CustomTextField label="id"  />
      <CustomTextField label="Group" />
      <CustomTextField label="State"  />
      <CustomTextField label="Zip Code" />
      <CustomTextField label="Phone"  />
      <CustomTextField label="Email"  />
      <CustomTextField label="Address"  />
    </Box>
  );
}

export default DataList;
