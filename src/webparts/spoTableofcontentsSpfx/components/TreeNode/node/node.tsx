import * as React from 'react';
import { escape } from '@microsoft/sp-lodash-subset';
import { Link } from 'office-ui-fabric-react/lib/Link';

export interface InodeProps {
    nodeItem: Element;
}

export default class NodeItem extends React.Component<InodeProps, {}> {
    constructor(props: any){
        super(props);  
      }
      
    public render(): React.ReactElement<InodeProps> {
        return (
          <Link href={`#` + this.props.nodeItem.textContent.replace(/\s+/g, '-').toLowerCase()}>{this.props.nodeItem.textContent}</Link>
        );
      }
}