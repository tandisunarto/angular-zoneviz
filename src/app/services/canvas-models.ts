export type ItemType = 'item' | 'controlAction';
export type SiteType =
  | 'site'
  | 'organization'
  | 'management'
  | 'shim'
  | 'shim1';
export type ElementType = 'rectangle' | 'line' | 'roundrectangle' | 'ellipse';
export type VrfType = 'untrust' | 'trust' | 'dmz' | 'cp';
export type Level = 'level-0' | 'level-1' | 'level-2';

export interface CanvasElement {
  x: number;
  y: number;
  width: number;
  height: number;

  elementType: ElementType;
  elementColor: string;

  siteName: string;
  siteDescription: string;
  // siteType: SiteType;

  fontColor: string;
  fontScale: number;

  hasEvent: boolean;
  eventArgs: any;
}

export enum Action {
  CollapseAll = 'Collapse All',
  Collapse = 'Collapse',
  Expand = 'Expand',
  ExpandLevel1 = 'Expand Level 1',
  ExpandLevel2 = 'Expand Level 2',
  Show = 'Show',
  None = 'None'
}
