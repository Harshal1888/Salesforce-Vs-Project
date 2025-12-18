import { LightningElement , track} from 'lwc';

export default class HtmlLooping extends LightningElement {
    @track images = [
        { image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pCBI5Z8S68Hkdmyeig8kNCtihMa166bAaA&s" , show : true },
        { image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pCBI5Z8S68Hkdmyeig8kNCtihMa166bAaA&s" , class : "slds-box" , show : false },
        { image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pCBI5Z8S68Hkdmyeig8kNCtihMa166bAaA&s" , class : "slds-box" , show : true },
        { image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pCBI5Z8S68Hkdmyeig8kNCtihMa166bAaA&s" , class : "slds-box" , show : false },
        { image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pCBI5Z8S68Hkdmyeig8kNCtihMa166bAaA&s" , class : "slds-box" , show : true },
        { image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pCBI5Z8S68Hkdmyeig8kNCtihMa166bAaA&s" , class : "slds-box" , show : true }
    ];

}