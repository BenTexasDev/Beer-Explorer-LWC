import { LightningElement } from 'lwc';

export default class Demo extends LightningElement {
    message = 'Non-Reactive Property';

    handleChange(){
        this.message = 'Changed to Reactive Property';
    }
}