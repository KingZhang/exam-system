import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MaterialDesignFrameworkModule } from 'angular6-json-schema-form';
import { HighlightJsModule } from 'ngx-highlight-js';

import { KeysPipe } from './pipes/keys/keys.pipe';

import { SystemLoginComponent } from './pages/system-login/system-login.component';
import { MianPageComponent } from './pages/mian-page/mian-page.component';
import { ExamPageComponent } from './pages/exam-page/exam-page.component';
import { ScorePageComponent } from './pages/score-page/score-page.component';
import { QuestionsManageComponent } from './pages/questions-manage/questions-manage.component';
import { ScoreManageComponent } from './pages/score-manage/score-manage.component';
import { ApplyPageComponent } from './pages/apply-page/apply-page.component';
import { ApplyManageComponent } from './pages/apply-manage/apply-manage.component';

import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { BasicJsfComponent } from './components/basic-jsf/basic-jsf.component';
import { BasicLabelComponent } from './components/basic-label/basic-label.component';
import { LineInputComponent } from './components/line-input/line-input.component';
import { LineSelectorComponent } from './components/line-selector/line-selector.component';
import { LineRateComponent } from './components/line-rate/line-rate.component';
import { LineAddItemComponent } from './components/line-add-item/line-add-item.component';
import { LineAddObjectComponent } from './components/line-add-object/line-add-object.component';
import { LineRaidoGroupComponent } from './components/line-raido-group/line-raido-group.component';
import { QuestionTableComponent } from './components/question-table/question-table.component';
import { QuestionEditorComponent } from './components/question-editor/question-editor.component';
import { ScoreTableComponent } from './components/score-table/score-table.component';
import { EndlessModeComponent } from './pages/endless-mode/endless-mode.component';
import { QuestionAnswerComponent } from './components/question-answer/question-answer.component';
import { PanelJudgmentComponent } from './components/panel-judgment/panel-judgment.component';
import { PanelChoiceComponent } from './components/panel-choice/panel-choice.component';
import { PanelEssayComponent } from './components/panel-essay/panel-essay.component';
import { PanelProgramComponent } from './components/panel-program/panel-program.component';
import { PanelDescriptionComponent } from './components/panel-description/panel-description.component';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    SystemLoginComponent,
    MianPageComponent,
    ExamPageComponent,
    ScorePageComponent,
    QuestionsManageComponent,
    ScoreManageComponent,
    ApplyPageComponent,
    ApplyManageComponent,
    KeysPipe,
    BasicFormComponent,
    LineInputComponent,
    BasicJsfComponent,
    BasicLabelComponent,
    LineSelectorComponent,
    LineRateComponent,
    LineAddItemComponent,
    LineAddObjectComponent,
    LineRaidoGroupComponent,
    QuestionTableComponent,
    QuestionEditorComponent,
    ScoreTableComponent,
    EndlessModeComponent,
    QuestionAnswerComponent,
    PanelJudgmentComponent,
    PanelChoiceComponent,
    PanelEssayComponent,
    PanelProgramComponent,
    PanelDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    MaterialDesignFrameworkModule,
    HighlightJsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
  entryComponents: [
    LineInputComponent,
    LineSelectorComponent,
    LineRateComponent,
    LineAddItemComponent,
    LineAddObjectComponent,
    LineRaidoGroupComponent,
  ]
})
export class AppModule { }
