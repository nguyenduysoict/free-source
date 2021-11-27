import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';
@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidatesComponent implements OnInit {

  dataSource: any;

  collapsed = false;

  data = "data";
  dataClickbtn = "dataClickbtn";
  constructor(public cd: ChangeDetectorRef) {
    // this.cd.detach();
    // this.dataSource = this.getDataSource();

  }

  ngOnInit(): void {
    this.cd.detectChanges();
  }

  contentReady = (e: any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };


  log() {
    console.log("render");
  }

  changeData() {
    this.data = "data change";
    this.cd.detectChanges();
  }

  clickBTN() {
    this.dataClickbtn = "dataClickbtn change";
  }

  getDataSource() {
    return new DataSource({
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
        key: 'Id',
        beforeSend(request: any) {
          request.params.startDate = '2020-05-10';
          request.params.endDate = '2020-05-15';
        },
      },
    });
  }

}
