import * as React from 'react';
import styles from './SpoTableofcontentsSpfx.module.scss';
import { ISpoTableofcontentsSpfxProps } from './ISpoTableofcontentsSpfxProps';
import  Treenode  from './TreeNode/treenode';
import { escape } from '@microsoft/sp-lodash-subset';

export interface ISpoTableofcontentsSpfxState {
  anchors : string[]
}

export default class SpoTableofcontentsSpfx extends React.Component<ISpoTableofcontentsSpfxProps, ISpoTableofcontentsSpfxState> {
  constructor(props: any) {
    super(props)

    this.state = {
      anchors: this.props.nodes
    }
  }

  public componentDidUpdate() {
    let anchorsList = Array.prototype.slice.call(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
    console.warn(anchorsList.length);
    this.setState({
      anchors: [...this.state.anchors, anchorsList]
    });
  }

  public render(): React.ReactElement<ISpoTableofcontentsSpfxProps> {
    return (
      <div>
        <Treenode nodeArray={this.state.anchors}></Treenode>
        <button onClick={this.getAnchors}>clickedy click</button>
      </div>
    );
  }

  private getAnchors(){
    let anchors = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    console.info(anchors.length);
  }
}
