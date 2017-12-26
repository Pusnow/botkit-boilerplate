import {SlackController} from 'botkit'
import {ALL_MESSAGE} from '../constants/receivingMessageType'

export default (controller: SlackController)=> {

  controller.hears('hello', ALL_MESSAGE, (bot, message)=> {
    bot.reply(message,'Hello yourself!')
  })

}
