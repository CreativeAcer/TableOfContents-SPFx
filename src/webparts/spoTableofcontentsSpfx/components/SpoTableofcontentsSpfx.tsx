import * as React from 'react';
import styles from './SpoTableofcontentsSpfx.module.scss';
import { ISpoTableofcontentsSpfxProps } from './ISpoTableofcontentsSpfxProps';
import  Treenode  from './TreeNode/treenode';
import { escape } from '@microsoft/sp-lodash-subset';

export interface ISpoTableofcontentsSpfxState {
  anchors : string[],
  showNodes: boolean
}

export default class SpoTableofcontentsSpfx extends React.Component<ISpoTableofcontentsSpfxProps, ISpoTableofcontentsSpfxState> {
  constructor(props: any) {
    super(props)

    this.state = {
      anchors: [],
      showNodes: false
    }

    this.showAnchors = this.showAnchors.bind(this);
  }

  // public componentDidMount() {
  //   let anchorsList = Array.prototype.slice.call(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
  //   this.setState({
  //     anchors: [...this.state.anchors, anchorsList]
  //   });
  // }

  public render(): React.ReactElement<ISpoTableofcontentsSpfxProps> {
    return (
      <div>
        {this.state.showNodes ? <Treenode nodeArray={this.state.anchors}></Treenode> : null}
        <button onClick={this.showAnchors}>clickedy click</button>
      </div>
    );
  }

  private showAnchors(){
    let anchorsList = Array.prototype.slice.call(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
    this.setState({
      showNodes: !this.state.showNodes,
      anchors: this.state.showNodes ? [...this.state.anchors, anchorsList] : []
    });
    console.log(this.state.anchors);
  }
}
