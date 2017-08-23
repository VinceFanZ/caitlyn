const schedule = require('node-schedule')

const signIn = require('./src/sign-in.js')

const rule = new schedule.RecurrenceRule()
rule.hour = 12

const j = schedule.scheduleJob(rule, () => {
  signIn()
})

// j.cancel()
