import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { TableColumn } from '../../interfaces/interfaces';
@Component({
  selector: 'app-table',
  imports: [MatProgressSpinnerModule, MatTableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent<T> {
  @Input() data: T[] = [];
  @Input() displayedColumns: TableColumn<T>[] = [];
  @Input() isLoading: boolean = true;

  @ContentChild('actions', { static: false })
  actionsTemplate?: TemplateRef<any>;

  get columnFields(): string[] {
    return this.displayedColumns.map((col) => col.field);
  }
}
