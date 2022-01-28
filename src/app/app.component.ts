import { Component, VERSION } from '@angular/core';
import * as d3 from 'd3';
import { CanvasElement } from './models';
import { draw } from './render';
import { buildWorldElements, buildEnclaveElements } from './design';
import { data } from './data';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  canvas: any;
  context: any;
  paths: any[] = [];

  ngOnInit() {
    this.context = d3.select('canvas').node().getContext('2d');
    this.context.canvas.height = window.innerHeight - 50;
    this.context.canvas.width = window.innerWidth - 300;

    const context = this.context;
    const canvas = d3.select('canvas').node();

    let canvasElements: CanvasElement[] = buildWorldElements(data);
    let actionElements = draw(canvasElements, this.context);

    canvas.addEventListener('click', function (event) {
      for (var actionElement of actionElements) {
        if (
          context.isPointInPath(
            actionElement.path,
            event.clientX,
            event.clientY
          )
        ) {
          // alert(`${actionElement.name} clicked`);
          context.clearRect(0, 0, context.canvas.width, context.canvas.height);
          canvasElements = buildEnclaveElements(actionElement);
          actionElements = draw(canvasElements, context);
          break;
        }
      }
    });
  }
}
