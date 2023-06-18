const statusservice = require("../Status/Service");

const getAllStatuss = async () => {
  try {
    return await statusservice.getAllStatuss();
  } catch (error) {
    throw error;
  }
};
const getAllAccount = async () => {
  try {
    return await statusservice.getAllAccount();
  } catch (error) {
    throw error;
  }
};

const deleteStatus = async (id) => {
  try {
    return await statusservice.deleteStatus(id);
  } catch (error) {
    throw error;
  }
};
const deleteAccount = async (id) => {
  try {
    return await statusservice.deleteAccount(id);
  } catch (error) {
    throw error;
  }
};

const addStatus = async (name, thereason, name2, post, ) => {
  try {
    await statusservice.addStatus(name, thereason, name2, post, );
  } catch (error) {
    throw error;
  }
};
const addAccnout = async (name, thereason, name2, post, ) => {
  try {
    await statusservice.addAccount(name, thereason, name2, post, );
  } catch (error) {
    throw error;
  }
};



const getStatus = async (id) => {
  try {
    return await statusservice.getStatus(id);
  } catch (error) {
    throw error;
  }
};
const getAccount = async (id) => {
  try {
    return await statusservice.getAccount(id);
  } catch (error) {
    throw error;
  }
};
const searchStatus = async (id) => {
  try {
    return await statusservice.searchStatus(name);
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
  addAccnout
};
