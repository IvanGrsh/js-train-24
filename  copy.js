// function loadFile(filename, callback) {
//   try {
//     console.log(`Завантаження файлу ${filename}...`);
//     setTimeout(() => callback(null, `Вміст файлу ${filename}`), 2000);
//   } catch (e) {
//     callback(e);
//   }
// }

// loadFile("example.txt", (error, content) => {
//   if (error) {
//     console.log(`Помилка завантаження файлу`, error);
//   } else {
//     console.log(`Файл завантажено успішно!`);
//     console.log(`Вміст файлу:`, content);
//   }
// });

// ///=======================================================
// console.log("=============================================");

// function convertFile(content, callback) {
//   setTimeout(function () {
//     callback(null, `Конвертований вміст: ${content.toUpperCase()}`);
//   }, 1000);
// }

// function saveFile(convertedContent, callback) {
//   setTimeout(function () {
//     callback();
//   }, 1500);
// }

// function sendFileToClient(callback) {
//   setTimeout(function () {
//     callback();
//   }, 500);
// }

// loadFile("example.txt", (error, content) => {
//   if (error) {
//     console.log(`Помилка завантаження файлу`, error);
//   } else {
//     console.log(`Файл завантажено успішно!`);
//     console.log(`Вміст файлу:`, content);

//     convertFile(content, (error, convertedContent) => {
//       if (error) {
//         console.log(`Помилка конвертації файлу`, error);
//       } else {
//         console.log(`Файл успішно сконвертовано!`);
//         console.log(`Конвертований вміст:`, convertedContent);

//         saveFile(convertedContent, (error) => {
//           if (error) {
//             console.log(`Помилка збереження файлу`, error);
//           } else {
//             console.log(`Файл успішно збережено!`);

//             sendFileToClient((error) => {
//               if (error) {
//                 console.log(`Помилка відправлення файлу клієнту:`, error);
//               } else {
//                 console.log(`Файл успішно відправлено клієнту!`);
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// ///=======================================================
// console.log("=============================================");

// // const filename = "Test";
// const loadFile = (filename) =>
//   new Promise((resolved) => {
//     console.log(`Завантаження файлу ${filename}...`);

//     setTimeout(() => resolved(`Вміст файлу ${filename}`), 2000);
//   });

// const result = loadFile("image.png");

// console.log(result);

// setTimeout(() => console.log(result), 3000);

// ///=======================================================
// console.log("=============================================");

// const loadFile = (filename) =>
//   new Promise((resolve) => {
//     console.log(`Завантаження файлу ${filename}...`);

//     // reject("Error");

//     setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//   });

// const result = loadFile("image.png");

// result.then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );
// console.log(result);

// setTimeout(() => console.log(result), 3000);

///================================================================
// loadFile("image.png")
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   })
//   .finally(() => {
//     console.log("End");
//   });

// const result = loadFile("photo.jpg");

// result.then((data) => {
//   console.log(data, 1);
//   return null;
// });

// result.then((data) => {
//   console.log(data, 2);
//   return null;
// });

// result.then((data) => {
//   console.log(data, 3);
//   return null;
// });

///================================================================
// console.log('================================================================')

function loadFile(filename) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("2222");
      resolve(`Вміст файлу ${filename}`);
    }, 2000);
  });
}

function convertFile(content) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Конвертований вміст: ${content.toUpperCase()}`);
    }, 1000);
  });
}

function saveFile(convertedContent) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("saveFile");
      reject("Error test");
      //   resolve();
    }, 1500);
  });
}

function sendFileToClient() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   console.log("sendFileToClient");

      reject("Error test2");
      //   resolve();
    }, 500);
  });
}

function getInfoFromFile(file) {
  //   console.log(file, 1111);

  return Promise.resolve(file + 100);
  //   return file;
}
const test = Promise.any([
  loadFile("example.txt"),
  //   getInfoFromFile("example.txt"),
  saveFile(),
  sendFileToClient(),
  convertFile("file"),
])
  .then((data) => {
    console.log("Data", data);
  })
  .catch((error) => {
    console.log("Error", error);
  });

// console.log(test);
// loadFile("example.txt")
//   .then((content) => {
//     console.log(`Файл завантажено успішно!`);
//     console.log(`Вміст файлу:`, content);
//     return convertFile(content);
//   })

//   .then((data) => {
//     return getInfoFromFile(data);
//   })

//   .then((convertedContent) => {
//     console.log(`Файл успішно сконвертовано!`);
//     console.log(`Конвертований Вміст:`, convertedContent);
//     return saveFile(convertedContent);
//   })
//   .then(() => {
//     console.log(`Файл успішно збережено!`);
//     return sendFileToClient();
//   })

//   .catch((error) => {
//     console.log(`Сталась помилка`, error);
//   })
//   .finally(() => {
//     console.log(`Файл успішно відправленно клієнту!`);
//   });
