let store = {instruments: [], categories: []}

let Category = createCategories()
let Instrument = createInstruments()

// samples
let percussion = new Instrument('percussion')

let snare = new Category('snare drum')
let steel = new Category('steel drum')

//associate
percussion.category = snare.name
