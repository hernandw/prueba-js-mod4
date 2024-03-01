import Animal from "./animal.js";

class Leon extends Animal {
    constructor(name, age, images, comments, sound) {
        super(name, age, images, comments, sound);
    }
    rugir() {
        return `El ${this._name} ruge`;
    }
}

class Lobo extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
  aullar() {
    return `El ${this._name} aulla`;
  }
}

class Oso extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
  gruñir() {
    return `El ${this._name} gruñe`;
  }
}

class Serpiente extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
  sisear() {
    return `El ${this._name} sisea`;
  }
}

class Aguila extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
  chillar() {
    return `El ${this._name} chilla`;
  }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };