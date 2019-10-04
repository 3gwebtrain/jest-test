import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-shell-popup',
    templateUrl: './shell-popup.component.html',
    styleUrls: ['./shell-popup.component.scss']
})
export class ShellPopupComponent implements OnInit {

    @Input() response: string;

    constructor() { }

    ngOnInit() {}
    

}
