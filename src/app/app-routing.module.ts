import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const approutes: Routes = [
	{ path:'', redirectTo: '/', pathMatch: "full" }
]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(approutes, { enableTracing: false })
	]
	,declarations: []
})

export class AppRoutingModule {}