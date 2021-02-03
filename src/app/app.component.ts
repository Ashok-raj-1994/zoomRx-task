import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  listArrayOfArrays = [[{}, {}, {}], [{}, {}]];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  deleteList(listIndex) {
    this.listArrayOfArrays.splice(listIndex, 1);
  }

  deleteCard(listIndex, cardIndex) {
    this.listArrayOfArrays[listIndex].splice(cardIndex, 1);
  }

  addCard(listIndex) {
    this.listArrayOfArrays[listIndex].push({});
  }


  addNewList() {
    this.listArrayOfArrays.push([{}])
  }

  addNewComment(card) {

    if (!card.comment) {
      return;
    }

    if (!card.commentsArray) {
      card.commentsArray = [];
    }

    card.commentsArray.push({
      comment: card.comment,
      time: new Date()
    });

    card.comment = '';

  }

}
