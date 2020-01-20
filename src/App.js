
import React from 'react';  
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fretboard, {scaleNotes} from 'react-fretboard';





function App() {

  

  const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: "30px",
    margin: theme.spacing(1),
    minWidth: 120,
    background: '#FFFFFF',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  }));

  const classes = useStyles();
  const [age, setAge] = React.useState('');


  const handleChangeKey = event => {
    console.log(event.target.value)
    console.log("changing key")
    setAge(event.target.value);
  };

  const handleChangeType = event => {
    console.log(event.target.value)
    console.log("changing type")

    setAge(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">

        <div>
          <h1> <u> Guitar Scales </u> </h1>
        </div>
    
    <div style={{width: "900px"}}>
      <Fretboard
        nrOfFrets={18}
        style={{background: "#999999"}}
        showNotes={true}
        selectedNotes={scaleNotes('C', 'minor')}
        theme={{ statusMap: { selected: 'blue' }, background: "#111111"}}
      />
    </div>

      <span>
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Key</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          style={{useStyles}}
          onChange={handleChangeKey}
        >
          <MenuItem value={"A"}>A</MenuItem>
          <MenuItem value={"A#"}>A#/Bb</MenuItem>
          <MenuItem value={"B"}>B</MenuItem>
          <MenuItem value={10}>C</MenuItem>
          <MenuItem value={20}>C#/Db</MenuItem>
          <MenuItem value={30}>E</MenuItem>
          <MenuItem value={10}>F</MenuItem>
          <MenuItem value={20}>F#/Gb</MenuItem>
          <MenuItem value={30}>G</MenuItem>
          <MenuItem value={20}>G#/Ab</MenuItem>
        </Select>
      </FormControl>
      
    
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Scale</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChangeType}
        >
          <MenuItem value={"major"}>Major</MenuItem>
          <MenuItem value={"minor"}>Minor</MenuItem>
        </Select>
      </FormControl>

    </span>

        
      </header>
    </div>
  );
}

export default App;
