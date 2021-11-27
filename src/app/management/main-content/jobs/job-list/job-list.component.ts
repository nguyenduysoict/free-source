import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit, AfterViewInit {
  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  detailDiv = `<div id="card-detail" currentCard="{currentCard}" style="height: 200px;margin: 16px;background-color:chocolate;width: {width};"> {content} </div>`;
  cardElements: any;
  constructor(
  ) { }

  ngAfterViewInit(): void {
    this.cardElements = document.querySelectorAll(".card-item");
  }

  ngOnInit(): void {
  }

  onSelectCard(event?: any, item?: any, currentCardWidth?: any) {
    var detailCard = document.querySelector("#card-detail");
    if (detailCard) {
      detailCard.remove();
      var currentCard = detailCard.getAttribute("currentCard");
      if (currentCard == item) {
        return;
      }
    }
    var currentViewWidth = window.innerWidth - 300; // độ rộng vùng hiển thị danh sách thẻ
    var currentCardWidth = currentCardWidth ? currentCardWidth : event?.target?.offsetWidth; // độ rộng 1 thẻ
    var cardPerLine = Math.floor(currentViewWidth / currentCardWidth); // số lượng thẻ mỗi dòng
    // dòng hiện tại đang được click
    var currentLine = Math.floor(item / cardPerLine);
    if (item % cardPerLine) {
      // nếu không phải item cuối cùng của dòng thì +1
      currentLine += 1;
    }
    var lastItemOfLine = currentLine * cardPerLine; // vị trí thẻ cuối cùng của dòng được click
    lastItemOfLine = lastItemOfLine > this.cards.length ? this.cards.length : lastItemOfLine;
    var detailHTML = this.detailDiv.replace("{width}", currentViewWidth + "px").replace("{content}", "Card " + item).replace("{currentCard}", item);
    this.cardElements[lastItemOfLine - 1]?.insertAdjacentHTML('afterend', detailHTML)
  }
}
