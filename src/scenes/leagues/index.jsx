import React, { useState } from "react";
import Header from "../../components/Header";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ContestantsTable from "../../components/Scores";
import { TextField } from "@mui/material";

const League = () => {
  const [league, setLeague] = useState('Pick A League');
  const [numOfInputBoxes, setNumOfInputBoxes] = useState(10);

  const twogun = [
    { name: 'Shooter 1', score: 95 },
    { name: 'Shooter 2', score: 88 },
    { name: 'Shooter 3', score: 86 },
    { name: 'Shooter 4', score: 82 },
    { name: 'Shooter 5', score: 78 },
    { name: 'Shooter 6', score: 64 },
  ];

  const challenge = [
    { name: 'Shooter 1', score: 80 },
    { name: 'Shooter 2', score: 75 },
    { name: 'Shooter 3', score: 70 },
    { name: 'Shooter 4', score: 70 },
    { name: 'Shooter 5', score: 68 },
    { name: 'Shooter 6', score: 64 },
  ];

  const weekly = [
    { name: 'Shooter 1', score: 112 },
    { name: 'Shooter 2', score: 110 },
    { name: 'Shooter 3', score: 105 },
    { name: 'Shooter 4', score: 98 },
    { name: 'Shooter 5', score: 95 },
    { name: 'Shooter 6', score: 92 },
    { name: 'Shooter 7', score: 90 },
    { name: 'Shooter 8', score: 88 },
    { name: 'Shooter 9', score: 86 },
    { name: 'Shooter 10', score: 84 },
  ];

  let selectedTable;
  
  switch (league) {
    case '2Gun':
      selectedTable = twogun;
      break;
    case '22Challange':
      selectedTable = challenge;
      break;
    case 'Weekly':
      selectedTable = weekly;
      break;
    default:
      selectedTable = [];
      break;
  }


  const handleChange = (event) => {
    setLeague(event.target.value);
  
    setNumOfInputBoxes(5);
  };

  const handleInputChange = (event) => {
    setNumOfInputBoxes(event.target.value)
  }

  const renderInputBoxes = () => {
    const inputBoxes = [];
    for (let i = 1; i <= numOfInputBoxes; i++) {
      inputBoxes.push(
        <TextField key={i} id={`place${i}`} label={`${i} Place`} variant="filled" />
      );
    }
    return inputBoxes;
  };
  

  return (
    <Box>
      <Header title="MANAGE LEAGUES" subtitle="Manage your leagues" />
      <Box
        display={'flex'}
        justifyContent={"space-between"}
      >
        <FormControl fullWidth style={{ marginBottom: '20px', maxWidth: '200px' }}>
          <h1>League</h1>
          <InputLabel id="demo-slimple-select-label">Pick your League</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={league}
            label="League"
            onChange={handleChange}
            style={{ width: '200px' }}
          >
            <MenuItem value={'2Gun'}>2 Gun</MenuItem>
            <MenuItem value={'22Challange'}>.22 Challenge</MenuItem>
            <MenuItem value={'Weekly'}>Weekly</MenuItem>
          </Select>
          <TextField
           id="inputBoxes" 
           label='How many Scores to enter' 
           onChange={handleInputChange} 
           variant='filled'
           style={{ width: '200px' }} 
           />
        </FormControl>
        <div style={{ maxWidth: '400px' }}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <h1>Enter New Scores</h1>
            {renderInputBoxes()}          
          </Box>
        </div>
        <Box
        style={{ width: '40%' }}
        >
          <h1>Scores</h1>
          <ContestantsTable contestants={selectedTable} />
        </Box>
      </Box>
    </Box>
  );
};

export default League;