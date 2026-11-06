import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel, IonToggle, IonButtons, IonBackButton } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonList, IonItem, IonLabel, IonToggle, IonButtons, IonBackButton, IonListHeader
]
})
export class AjustesPage {

  // Keep the template-facing API without importing a service that is not present.
  readonly settingsService = {
    setDarkMode: (enabled: boolean) => {
      document.body.classList.toggle('dark', enabled);
    }
  };

  // Método que se ejecuta cada vez que el usuario mueve el interruptor (ion-toggle)
  onToggleChange(event: any) {
    // Obtenemos el nuevo valor booleano (true o false) del evento del componente
    const isChecked = event.detail.checked;
    
    // Actualizamos el tema con el nuevo estado
    this.settingsService.setDarkMode(isChecked);
  }
}