import * as React from 'react';
import { ItreenodeProps } from './ItreenodeProps';
import NodeItem from './node/node';
import styles from './treenode.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Treenode extends React.Component<ItreenodeProps, {}> {
    constructor(props: any){
        super(props);  
    }

    public render(): React.ReactElement<ItreenodeProps> {
        return (
          <div className={styles.link}>
            {this.props.nodeArray ? this.props.nodeArray.map((item, i) => {             
                // Return the element. Also pass key     
                return (<NodeItem  key={i} nodeItem={item}/>);
            }) : null }
          </div>
        );
      }
}