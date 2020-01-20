
import React from 'react';
import logo from './logo.svg';  
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fretboard, { chordNotes, scaleNotes, intervalNotes } from 'react-fretboard';





function App() {

  let imgUrl = './tiedye.jpg'

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

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    
  }, []);

  const handleChange = event => {
    console.log(event.target.value)
    //setAge(event.target.value);
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
        selectedNotes={['C']}
        style={{background: "#999999"}}
        showNotes={true}
        theme={{ statusMap: { selected: '#b9e59e' }, background: "#111111"}}
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
          onChange={handleChange}
        >
          <MenuItem value={"A"}>A</MenuItem>
          <MenuItem value={20}>A#/Bb</MenuItem>
          <MenuItem value={30}>B</MenuItem>
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
          onChange={handleChange}
        >
          <MenuItem value={10}>Major</MenuItem>
          <MenuItem value={20}>Minor</MenuItem>
          <MenuItem value={30}>Minor penatonic</MenuItem>
        </Select>
      </FormControl>

    </span>

        
      </header>
    </div>
  );
}

export default App;
