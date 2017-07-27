$(function(){
  displayCategories()
})

function displayCategories(){
  render(createLists(store.categories), 'categories')
}
