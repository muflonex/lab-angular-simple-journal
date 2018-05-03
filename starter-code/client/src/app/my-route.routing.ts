import { Routes, RouterModule } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';

export const routes: Routes = [
  { path:'', component: EntryListComponent },
  { path:'entry/:id', component: EntryDetailComponent }
];

