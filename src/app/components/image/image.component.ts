import { Component, Input } from '@angular/core';

@Component({
    selector: 'image',
    template: `
        <div [defaultImage]="defaultImage" [lazyLoad]="image" [offset]="offset"></div>
        <!--
        After it has been loaded the div will transform into:
        <div class="ng-lazyloaded" style="background-image: url('https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg');"></div>
        -->
    `
})
export class ImageComponent {
    @Input() unsplashUrl: String;
    defaultImage = '../../assets/img/home.jpg';
    image = this.unsplashUrl;
    offset = 100;
}
