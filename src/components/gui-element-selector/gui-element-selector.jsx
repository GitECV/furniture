import React, { setState } from "react";
import { Avatar } from 'primereact/avatar';
import { Knob } from 'primereact/knob';
import elementImage  from '../../images/Wood049_PREVIEW.jpg'
import elementImage2  from '../../images/Metal038_PREVIEW.jpg'

export default class TreeDElementContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        material: "1",
        value: "0",
      };
    }

    handleSelectMaterial = (mat) => {
      this.setState({material : mat}, () => {console.log(this.state.material)});
    }

    render() {
      let renderElement = null;
      switch (this.props.MaterialType) {
        case "metal":
          renderElement = (<div className="GUI-material">
          <div className='material-selector'>
              <Avatar onClick={() => this.handleSelectMaterial("1")} shape="circle" size='xlarge' image={ elementImage2 } />
              <Avatar onClick={() => this.handleSelectMaterial("2")} shape="circle" size='xlarge' image={ elementImage2 } />
              <Avatar onClick={() => this.handleSelectMaterial("3")} shape="circle" size='xlarge' image={ elementImage2 } />
          </div>
          <h2>Pulido</h2>
              <Knob value={this.state.value} valueColor={"MediumTurquoise"} rangeColor={"SlateGray"} onChange={(e) => this.setState({value: (e.value)})} />
          </div>);
          break;
        case "wood":
          renderElement = (<div className="GUI-material">
          <div className='material-selector'>
              <Avatar onClick={() => this.handleSelectMaterial("1")} shape="circle" size='xlarge' image={ elementImage } />
              <Avatar onClick={() => this.handleSelectMaterial("2")} shape="circle" size='xlarge' image={ elementImage } />
              <Avatar onClick={() => this.handleSelectMaterial("3")} shape="circle" size='xlarge' image={ elementImage } />
          </div>
          <h2>Pulido</h2>
              <Knob value={this.state.value} valueColor={"MediumTurquoise"} rangeColor={"SlateGray"} onChange={(e) => this.setState({value: (e.value)})} />
          </div>);
          break;
        default:
          renderElement = null;
          break;
      }
        return renderElement;
      }
}
