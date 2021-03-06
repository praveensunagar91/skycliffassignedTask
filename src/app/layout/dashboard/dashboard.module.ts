import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {CardModule} from 'primeng/card';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { MatFormFieldModule, MatToolbarModule, MatSidenavModule, MatExpansionModule} from '@angular/material';
import { GrowlModule } from 'primeng/growl';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        MatFormFieldModule,
MatToolbarModule,
MatSidenavModule,
GrowlModule,
MatExpansionModule,
CardModule

    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,

    ]
})
export class DashboardModule {}
