import { LightningElement } from 'lwc';

export default class SfContactComponent extends LightningElement {
    
    phone;
    handlePhone(event){
        this.phone = event.target.value;
        this.dispatchEvent(new CustomEvent('phonechange' , { detail : this.phone }));
    }

    email;
    handleEmail(event){
        this.email = event.target.value;
        this.dispatchEvent(new CustomEvent('emailchange' , { detail : this.email }));
    }
}