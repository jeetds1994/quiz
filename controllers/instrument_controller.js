$(function(){
  displayInsturments()
})

function displayInsturments(){
  render(createLists(store.instruments), 'instruments')
}

function saveInstrument(){
  let instrument = $('#instrument').val()
  let category = $('#category').val()
  let ins = Instrument.findorCreate(instrument)
  let cat = Category.findorCreate(category)
  ins.category = cat
  displayCategories()
  displayInsturments()
}
