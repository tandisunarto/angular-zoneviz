import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Action, CanvasElement } from '../services/canvas-models';
import { getData, getEnclaveData } from '../services/data';
import { buildEnclaveElements, buildWorldElements } from '../services/design';
import { draw } from '../services/render';

@Component({
  selector: 'vae-zoneviz',
  templateUrl: './zoneviz.component.html',
  styleUrls: ['./zoneviz.component.css']
})
export class ZonevizComponent implements OnInit {
  private d3lib: any;
  private canvas: any;
  private context: any;

  // private currentSite: Site;
  // private currentOrganization: Organization;
  // private currentAssembleResult: AssembleResult;

  private canvasWidth = window.innerWidth - 300;
  private transform: any;

  actionElements: any;
  canvasElements: CanvasElement[] = [];

  constructor() { }

  ngOnInit() {
    this.d3lib = d3;
    this.transform = this.d3lib.zoomIdentity;

    getData().subscribe(data => {
      // this.colorCollection = query.colors;
      // this.currentOrganization = query.organization;

      // const r = this.assembleCanvasElementsFromOrganization(
        //   query.organization,
        //   0,
        //   this.service.initCanvasItemDictionary(),
        //   0
        // );
        // this.currentAssembleResult = r;

      // let canvasElements: CanvasElement[] = [];

      this.canvasElements = buildWorldElements(data);

      this.canvas = this.d3lib
        .select('canvas')
        .call(
          this.d3lib
          .zoom(this.canvasElements)
          // .zoom(this.currentAssembleResult.canvasElements)
          .scaleExtent([0.1, 8])
          .on('zoom', (event: any) => {
            //     // console.log(this.currentAssembleResult);
            console.log(event)
            this.transform = event.transform;
            //     this.draw(this.currentAssembleResult.canvasElements);
          })
        );

      this.context = this.canvas.node().getContext('2d');
      this.context.canvas.height = window.innerHeight - 50;
      this.context.canvas.width = window.innerWidth - 300;

      this.actionElements = draw(this.canvasElements, this.context);

      // ************************************************************
      // uncomment for testing
      // ************************************************************
      // getEnclaveData(0, 2).subscribe(data => {
      //   let canvasElements = buildEnclaveElements(data);
      //   draw(canvasElements, this.context);
      // })
      // ************************************************************

      // let actionElements: = draw(canvasElements, this.context);

      // const context = this.context;
      // const zoneCanvas = document.getElementById('canvas');

      // zoneCanvas?.addEventListener('click', function (event: any) {
      //   for (var actionElement of actionElements) {
      //     if (
      //       context.isPointInPath(
      //         actionElement.path,
      //         event.clientX,
      //         event.clientY
      //       )
      //     ) {
      //       // console.log(actionElement);
      //       context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      //       const { id, level } = actionElement.args;
      //       getEnclaveData(level, id).subscribe(data => {
      //         canvasElements = buildEnclaveElements(data);
      //         actionElements = draw(canvasElements, context);
      //       })
      //       break;
      //     }
      //   }
      // });
    });


    this.registerEvents();
  }

  registerEvents() {
    const context = this.context;
    const zoneCanvas = document.getElementById('canvas');

    let actionElements = this.actionElements;
    let canvasElements = this.canvasElements;

    zoneCanvas?.addEventListener('click', function (event: any) {
      for (var actionElement of actionElements) {
        if (
          context.isPointInPath(
            actionElement.path,
            event.clientX,
            event.clientY
          )
        ) {

          context.clearRect(0, 0, context.canvas.width, context.canvas.height);
          const { id, level, action } = actionElement.args;

          console.log(id, level, action)

          switch (action) {
            case Action.Expand: {
              getEnclaveData(level, id).subscribe(data => {
                canvasElements = buildEnclaveElements(data);
                actionElements = draw(canvasElements, context);
              })
              break
            }
            case Action.CollapseAll: {
              getData().toPromise().then(data => {
                canvasElements = buildWorldElements(data);
                actionElements = draw(canvasElements, context);
              });
              break;
            }
          }
          // getEnclaveData(level, id).subscribe(data => {
          //   canvasElements = buildEnclaveElements(data);
          //   actionElements = draw(canvasElements, context);
          // })
          break;
        }
      }
    });
  }
}
