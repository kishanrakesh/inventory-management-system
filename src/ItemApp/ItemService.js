import axios from "axios";

const ITEM_URL = "http://localhost:9092/items";

class ItemService {
    retrieveAllItems(){
        console.log("RETRIEVE CALLED")
        return axios.get(`${ITEM_URL}/all`)
    }

    retrieveUnassignedItems(){
        console.log("RETRIEVE CALLED")
        return axios.get(`${ITEM_URL}`)
    }

    deleteItem(itemId){
        return axios.delete(`${ITEM_URL}/${itemId}`)
    }
    getItem(itemId){
        return axios.get(`${ITEM_URL}/${itemId}`)
    }
    addItem(item){
        return axios.post(`${ITEM_URL}`,item)
    }

    assignItem(itemId,employeeId){
        return axios.put(`${ITEM_URL}/${itemId}/assignTo/${employeeId}`)
    }
    
    unassignItem(itemId,employeeId){
        return axios.put(`${ITEM_URL}/${itemId}/unassignFrom/${employeeId}`)
    }


}
export default new ItemService();