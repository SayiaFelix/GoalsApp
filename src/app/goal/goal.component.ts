import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

 

   goals: Goal[] = [
    new Goal(1, 'Hiking with my Lover', 'Over the weekend thats will be my plan',new Date(2022,4,14)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2012,4,9)),
    new Goal(3,'Get new Phone Case','Rensia has her birthday coming up soon',new Date(2022,0,18)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2022,1,18)),
    new Goal(5,'Solve math','Damn Math',new Date(2022,2,14)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2022,3,14)),
  ];




   toggleDetails(index:number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
 

 deleteGoal(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

addNewGoal(goal: Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  constructor() { }

  ngOnInit(): void {
  }


}
