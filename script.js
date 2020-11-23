function Builder() {
  }
  
Builder.prototype.get = function() {
  console.log(this)
}

function InBuilder(inteee) {
  Builder.call(this)
  this.arr = 0
  if (Number.isInteger(inteee) === true){
		if (InBuilder.border<inteee){
			console.log("Вы вышли за диапазон значений")
		}
		else {
			this.arr += inteee
			console.log(this.arr)
		}
  }
  else if (intee = 0){
	  this.arr += 0
  }
}


InBuilder.random = function(a,b) {
  InBuilder.border = (Math.random() * b) + a
  return InBuilder.border;
}

InBuilder.prototype = Object.create(Builder.prototype)
InBuilder.prototype.constructor = InBuilder

InBuilder.prototype.plus = function(a) {
  var sum = this.arr
  for (var i = 0; i < arguments.length; i++){
	sum += arguments[i]
  }
  this.arr = sum
  return this
  }

InBuilder.prototype.minus = function(a) {
  var min = this.arr
  for (var i = 0; i < arguments.length; i++){
	min -= arguments[i]
  }
  this.arr = min
  return this
  }

InBuilder.prototype.multiply = function(a) {
  const mul = this.arr * a
  this.arr = mul
  return this
}

InBuilder.prototype.divide = function(a) {
  const dev = this.arr / a
  this.arr = dev
  return this
}

InBuilder.prototype.mod = function(a) {
  const mo = this.arr % a
  this.arr = mo
  return this
}

InBuilder.prototype.get = function() {
  Builder.prototype.get.call(this.arr)
}




class strBuilder extends Builder {
  constructor(str) {
	super()
	this.word = str
	
  }
  plus(a) {
	for (var i = 0; i < arguments.length; i++){
	  this.word += arguments[i]
    }
	return this
  }
  minus(a) {
	this.word = this.word.slice(0, -a)
	return this
  }
  
  multiply(a) {
    this.word = this.word.repeat(a)
    return this
  }
  
  divide(a) {
	let k = Math.floor(this.word.length/a)
    this.word = this.word.slice(0, k)
    return this
  }

  remove(a) {
    this.word = this.word.split("")
	for (let i=this.word.length; i--;){
	  if (this.word[i] === a){
	    this.word.splice(i,1)
	  }
	}
	this.word = this.word.join("")
	return this
  }
  
  sub(a,b) {
    this.word = this.word.slice(a, a+b)
    return this
  }
  get(){
	super.get(this.word)
  }
}

