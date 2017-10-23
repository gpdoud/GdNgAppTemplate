import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CoreModule } from './core/core.module';
import * as core from '@app/core';

const approutes: Routes = [
	{ path:'', redirectTo: '/', pathMatch: "full" }
	,{ path: 'home', component: core.HomeComponent }
	,{ path: '**', component: core.HomeComponent }
]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(approutes, { enableTracing: false })
	]
	,declarations: [
		core.HomeComponent
	]
})

export class AppRoutingModule {}