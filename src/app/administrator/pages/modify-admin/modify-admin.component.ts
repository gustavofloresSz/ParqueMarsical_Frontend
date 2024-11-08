import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

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

}
