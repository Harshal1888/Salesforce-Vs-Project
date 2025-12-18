import { LightningElement , api } from 'lwc';

export default class CpInputChild extends LightningElement {
    @api value;
    @api heading;
    handleChange(event){
        this.value = event.target.value;
        let nameEvent = new CustomEvent( 'namechange' , { detail : this.value });
        this.dispatchEvent(nameEvent);
    }
}