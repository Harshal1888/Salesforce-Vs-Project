import { api, LightningElement } from 'lwc';
import {FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class SfClientDetails extends LightningElement {
    hideAddress = false;
    handleAddressToggle(event){
        this.hideAddress = event.target.checked;
    }

    @api firstName;
    handleFirstName(event){
        this.firstName = event.detail;
    }

    @api middleName;
    handleMiddleName(event){
        this.middleName = event.detail;
    }

    @api lastName;
    handleLastName(event){
        this.lastName = event.detail;
    }

    @api phone;
    handlePhone(event){
        this.phone = event.detail;
    }

    @api email;
    handleEmail(event){
        this.email = event.detail;
    }

    handleSubmit(){
        this.dispatchEvent(new FlowNavigationNextEvent());
    }
}