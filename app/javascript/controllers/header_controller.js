import { Controller } from "@hotwired/stimulus"
import { toggle } from 'el-transition'

export default class extends Controller {
  static targets = ['openUserMenu']
  connect() {
    // this.element.textContent = "Hello World!"
    this.openUserMenuTarget.addEventListener('click', toggleDropdownMenu)

    function toggleDropdownMenu() {
      toggle(document.getElementById('menu-dropdown-items'))
    }
  }
}
