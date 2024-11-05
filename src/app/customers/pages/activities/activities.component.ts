import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';

import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../services';
import { activity } from '../../interfaces/activity.interface';
import { DialogService } from 'primeng/dynamicdialog';
import { BuyTicketDialogComponent } from './buy-ticket-dialog/buy-ticket-dialog.component';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, DataViewModule, ButtonModule],
  templateUrl: './activities.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesComponent implements OnInit {
  activities = signal<activity[]>([]);
  constructor(
    private userService: UserService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.userService.getActivities().subscribe((resp) => {
      this.activities.set(resp);
    });
  }

  view(activity: activity) {
    const ref = this.dialogService.open(BuyTicketDialogComponent, {
      header: 'Comprar boleto',
      width: '40rem',
      data: activity,
    });
  }
}
