
import React from 'react';  
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fretboard, {scaleNotes} from 'react-fretboard';



class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

        key: "C",
        type: "major"
      }


    }
  


  


  handleChangeKey = event => {
    console.log(event.target.value)
    console.log("changing key")
    this.setState({key: event.target.value })
  };

  handleChangeType = event => {
    console.log(event.target.value)
    console.log("changing type")

    this.setState({type: event.target.value })
  };

  render = () => {


  return (
    <div className="App">
      <header className="App-header">

        <div>
          <h1> <u> Guitar Scales </u> </h1>
        </div>
    
    <div style={{ width: '45%', height: '100%'}}>
      <Fretboard
        nrOfFrets={18}
        
        showNotes={true}
        selectedNotes={scaleNotes(this.state.key, this.state.type)}
        theme={{ statusMap: { selected: 'blue' }, background: "#111111"}}
      />
    </div>

      <span style={{margin: '20px'}}>

      <span style={{margin: '20px'}}>
      
      <FormControl style={{background: '#FFFFFF', width: '75px'}}>
        <InputLabel id="demo-simple-select-label">Key</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.key}
          onChange={this.handleChangeKey}
        >
          <MenuItem value={"A"}>A</MenuItem>
          <MenuItem value={"A#"}>A#/Bb</MenuItem>
          <MenuItem value={"B"}>B</MenuItem>
          <MenuItem value={"C"}>C</MenuItem>
          <MenuItem value={"C#"}>C#/Db</MenuItem>
          <MenuItem value={"E"}>E</MenuItem>
          <MenuItem value={"F"}>F</MenuItem>
          <MenuItem value={"F#"}>F#/Gb</MenuItem>
          <MenuItem value={"G"}>G</MenuItem>
          <MenuItem value={"G#"}>G#/Ab</MenuItem>
        </Select>
      </FormControl>

      </span>

      <span style={{margin: '20px'}}>

      
      
    
      <FormControl style={{background: '#FFFFFF', width: '75px'}}>
        <InputLabel id="demo-simple-select-label">Scale</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.type}
          onChange={this.handleChangeType}
        >
          <MenuItem value={"major"}>Major</MenuItem>
          <MenuItem value={"minor"}>Minor</MenuItem>
        </Select>
      </FormControl>

      </span>
    </span>

        
      </header>
    </div>
  );
}
}

export default App;
