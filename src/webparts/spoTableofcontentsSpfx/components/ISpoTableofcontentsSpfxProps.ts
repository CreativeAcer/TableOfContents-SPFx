import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ISpoTableofcontentsSpfxProps {
  nodes: Element[];
  description: string;
  // context: WebPartContext;
  configureWebpart: () => any;
  levels: number;
}
