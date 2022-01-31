import { Action, CanvasElement } from "./canvas-models";

export function buildWorldElements(worlds: any[]): CanvasElement[] {
  const maxPerRow: number = 5;
  const enclaveWidth = 150;
  const enclaveHeight = 70;

  let canvasElements: CanvasElement[] = [];
  let row = 0;
  let currentRowCount = 0;

  let worldX: number = 20;
  let worldY: number = 30;

  let worldHorizontalMargin: number = 50;
  let worldVerticalMargin: number = 50;

  worlds.forEach((world, index) => {
    if (currentRowCount == maxPerRow) {
      row++;
      currentRowCount = 0;
    }

    let worldHorizontalOffset = (enclaveWidth + worldHorizontalMargin) * currentRowCount;
    let worldVerticalOffset = (enclaveHeight + worldVerticalMargin) * row;

    canvasElements.push({
      x: worldX + worldHorizontalOffset,
      y: worldY + worldVerticalOffset,
      width: enclaveWidth,
      height: enclaveHeight,
      siteName: world.name,
      siteDescription: world.description,
      elementType: 'roundrectangle',
      elementColor: '#B1F196',
      fontColor: 'black',
      fontScale: 17,
      hasEvent: true,
      eventArgs: {
        id: world.id,
        level: world.level,
        action: Action.Expand
      },
    });

    currentRowCount++;
  });
  return canvasElements;
}

export function buildEnclaveElements(data: any, showLevel2: boolean): CanvasElement[] {
  let canvasElements: CanvasElement[] = [];

  canvasElements.push({
    x: 20,
    y: 10,
    width: 120,
    height: 30,
    siteName: 'Collapse All',
    siteDescription: '',
    elementType: 'roundrectangle',
    elementColor: '#1E201E',
    fontColor: 'white',
    fontScale: 14,
    hasEvent: true,
    eventArgs: {
      id: null,
      level: null,
      action: Action.CollapseAll
    },
  });

  let horizontalOffset: number = 0;
  let verticalOffset: number = 0;
  data.enclaves.forEach((enclave, enclaveIndex) => {
    const { securityZones, networkObjects } = enclave;

    if (enclave.level === 2) {
      if (showLevel2) {
        canvasElements.push({
          x: 20,
          y: verticalOffset,
          width: 120,
          height: 30,
          siteName: 'Collapse',
          siteDescription: '',
          elementType: 'roundrectangle',
          elementColor: '#1E201E',
          fontColor: 'white',
          fontScale: 14,
          hasEvent: true,
          eventArgs: {
            id: enclave.id,
            level: enclave.level,
            action: Action.Collapse
          },
        });
      } else {
        canvasElements.push({
          x: 20,
          y: verticalOffset,
          width: 150,
          height: 70,
          siteName: enclave.name,
          siteDescription: '',
          elementType: 'roundrectangle',
          elementColor: '#B1F196',
          fontColor: 'black',
          fontScale: 14,
          hasEvent: true,
          eventArgs: {
            id: enclave.id,
            level: enclave.level,
            action: Action.Expand
          },
        });
      }
    }

    const networkObjectWidth = 200;
    const networkObjectHeight = 45 * (securityZones.length > 2 ? securityZones.length : 2) + 50;
    const networkObjectOffsetX = 500;
    const networkObjectOffsetY = 150;

    let enclaveX: number = 20;
    let enclaveY: number = 70;

    horizontalOffset = 0;
    if (enclave.level === 1 || (enclave.level === 2 && showLevel2)) {
      networkObjects.forEach((networkObject, index) => {
        canvasElements.push({
          x: enclaveX + horizontalOffset,
          y: enclaveY + verticalOffset,
          width: networkObjectWidth,
          height: networkObjectHeight,
          siteName: networkObject.name,
          siteDescription: '',
          elementType: 'rectangle',
          elementColor: '#B1F196',
          fontColor: 'black',
          fontScale: 14,
          hasEvent: false,
          eventArgs: {},
        });
        horizontalOffset += networkObjectOffsetX;
      });


      let zoneX: number = 20;
      let zoneY: number = 40 + verticalOffset;

      verticalOffset += networkObjectHeight + networkObjectOffsetY;

      securityZones.forEach((securityZone, zoneIndex) => {
        const { path } = securityZone;
        const zoneNodetWidth = 100;
        const zoneNodeHeight = 35;

        let previousZoneNode: any = null;
        let currentZoneNode: any = null;

        let zoneHorizontalOffset: number;
        let zoneVerticalOffset: number;

        path.forEach((id, index) => {
          previousZoneNode =
            currentZoneNode !== null ? currentZoneNode : previousZoneNode;

          let networkObjectIndex = networkObjects.findIndex((n) => n.id === id);

          zoneHorizontalOffset = zoneX + networkObjectOffsetX * networkObjectIndex;
          zoneVerticalOffset = zoneY + zoneIndex * 45;
          currentZoneNode = {
            x: enclaveX + zoneHorizontalOffset,
            y: enclaveY + zoneVerticalOffset,
            width: zoneNodetWidth,
            height: zoneNodeHeight,
            siteName: securityZone.name,
            siteDescription: '',
            elementType: 'roundrectangle',
            elementColor: '#224A11',
            fontColor: 'white',
            fontScale: 14,
            hasEvent: true,
            eventArgs: {},
          };

          canvasElements.push(currentZoneNode);

          // line connecting zone nodes
          if (previousZoneNode !== null) {
            canvasElements.push({
              x: enclaveX + zoneHorizontalOffset,
              y: enclaveY + zoneVerticalOffset + zoneNodeHeight / 2,
              width: currentZoneNode.x - previousZoneNode.x - previousZoneNode.width,
              height: 0,
              siteName: '',
              siteDescription: '',
              elementType: 'line',
              elementColor: '#224A11',
              fontColor: '',
              fontScale: 12,
              hasEvent: false,
              eventArgs: {},
            });
          }
        });
      });
    }
  });

  return canvasElements;
}
