import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, PropertyPaneDropdown } from '@microsoft/sp-webpart-base';

import * as strings from 'SpoTableofcontentsSpfxWebPartStrings';
import SpoTableofcontentsSpfx from './components/SpoTableofcontentsSpfx';
import { ISpoTableofcontentsSpfxProps } from './components/ISpoTableofcontentsSpfxProps';

export interface ISpoTableofcontentsSpfxWebPartProps {
  levels: number;
}

export default class SpoTableofcontentsSpfxWebPart extends BaseClientSideWebPart <ISpoTableofcontentsSpfxWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpoTableofcontentsSpfxProps> = React.createElement(
      SpoTableofcontentsSpfx,
      {
        levels: this.properties.levels,
        configureWebpart: this._configureWebPart,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private _configureWebPart = () => {
    this.context.propertyPane.open();
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneDropdown('levels', {
                  label: 'Amount to display',
                  options: [
                    { key: '1', text: 'One Level', index: 0},
                    { key: '2', text: 'Two Levels', index: 1},
                    { key: '3', text: 'Three Levels', index: 2},
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
