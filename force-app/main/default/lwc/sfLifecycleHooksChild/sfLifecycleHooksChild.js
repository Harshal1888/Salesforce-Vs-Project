import { LightningElement } from 'lwc';

export default class SfLifecycleHooksChild extends LightningElement {
    constructor(){
        super();
        console.log('Child Constructor() executed');
    }

    connectedCallback(){
        console.log('Child connectedCallback() executed');
        let obj;
        console.log('Name is:' + obj.name);
    }

    renderedCallback(){
        console.log('Child renderedCallback() executed');
    }

    disconnectedCallback(){
        console.log('Child disconnectedCallback() executed');
    }

    errorCallback(error , stack){
        console.log('In parent Error : ' + error);
        console.log('Location : ' + stack);
    }
}