import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { PlatformModule } from '@angular/cdk/platform';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
const globalRippleConfig: RippleGlobalOptions = { disabled: true };
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleGlobalOptions,
  MatRippleModule,
  MatNativeDateModule,
} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatRippleModule,
        MatDialogModule,
        MatSortModule,
        MatPaginatorModule,
        CdkTableModule,
        DragDropModule,
        PortalModule,
        CommonModule,
        MatSelectModule,
        MatCheckboxModule,
        MatInputModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatButtonModule,
        MatTableModule,
        MatSlideToggleModule,
        OverlayModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatMenuModule,
        MatProgressSpinnerModule
    ],
    declarations: [],
    providers: [
        { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }
    ],
    exports: [
        MatFormFieldModule,
        PlatformModule,
        MatRippleModule,
        MatSortModule,
        MatPaginatorModule,
        CdkTableModule,
        DragDropModule,
        OverlayModule,
        PortalModule,
        MatSelectModule,
        MatCheckboxModule,
        MatInputModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatTableModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatTooltipModule,
        MatProgressBarModule,
        LayoutModule,
        MatProgressSpinnerModule
    ]
})
export class AppMaterialModule { }
