import {slackbot} from 'botkit'
import scripts from './scripts'

const SLACK_API_TOKEN = process.env.SLACK_API_TOKEN

if (!SLACK_API_TOKEN) {
  console.log("Error: Slack API token not found");
  process.exit(1);
}

const controller = slackbot({})
controller.spawn({
  token: SLACK_API_TOKEN
}).startRTM()

scripts.apply(controller)
