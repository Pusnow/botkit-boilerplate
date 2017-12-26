import {SlackController} from 'botkit'
import hello from './hello'


function apply(controller: SlackController) {
  hello(controller)
}

export default {
  apply
}
