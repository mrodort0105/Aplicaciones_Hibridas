import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../services/settings.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel, IonToggle, IonButtons, IonBackButton } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonTitle, IonToolbar,  
    IonButtons, IonBackButton,  
    IonList, IonListHeader, IonItem, IonLabel, IonToggle  
  ]
})
export class AjustesPage {

  constructor(public settingsService: SettingsService) { }

  onToggleChange(event: any) {
    const isChecked = event.detail.checked;
    this.settingsService.setDarkMode(isChecked);
  }
}