let user = {
  name: 'John',
  sayHi: function () {
    console.log(this.name);
  }
};

(user.sayHi)(); // John เพราะในfunctionใช้ this ซึ่งจะ referถึงobjที่เรียกใช้methodนี้ ซึ่งในที่นี้คือ user เพราะฉะนั้นจึงคืนค่าออกมาเป็น user.name
