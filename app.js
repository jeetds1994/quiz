function render(html, into){
  $(`.${into}`).empty()
  $(`.${into}`).append(html)
}

function createLists(data){
  return data.map(function(dat){
    return createList(dat.name)
  })
}

function createList(content){
  return `<li>${content}</li>`
}
