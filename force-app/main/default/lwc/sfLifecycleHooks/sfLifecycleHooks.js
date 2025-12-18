import { LightningElement } from 'lwc';

export default class SfLifecycleHooks extends LightningElement {

    show = true;
    toggleVisibility(){
        this.show = !this.show;
    }

    constructor(){
        super();
        console.log('Parent Constructor() executed');
    }

    connectedCallback(){
        console.log('Parent connectedCallback() executed');
        try{
            let obj;
            console.log('Name is:' + obj.name);
        }
        catch(error){
            console.log(JSON.stringify(error.message));
        }
    }

    renderedCallback(){
        console.log('Parent renderedCallback() executed');
    }

    disconnectedCallback(){
        console.log('Parent disconnectedCallback() executed');
    }

    errorCallback(error , stack){
        console.log('Error:' + error);
        console.log('Stack:' + stack);
    }
}