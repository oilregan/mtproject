import React, { Component } from 'react';


export class Style extends Component {

  state = {
    path: ""
  }

  OnClickStyle = (event) => 
  {
    this.setState({path: event.target.value});
  }

  render() {

    var btn_renderer = [];
    var myPath = "";

    var arr = this.props.values;

    for(var i = 0; i < arr.length; i++)
    {
      btn_renderer.push(
        <button className="column is-2" style={{background: arr[i].Color, width:25, height:25, marginRight:"2px"}} value={arr[i].Path} onClick={this.OnClickStyle} ></button>
      );
    }

    if(arr.length > 0)
    {
      myPath = arr[0].Path;
      for(var i = 0; i < arr.length; i++)
      {
        if(this.state.path == arr[i].Path)
        {
          myPath = this.state.path;
          break;
        }
      }
    }
    return (
     <div>
      
        <figure className="image is-128*128">
          <img src={myPath}/>
            <br/>
            <div className="columns" style={{marginLeft:"1px"}}>
              {btn_renderer}
            </div>
        </figure>
            <br/>

    

     </div>
    );
  }
}
