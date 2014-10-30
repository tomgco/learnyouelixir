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

// generate a random positive integer <= 100

function rndint () {
  return Math.ceil(Math.random() * 100)
}

exercise.setup = function (mode, callback) {
  // mode == 'run' || 'verify'

  // create a random batch of cmdline args
  var args = [ rndint(), rndint() ]

  while (Math.random() > 0.3)
    args.push(rndint())

  // supply the args to the 'execute' processor for both
  // solution and submission spawn()
  this.submissionArgs = this.solutionArgs = args
  this.submission = this.args[0] // first arg obviously

  // set this.solution if your solution is elsewhere
  if (!this.solution)
    this.solution = path.join(this.dir, './solution/solution.js')

  this.solutionCommand   = [ this.solution ].concat(this.solutionArgs)
  this.submissionCommand = [ this.submission ].concat(this.submissionArgs)

  process.nextTick(callback)
}

module.exports = exercise
