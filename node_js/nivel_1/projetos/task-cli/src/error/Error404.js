class Error404 extends Error {
  constructor(message = "There is no task with this Id"){
    super();
    this.message = message;
  }

  sendAnswer(){
    console.log(this.message);
  }
}

export default Error404;