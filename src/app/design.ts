import { data, enclaves } from './data';
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
      siteDescription: world.description,
      elementType: 'roundrectangle',
      elementColor: '#B1F196',
      fontColor: 'black',
      fontScale: 17,
      hasEvent: true,
      eventArgs: {
        id: world.id,
        level: world.level,
      },
    });

    currentRowCount++;
  });
  return canvasElements;
}

export function buildEnclaveElements(actionElement: any): CanvasElement[] {
  let canvasElements: CanvasElement[] = [];

  const enclaveData = getEnclaveData(actionElement.args);

  enclaveData.enclaves.forEach((enclave, enclaveIndex) => {
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
        siteDescription: '',
        elementType: 'rectangle',
        elementColor: '#B1F196',
        fontColor: 'black',
        fontScale: 14,
        hasEvent: false,
        eventArgs: {},
      });
    });

    securityZones.forEach((securityZone, zoneIndex) => {
      const { path } = securityZone;
      const elementWidth = 80;
      const elementHeight = 35;

      let previousElement = null;
      let currentElement = null;

      path.forEach((id, index) => {
        previousElement =
          currentElement !== null ? currentElement : previousElement;

        let currentElementIndex = networkObjects.findIndex((n) => n.id === id);

        xOffset = xMargin + 400 * currentElementIndex;
        yOffset = yMargin + zoneIndex * 40;
        currentElement = {
          x: xStart + xOffset,
          y: yStart + yOffset,
          width: elementWidth,
          height: elementHeight,
          siteName: securityZone.name,
          siteDescription: '',
          elementType: 'roundrectangle',
          elementColor: '#224A11',
          fontColor: 'white',
          fontScale: 14,
          hasEvent: true,
          eventArgs: {},
        };

        canvasElements.push(currentElement);

        if (previousElement !== null) {
          canvasElements.push({
            x: xStart + xOffset,
            y: yStart + yOffset + elementHeight / 2,
            width: currentElement.x - previousElement.x - previousElement.width,
            height: 50,
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
  });

  return canvasElements;
}

function getEnclaveData(args: any): any {
  return data.find((d) => d.id === args.id && d.level === args.level);
}
