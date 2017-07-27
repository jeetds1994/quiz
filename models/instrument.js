function createInstruments(){
  let id = 0
  return class{
    constructor(name){
      this.name = name
      this.id = ++id
      this.category = "none"
      store.instruments.push(this)
    }
    static findorCreate(name){
      let look = store.instruments.find(function(instrument){
        return instrument.name === name
      })
      if(!look){
        return new Instrument(name)
      }else {
        return look
      }
    }

  }
}
