import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemLoginComponent } from './pages/system-login/system-login.component';
import { MianPageComponent } from './pages/mian-page/mian-page.component';
import { ExamPageComponent } from './pages/exam-page/exam-page.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';
import { ApplyPageComponent } from './pages/apply-page/apply-page.component';
import { ApplyManageComponent } from './pages/apply-manage/apply-manage.component';
import { QuestionsManageComponent } from './pages/questions-manage/questions-manage.component';
import { ScoreManageComponent } from './pages/score-manage/score-manage.component';

const routes: Routes = [
  {
    path: 'login',
    component: SystemLoginComponent,
  },
  {
    path: 'main/:username',
    component: MianPageComponent,
    children: [
      {
        path: 'exam',
        component: ExamPageComponent
      },
      {
        path: 'score',
        component: ScorePageComponent
      },
      {
        path: 'apply',
        component: ApplyPageComponent
      },
      {
        path: 'questions',
        component: QuestionsManageComponent
      },
      {
        path: 'scoreManage',
        component: ScoreManageComponent
      },
      {
        path: 'applyManage',
        component: ApplyManageComponent
      },
      {
        path: '**',
        component: ExamPageComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: SystemLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
