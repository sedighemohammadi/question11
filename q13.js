// * ===============================1========================================

/*
 ? look at the code below:
 ? make a sentence by concatenating the object keys 
*/
const object1 = {
    ali: 'name',
    writes: 'does what',
    novels: 'kind of book',
  };
  
  // output => 'ali writes novels'
  const sentence =` ${Object.keys(object1)[0]} ${Object.keys(object1)[1]} ${Object.keys(object1)[2]} `
  console.log(sentence)