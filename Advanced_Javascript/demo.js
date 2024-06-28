class Bellboy {
  constructor(name, age, workPermit, languages) {
    this.age = age;
    this.name = name;
    this.workPermit = workPermit;
    this.languages = languages;
  }
}

var BellBoy1 = new Bellboy("Jimmy", 19, "yes", ["English", "French"]);

console.log(
  BellBoy1.name,
  BellBoy1.age,
  BellBoy1.workPermit,
  BellBoy1.languages,
);
