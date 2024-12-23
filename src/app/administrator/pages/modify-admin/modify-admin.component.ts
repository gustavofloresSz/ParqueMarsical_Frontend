import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { activity } from '../../../customers/interfaces/activity.interface';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-modify-admin',
  standalone: true,
  imports: [RouterModule,
    ToolbarModule,
    TableModule,
    CheckboxModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,],
  templateUrl: './modify-admin.component.html',
  styleUrl: './modify-admin.component.css'
})
export class ModifyAdminComponent {
  activities: activity[] = [];
  selectedActivities: activity[] = [];

  constructor(private adminService: AdminService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.adminService.getActivities().subscribe((activities) => {
      this.activities = activities;
      this.cdr.markForCheck();
    });
  }
}
