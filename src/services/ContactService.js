import axios from 'axios';

export class ContactService {
    static serverURL = `http://localhost:4000`;

    static getAllContacts(){
        const dataURL = `${this.serverURL}/contatos`;
        return axios.get(dataURL);
    }
}