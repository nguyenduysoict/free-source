import { Component, OnInit } from '@angular/core';
declare let html2pdf: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'Recruitment';


  ngOnInit(): void {
  }

  onExport() {
    html2pdf().from(document.body).toPdf().get('pdf').then((pdfObj: any) => {
      console.log(pdfObj);
    });
    html2pdf().from(document.body).toPdf().output('datauristring').then((pdfAsString: any) => {
      // The PDF has been converted to a Data URI string and passed to this function.
      // Use pdfAsString however you like (send as email, etc)! For instance:
      console.log(pdfAsString);
      var file = new File(pdfAsString, 'file.pdf');
      console.log(file);
    });
  }

}
