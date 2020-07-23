import { Component, OnInit } from '@angular/core';

export interface challenge {
  challengeName: string;
  category: string;
}

@Component({
  selector: 'app-redpwn-ctf2020',
  templateUrl: './redpwn-ctf2020.component.html',
  styleUrls: ['./redpwn-ctf2020.component.scss']
})

export class RedpwnCTF2020Component implements OnInit {

  constructor() { }

  datasource: challenge[] = [
    {challengeName: '12-shades-of-redpwn', category: 'crypto'},
    {challengeName: '4k-rsa', category: 'crypto'},
    {challengeName: 'alien-transmissions-v2', category: 'crypto'},
    {challengeName: 'base646464', category: 'crypto'},
    {challengeName: 'itsy-bitsy', category: 'crypto'},
    {challengeName: 'primimity', category: 'crypto'},
    {challengeName: 'pseudo-key', category: 'crypto'},
    {challengeName: 'inspector-general', category: 'web'},
    {challengeName: 'bubbly', category: 'rev'},
    {challengeName: 'uglybash', category: 'misc'},
    {challengeName: 'coffer-overflow-2', category: 'pwn'},
  ]
  ngOnInit(): void {
  }

}
