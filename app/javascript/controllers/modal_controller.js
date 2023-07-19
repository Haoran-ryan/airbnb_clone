import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from 'el-transition'

export default class extends Controller {
  
  connect() {
    enter(document.getElementById('modal-wrapper'))
    enter(document.getElementById('modal-backdrop'))
    enter(document.getElementById('modal-panel'))

    document.getElementById('modal-wrapper').addEventListener('click',closeModal)

    function closeModal(event){
        const modalClicked = document.getElementById('modal-panel').contains(event.target)
        if(!modalClicked){
            leave(document.getElementById('modal-wrapper'))
            leave(document.getElementById('modal-backdrop'))
            leave(document.getElementById('modal-panel'))
            document.getElementById('modal-wrapper').removeEventListener('click',closeModal)
        }
    }
  }
}
