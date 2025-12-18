import { api, LightningElement } from 'lwc';

export default class PcChild extends LightningElement {
    @api value;
    @api heading;
    handleChange(event){
        this.value = event.target.value;
    }
}