import * as React from 'react';
import { escape } from '@microsoft/sp-lodash-subset';

export interface InodeProps {
    nodeItem: string;
    hrefLink: string;
}

export default class NodeItem extends React.Component<InodeProps, {}> {
    constructor(props: any){
        super(props);  
      }
      
    public render(): React.ReactElement<InodeProps> {
        return (
          <div>
            test
          </div>
        );
      }
}