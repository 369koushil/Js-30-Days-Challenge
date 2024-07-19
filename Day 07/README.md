#day 7 in js challenge
*objects*

creation object using literal style and using constructor
functions or also treated as objec here

Object.keys()--return keys
Object.values()--return values
Object.entries()--returns  an array of each key,values pair as single array in it
Object.freeze()---avoids modification od properties of object
Object.defineproperty()---we can add an property as an object into a ddefined object

*this---keyword*
this keyword refers to current obj

when we define an nested func in object when we call it outer func refers to curr obj
but inner func refer to global obj or strict mode it will return undefined
becoz outer function is called on obj so uter func refers to curr obj

arrow functions do not have acess to this keyword