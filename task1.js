// Type your code below this line!
function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  const subj = process.argv[3]
  const msg = process.argv[4]
  const newMail = new Mail(subj, msg)

  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)