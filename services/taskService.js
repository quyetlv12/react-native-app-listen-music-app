import { httpClient } from "../auth"

export const taskService = {
    getAllTask(){
        return httpClient.get('todo')
    }
}