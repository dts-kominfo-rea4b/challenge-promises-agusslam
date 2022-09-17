const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;

const calculateTheater = async (emosi) => {
  let theaterIXX = await promiseTheaterIXX()
  let theaterVGC = await promiseTheaterVGC()

  let allTheater = []
  allTheater.push(...theaterIXX, ...theaterVGC)

  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < allTheater.length; i++) {
    if (allTheater[i].hasil === "marah") {
      count1++
    } else {
      count2++
    }
  }

  if (emosi === "marah") {
    return count1
  } else {
    return count2
  }
}

const promiseOutput = async (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi === "marah") {
      return resolve(calculateTheater("marah"))
    } else if (emosi === "tidak marah") {
      return resolve(calculateTheater("tidak marah"))
    }
  })
}

module.exports = {
  promiseOutput,
};
