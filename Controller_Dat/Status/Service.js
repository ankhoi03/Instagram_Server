const statusModel = require("../Status/Model");
//lấy toàn bộ sản phẩm trong databases
const getAllStatuss = async () => {
  try {
    // page = 1, size = 10;
    // let skip = (page - 1) * size;
    // let limit = size;
    // console.log(data);
    // return DATA;
    // select * from Statuss
    return await statusModel.find();
    //   return await statusModel
    //     .find({}, ' name thereason  ') // select name , thereason from Statuss
    //     .populates('category', ' name ') 
    //     .sort({ thereason: -1 }) // sắp xếp 1 tăng dần, -1 giảm dần 
    //     .skip(2) // bỏ qua 2 sản phẩm đầu tiên 
    //     .limit(2) // lấy 2 sản phẩm tiếp theo 
  } catch (error) {
    console.log("Get All Status error", error);
    throw error;
  }
};
const getAllAccount = async () => {
  try {
    // page = 1, size = 10;
    // let skip = (page - 1) * size;
    // let limit = size;
    // console.log(data);
    // return DATA;
    // select * from Statuss
    return await statusModel.find();
    //   return await statusModel
    //     .find({}, ' name thereason  ') // select name , thereason from Statuss
    //     .populates('category', ' name ') 
    //     .sort({ thereason: -1 }) // sắp xếp 1 tăng dần, -1 giảm dần 
    //     .skip(2) // bỏ qua 2 sản phẩm đầu tiên 
    //     .limit(2) // lấy 2 sản phẩm tiếp theo 
  } catch (error) {
    console.log("Get All Status error", error);
    throw error;
  }
};

const deleteStatus = async (id) => {
  try {
    // const index = DATA.findIndex(item => item._id.toString() == id.toString());
    // if (index >= 0) {
    //     DATA.splice(index, 1);
    await statusModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.log("Delete Status by Id error", error);
  }
  return false;
};
const deleteAccount = async (id) => {
  try {
    // const index = DATA.findIndex(item => item._id.toString() == id.toString());
    // if (index >= 0) {
    //     DATA.splice(index, 1);
    await statusModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.log("Delete Status by Id error", error);
  }
  return false;
};
const addStatus = async (name, thereason, name2, post) => {
  try {
    // const newStatus = {
    //     _id: DATA[DATA.length - 1]._id + 1,
    //     name,
    //     thereason,
    //     name2,
    //     post,
    //     category
    // }
    // console.log(newStatus);
    // DATA.push(newStatus);
    const newStatus = new statusModel({
      name,
      thereason, name2, post
    });
    await newStatus.save();
    return true;
  } catch (error) {
    console.log("Add Status Error: " + error);
  }
  return false;
};
const addAccount = async (name, thereason, name2, post) => {
  try {
    // const newStatus = {
    //     _id: DATA[DATA.length - 1]._id + 1,
    //     name,
    //     thereason,
    //     name2,
    //     post,
    //     category
    // }
    // console.log(newStatus);
    // DATA.push(newStatus);
    const newStatus = new statusModel({
      name,
      thereason, name2, post
    });
    await newStatus.save();
    return true;
  } catch (error) {
    console.log("Add Status Error: " + error);
  }
  return false;
};



const getStatus = async (id) => {
  try {
    // let Status = DATA.find(item => item._id.toString() == id.toString());
    // return Status;
    return statusModel.findById(id);
  } catch (error) {
    console.log("Get Status by id error: ", error);
  }
  return null;
};
const getAccount = async (id) => {
  try {
    // let Status = DATA.find(item => item._id.toString() == id.toString());
    // return Status;
    return statusModel.findById(id);
  } catch (error) {
    console.log("Get Status by id error: ", error);
  }
  return null;
};

// tìm kiếm sản phẩm
const searchStatus = async (keyword) => {
  try {
    /**
     * select * from Status where thereason > 10 and thereason < 100
     * and name like '%keyword%'
     */
    let query = {
      // gt: greater than, lt: less than
      // gte: greater than or equal, lte: less than or equal
      thereason: { $gt: 10, $lt: 100 }, // tìm kiếm giá tiền max và min của sản phẩm
      // $regex: regular expression
      // find all Statuss that have name contains keyword
      //name: { $regex: keyword, $options: "i" }, // tìm kiếm bằng tên
      name: keyword, // tìm kiếm chính xác
      $or: [{ name2: { $gte: 20 } }, { name2: { $gte: 5 } }],
    };
    let Status = await statusModel.find(query);
    Status = await statusModel.find({}, "name thereason"); // sét tên để kiếm sản phẩm
    return Status;
  } catch (error) {
    console.log("Search Status error: ", error);
  }
  return null;
};
module.exports = {
  getAllStatuss,
  deleteStatus,
  addStatus,
  getStatus,
  searchStatus,
  getAllAccount,
  deleteAccount,
  getAccount,
  addAccount

};

const DATA = [
  {
    _id: 1,
    name: "Dickens LLC",
    thereason: 80,
    name2: 70,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",
  },
  {
    _id: 2,
    name: "Nitzsche-Johnson",
    thereason: 61,
    name2: 10,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 3,
    name: "Gaylord, Bogisich and Will",
    thereason: 58,
    name2: 39,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 4,
    name: "Wisoky LLC",
    thereason: 54,
    name2: 41,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 5,
    name: "Okuneva, Gutkowski and Becker",
    thereason: 70,
    name2: 52,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 6,
    name: "Keeling-Zboncak",
    thereason: 22,
    name2: 60,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 7,
    name: "Spinka, Pfannerstill and Ankunding",
    thereason: 63,
    name2: 48,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 8,
    name: "Schimmel-Cronin",
    thereason: 92,
    name2: 51,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 9,
    name: "Walsh Inc",
    thereason: 50,
    name2: 69,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 10,
    name: "Hyatt, Rogahn and Koepp",
    thereason: 15,
    name2: 71,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 11,
    name: "Roob LLC",
    thereason: 52,
    name2: 47,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 12,
    name: "Stanton LLC",
    thereason: 31,
    name2: 53,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 13,
    name: "Bednar, Leffler and Kassulke",
    thereason: 6,
    name2: 57,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 14,
    name: "Collier LLC",
    thereason: 44,
    name2: 72,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 15,
    name: "Kuphal, Schumm and Graham",
    thereason: 60,
    name2: 95,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 16,
    name: "Glover-Zboncak",
    thereason: 6,
    name2: 70,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 17,
    name: "Ziemann Inc",
    thereason: 59,
    name2: 32,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 18,
    name: "Stroman-Raynor",
    thereason: 29,
    name2: 35,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 19,
    name: "Beatty Group",
    thereason: 16,
    name2: 91,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
  {
    _id: 20,
    name: "Torp-Gottlieb",
    thereason: 66,
    name2: 78,
    post:
      "https://znews-photo.zingcdn.me/w660/Uploaded/bpivpawv/2021_11_21/Cristiano_Ronaldo_Man_Utd_Man_City_1517539.jpg",

  },
];
