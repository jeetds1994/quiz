function createCategories(){
  let id = 0
  return class{
    constructor(name){
      this.name = name
      this.id = ++id
      store.categories.push(this)
    }
  static findorCreate(name){
    debugger
    let look = store.categories.find(function(category){
      return category.name === name
    })
    if(!look){
      return new Category(name)
    }else {
      return look
    }
  }
  static findbyCategoryName(name){
    return store.instruments.filter(function(instrument){
      return instrument.category === name
    })
  }
  }
}
