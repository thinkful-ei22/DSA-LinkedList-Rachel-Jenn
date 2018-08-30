const DoubleList = require('./doubleLinkList');


function main() {
  const DLL = new DoubleList()

  DLL.insertFirst('Aquaria');
  // DLL.insertLast('Caprica');
  // DLL.insertLast('Gemenon');
  // DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');

  console.log(DLL);
}


main();
