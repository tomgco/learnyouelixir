var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , join = require('path').join

// checks that the submission file actually exists
exercise = filecheck(exercise)

exercise.solution = join(__dirname, 'solution/solution.exs')
// execute the solution and submission in parallel with spawn()
exercise = execute(exercise, { exec: '/usr/local/bin/elixir' })

// compare stdout of solution and submission
exercise = comparestdout(exercise)

module.exports = exercise
