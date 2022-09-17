const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;

const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    promiseTheaterIXX()
      .then((result) => {
        return new Promise((resolve, reject) => {
          let count = 0;
          for (let i = 0; i < result.length; i++) {
            if (result[i].hasil === emosi) {
              count++
            }
          }
          return resolve(count)
        })
      })
      .then((result => {
        return new Promise((resolve, reject) => {
          promiseTheaterVGC()
            .then((data) => {
              let count2 = 0;
              for (let i = 0; i < data.length; i++) {
                if (data[i].hasil === emosi) {
                  count2++
                }
              }
              return resolve(result + count2)
            })
        })
          .then((result) => {
            console.log(result)
          })
      }))
  })
}

module.exports = {
  promiseOutput,
};
