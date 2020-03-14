import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpoTableofcontentsSpfxWebPartStrings';
import SpoTableofcontentsSpfx from './components/SpoTableofcontentsSpfx';
import { ISpoTableofcontentsSpfxProps } from './components/ISpoTableofcontentsSpfxProps';

export interface ISpoTableofcontentsSpfxWebPartProps {
  nodes: string[];
  description: string;
}

export default class SpoTableofcontentsSpfxWebPart extends BaseClientSideWebPart <ISpoTableofcontentsSpfxWebPartProps> {

  protected onInit(): Promise<void> {
    // create a new promise
    return new Promise<void>((resolve, _reject) => {
        this.properties.nodes = Array.prototype.slice.call(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
        // resolve the promise
        resolve(undefined);
    });
  }

  public render(): void {
    const element: React.ReactElement<ISpoTableofcontentsSpfxProps> = React.createElement(
      SpoTableofcontentsSpfx,
      {
        nodes: this.properties.nodes,
        description: this.properties.description
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
