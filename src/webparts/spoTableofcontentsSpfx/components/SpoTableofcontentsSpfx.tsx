import * as React from 'react';
import styles from './SpoTableofcontentsSpfx.module.scss';
import { ISpoTableofcontentsSpfxProps } from './ISpoTableofcontentsSpfxProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpoTableofcontentsSpfx extends React.Component<ISpoTableofcontentsSpfxProps, {}> {
  public render(): React.ReactElement<ISpoTableofcontentsSpfxProps> {
    return (
      <div className={ styles.spoTableofcontentsSpfx }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
