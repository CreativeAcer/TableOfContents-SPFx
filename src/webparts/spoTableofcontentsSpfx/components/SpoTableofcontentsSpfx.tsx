import * as React from 'react';
import styles from './SpoTableofcontentsSpfx.module.scss';
import { DefaultButton} from 'office-ui-fabric-react';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { ISpoTableofcontentsSpfxProps } from './ISpoTableofcontentsSpfxProps';
import  Treenode  from './TreeNode/treenode';
import { escape } from '@microsoft/sp-lodash-subset';

export interface ISpoTableofcontentsSpfxState {
  anchors : Element[];
  showNodes: boolean;
  showPlaceholder: Boolean;
}

export default class SpoTableofcontentsSpfx extends React.Component<ISpoTableofcontentsSpfxProps, ISpoTableofcontentsSpfxState> {
  private levelMapping = {
    1: "h2",
    2: "h2, h3",
    3: "h2, h3, h4",
  };

  constructor(props: any) {
    super(props);

    this.state = {
      anchors: [],
      showNodes: false,
      showPlaceholder: true
    };

    this.showAnchors = this.showAnchors.bind(this);
  }

  public componentDidUpdate(prevProps: any, prevState: any) {
    if (this.props.levels !== prevProps.levels) {
      if (this.props.levels !== null) {
        // hide config warning
        this.setState({
          showPlaceholder: false
        });
        //this.showAnchors();
      } else {
        this.setState({
          showPlaceholder: true
        });
      }
    }
  }

  

  public render(): React.ReactElement<ISpoTableofcontentsSpfxProps> {
    if (this.state.showPlaceholder) {
      return (
        <Placeholder
          iconName="Edit"
          iconText="Index web part configuration"
          description="Please select the amount of levels you would like to display."
          buttonLabel="Configure"
          onConfigure={this.props.configureWebpart} />
      );
    }
    return (
      <div>
        <DefaultButton text={this.state.showNodes ? "Hide index" : "Show index"} onClick={this.showAnchors} allowDisabledFocus />
        {this.state.showNodes ? <Treenode nodeArray={this.state.anchors}></Treenode> : null} 
      </div>
    );
    
  }

  private showAnchors(){
    let anchorsList = Array.prototype.slice.call(document.querySelectorAll(this.levelMapping[this.props.levels]));
    this.setState({
      showNodes: !this.state.showNodes,
      anchors: anchorsList
    });
  }
}
