import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { of } from 'rxjs';
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
  private data: any;
  private selectedWorld: any;

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

      this.data = data;
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
    });

    this.registerEvents();
  }

  registerEvents() {
    const zoneCanvas = document.getElementById('canvas');
    const t = this;

    zoneCanvas?.addEventListener('click', function (event: any) {
      for (var actionElement of t.actionElements) {
        if (
          t.context.isPointInPath(
            actionElement.path,
            event.clientX,
            event.clientY
          )
        ) {
          t.context.clearRect(0, 0, t.context.canvas.width, t.context.canvas.height);
          const { id, level, action } = actionElement.args;

          switch (action) {
            case Action.Expand: {
              const showLevel2 = level === 2 ? true : false;
              if (level === 0) {
                t.selectedWorld = t.getWorldByLevelAndId(level, id);
              }
              t.canvasElements = buildEnclaveElements(t.selectedWorld, showLevel2);
              t.actionElements = draw(t.canvasElements, t.context);
              break
            }
            case Action.Collapse: {
              console.log(id, level, action);
              const showLevel2 = false;
              t.canvasElements = buildEnclaveElements(t.selectedWorld, showLevel2);
              t.actionElements = draw(t.canvasElements, t.context);
              break;
            }
            case Action.CollapseAll: {
              getData().toPromise().then(data => {
                t.canvasElements = buildWorldElements(data);
                t.actionElements = draw(t.canvasElements, t.context);
              });
              break;
            }
            case Action.Show: {
              break;
            }
          }
          break;
        }
      }
    });
  }

  getWorldByLevelAndId(level: number, id: number): any {
    return this.data.find(d => d.id === id && d.level === level);
  }
}
