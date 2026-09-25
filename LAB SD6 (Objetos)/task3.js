// Type your code below this line!
function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    this.printMail = function() {
        console.log(this.subject + ": " + this.message)
    }
  }
  
  // Type your code below this line!
  const subj = process.argv[3]
  const msg = process.argv[4]
  const newMail = new Mail(subj, msg)
  newMail.printMail()
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)