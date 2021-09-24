import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tokindex';

  navMenuOpen = false;
  userMenuOpen = false;
  sortMenuOpen = false;

  sideMenuOverlayOpen = false;

  colorSectionOpen = false;
  categorySectionOpen = false;
  sizeSectionOpen = false;

  onViewGridClicked() {
    // TODO
  }
}
