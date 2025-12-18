import { LightningElement } from 'lwc';

export default class CpNameParent extends LightningElement {

    handleFirstName(event){
        console.log('In parent component: First Name'+event.detail);
    }

    handleMiddleName(event){
        console.log('In parent component: Middle Name'+event.detail);
    }

    handleLastName(event){
        console.log('In parent component: Last Name'+event.detail);
    }
}