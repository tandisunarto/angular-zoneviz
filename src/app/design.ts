import { enclaves } from './data';
import { CanvasElement } from './models';

export function buildWorldElements(worlds: any[]): CanvasElement[] {
  const maxPerRow: number = 5;
  const enclaveWidth = 150;
  const enclaveHeight = 70;

  let canvasElements: CanvasElement[] = [];
  let row = 0;
  let currentRowCount = 0;

  let xStart: number = 20;
  let yStart: number = 30;

  let xMargin: number = 50;
  let yMargin: number = 50;

  worlds.forEach((world, index) => {
    if (currentRowCount == maxPerRow) {
      row++;
      currentRowCount = 0;
    }

    let xOffset = (enclaveWidth + xMargin) * currentRowCount;
    let yOffset = (enclaveHeight + yMargin) * row;

    canvasElements.push({
      x: xStart + xOffset,
      y: yStart + yOffset,
      width: enclaveWidth,
      height: enclaveHeight,
      siteName: world.name,
      elementType: 'rectangle',
      elementColor: '#B1F196',
      fontColor: 'black',
      fontScale: 17,
      hasEvent: true,
    });

    currentRowCount++;
  });
  return canvasElements;
}

export function buildEnclaveElements(): CanvasElement[] {
  let canvasElements: CanvasElement[] = [];
  enclaves.forEach((enclave, enclaveIndex) => {
    const { securityZones, networkObjects } = enclave;

    let xStart: number = 20;
    let yStart: number = 30 + 250 * enclaveIndex;
    const xMargin: number = 10;
    const yMargin: number = 30;

    let xOffset: number = 0;
    let yOffset: number = 0;

    networkObjects.forEach((networkObject, index) => {
      xOffset = 400 * index;
      yOffset = 0;
      canvasElements.push({
        x: xStart + xOffset,
        y: yStart + yOffset,
        width: 200,
        height: 200,
        siteName: networkObject.name,
        elementType: 'rectangle',
        elementColor: '#B1F196',
        fontColor: 'black',
        fontScale: 14,
        hasEvent: false,
      });
    });

    console.log(networkObjects);

    securityZones.forEach((securityZone, zoneIndex) => {
      const { path } = securityZone;
      const elementZoneWidth = 80;
      const elementZoneHeight = 35;

      let previousNetworkObjectIndex = null;
      let currentNetworkObjectIndex = null;

      path.forEach((id, index) => {
        previousNetworkObjectIndex =
          currentNetworkObjectIndex !== null
            ? currentNetworkObjectIndex
            : previousNetworkObjectIndex;
        currentNetworkObjectIndex = networkObjects.findIndex(
          (n) => n.id === id
        );
        xOffset = xMargin + 400 * currentNetworkObjectIndex;
        yOffset = yMargin + zoneIndex * 40;
        const networkObject = networkObjects.find((n) => n.id === id);

        canvasElements.push({
          x: xStart + xOffset,
          y: yStart + yOffset,
          width: elementZoneWidth,
          height: elementZoneHeight,
          siteName: securityZone.name,
          elementType: 'roundrectangle',
          elementColor: '#224A11',
          fontColor: 'white',
          fontScale: 14,
          hasEvent: true,
        });

        if (currentNetworkObjectIndex > 0) {
          // connection line
          canvasElements.push({
            x: xStart + xOffset,
            y: yStart + yOffset + elementZoneHeight / 2,
            width: 400 - elementZoneWidth,
            height: 50,
            siteName: '',
            elementType: 'line',
            elementColor: '#224A11',
            fontColor: '',
            fontScale: 12,
            hasEvent: false,
          });
        }
      });
    });
  });

  return canvasElements;
}
