import { LightningElement } from 'lwc';

export default class SfNameComponent extends LightningElement {

    firstName;
    handleFirstName(event){
        this.firstName = event.target.value;
        this.dispatchEvent(new CustomEvent('firstnamechange' , { detail : this.firstName }));
    }

    middleName;
    handleMiddeName(event){
        this.middleName = event.target.value;
        this.dispatchEvent(new CustomEvent('middlenamechange' , { detail : this.middleName }));
    }

    lastName;
    handleLastName(event){
        this.lastName = event.target.value;
        this.dispatchEvent(new CustomEvent('lastnamechange' , { detail : this.lastName }));
    }


}