import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../highlight.service';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export interface Challenge {
  challengeName: string;
  category: string;
  id: string;
}

@Component({
  selector: 'app-redpwn-ctf2020',
  templateUrl: './redpwn-ctf2020.component.html',
  styleUrls: ['./redpwn-ctf2020.component.scss']
})

export class RedpwnCTF2020Component implements OnInit, AfterViewChecked {

  constructor(private highlightService: HighlightService) { }

  faDownload = faDownload;
  datasource: Challenge[] = [
    { challengeName: '12-shades-of-redpwn', category: 'crypto', id: '12-shades-of-redpwn' },
    { challengeName: '4k-rsa', category: 'crypto', id: '' },
    { challengeName: 'alien-transmissions-v2', category: 'crypto', id: '' },
    { challengeName: 'base646464', category: 'crypto', id: '' },
    { challengeName: 'itsy-bitsy', category: 'crypto', id: '' },
    { challengeName: 'primimity', category: 'crypto', id: '' },
    { challengeName: 'pseudo-key', category: 'crypto', id: '' },
    { challengeName: 'inspector-general', category: 'web', id: '' },
    { challengeName: 'bubbly', category: 'rev', id: '' },
    { challengeName: 'uglybash', category: 'misc', id: '' },
    { challengeName: 'coffer-overflow-2', category: 'pwn', id: '' },
  ];

  private highlighted = false;
  highlight = {
    0: {
      0: `<pre><code class="language-typescript">8,6 9,0 8,1 8,7 10,3 4,9 9,9 4,3 9,7 9,7 4,1 9,2 4,9 7,11 4,1 9,7 7,11 4,4 9,2 7,11 4,4 9,6 9,8 10,5</code></pre>`,
      1: `<pre><code class="language-python">colors = "8,6 9,0 8,1 8,7 10,3 4,9 9,9 4,3 9,7 9,7 4,1 9,2 4,9 7,11 4,1 9,7 7,11 4,4 9,2 7,11 4,4 9,6 9,8 10,5"\n\nlist = []\nfor i in colors.split():\n    list.append([int(j) for j in i.split(",")])\na = ""\nfor i in list:\n    a += chr(i[0]*12 + i[1])\nprint(a)</code></pre>`
    }
  };

  // <pre><code class="language-"></code></pre>

  scrollToElement(id): void {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit(): void { }

}
