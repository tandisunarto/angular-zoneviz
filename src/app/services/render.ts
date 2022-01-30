import * as d3 from 'd3';
import { CanvasElement } from './canvas-models';

let drawCanvas: any;

let ctx: any;

export function draw(canvasElements: CanvasElement[], context: any) {
  ctx = context;
  let paths: any[] = [];
  canvasElements.forEach((canvasElement) => {
    const { x, y, width, height, siteName, elementType, elementColor } =
      canvasElement;

    switch (elementType) {
      case 'rectangle': {
        const path = drawRectangle(canvasElement);
        if (canvasElement.hasEvent) {
          paths.push({
            path: path,
            name: siteName,
          });
        }
        break;
      }
      case 'roundrectangle': {
        const path = drawRoundRectangle(canvasElement);
        if (canvasElement.hasEvent) {
          paths.push({
            path: path,
            name: canvasElement.siteName,
            args: canvasElement.eventArgs,
          });
        }
        break;
      }
      case 'line': {
        drawLine(canvasElement);
        break;
      }
      default:
        break;
    }
  });
  return paths;
}

function drawRectangle(canvasElement: CanvasElement) {
  const {
    x,
    y,
    width,
    height,
    siteName,
    elementType,
    elementColor,
    fontColor,
    fontScale,
    hasEvent,
  } = canvasElement;

  let path = new Path2D();
  path.moveTo(x, y);
  path.lineTo(x + width, y);
  path.lineTo(x + width, y + height);
  path.lineTo(x, y + height);
  path.lineTo(x, y);
  ctx.fillStyle = elementColor;
  ctx.fill(path);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke(path);

  ctx.fillStyle = fontColor;
  ctx.font = fontScaleToString(fontScale);
  ctx.fillText(siteName, x + 5, y + 15);

  return path;
}

function drawRoundRectangle(canvasElement: CanvasElement) {
  const {
    x,
    y,
    width,
    height,
    siteName,
    siteDescription,
    elementType,
    elementColor,
    fontColor,
    fontScale,
    hasEvent,
  } = canvasElement;

  const radius = 8;

  let path = new Path2D();
  path.moveTo(x + radius, y);
  path.lineTo(x + width - radius, y);
  path.quadraticCurveTo(x + width, y, x + width, y + radius);
  path.lineTo(x + width, y + height - radius);
  path.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  path.lineTo(x + radius, y + height);
  path.quadraticCurveTo(x, y + height, x, y + height - radius);
  path.lineTo(x, y + radius);
  path.quadraticCurveTo(x, y, x + radius, y);
  ctx.fillStyle = elementColor;
  ctx.fill(path);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.stroke(path);

  ctx.fillStyle = fontColor;
  ctx.font = fontScaleToString(fontScale);
  ctx.fillText(siteName, x + 10, y + 15);
  ctx.font = fontScaleToString(fontScale - 5);
  ctx.fillText(siteDescription, x + 10, y + 35);

  return path;
}

function drawLine(canvasElement: CanvasElement) {
  const {
    x,
    y,
    width,
    height,
    siteName,
    elementType,
    elementColor,
    fontColor,
    fontScale,
    hasEvent,
  } = canvasElement;

  let path = new Path2D();
  path.moveTo(x, y);
  path.lineTo(x - width, y);
  ctx.lineWidth = 3;
  ctx.strokeStyle = elementColor;
  ctx.stroke(path);
}

function fontScaleToString(fontScale: number) {
  return `${fontScale}px sans-serif`;
}
