const schedule = require('node-schedule')
const signIn = require('./src/sign-in.js')

const rule = new schedule.RecurrenceRule()
rule.hour = 6

const j = schedule.scheduleJob(rule, () => {
  signIn()
})

// j.cancel()