

const categoryModel = require('./CategoryModel');
const getAllCategory = async () => {
  try {
    // return DATA;
    return await categoryModel.find(); // giống với select * from categories 
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllCategory };

var DATA = [
  [{
    "_id": {
      "$oid": "648427d8fc13ae27bdfae3dc"
    },
    "name": "Teekay Offshore Partners L.P.",
    "category": "Termite Control",
    "price": "$3.38",
    "Descripsion": "Soroako Airport",
    "Image": "https://images2.thanhnien.vn/528068263637045248/2023/6/10/rn-1686356652825510291622.jpg"
  }, {
    "_id": {
      "$oid": "648427d8fc13ae27bdfae3dd"
    },
    "name": "Apollo Investment Corporation",
    "category": "Masonry",
    "price": "$8.84",
    "Descripsion": "Norilsk-Alykel Airport",
    "Image": "https://images2.thanhnien.vn/528068263637045248/2023/6/10/rn-1686356652825510291622.jpg"
  }, {
    "_id": {
      "$oid": "648427d8fc13ae27bdfae3de"
    },
    "name": "USANA Health Sciences, Inc.",
    "category": "Retaining Wall and Brick Pavers",
    "price": "$8.33",
    "Descripsion": "Tanacross Airport",
    "Image": "https://images2.thanhnien.vn/528068263637045248/2023/6/10/rn-1686356652825510291622.jpg"
  }, {
    "_id": {
      "$oid": "648427d8fc13ae27bdfae3df"
    },
    "name": "PIMCO Municipal Income Fund",
    "category": "Electrical",
    "price": "$5.86",
    "Descripsion": "Normanton Airport",
    "Image": "https://images2.thanhnien.vn/528068263637045248/2023/6/10/rn-1686356652825510291622.jpg"
  }, {
    "_id": {
      "$oid": "648427d8fc13ae27bdfae3e0"
    },
    "name": "iShares iBoxx $ High Yield ex Oil & Gas Corporate Bond ETF",
    "category": "Roofing (Asphalt)",
    "price": "$3.04",
    "Descripsion": "Vitória da Conquista Airport",
    "Image": "https://images2.thanhnien.vn/528068263637045248/2023/6/10/rn-1686356652825510291622.jpg"
  }, {
    "_id": {
      "$oid": "648427d8fc13ae27bdfae3e1"
    },
    "name": "Concho Resources Inc.",
    "category": "Retaining Wall and Brick Pavers",
    "price": "$5.66",
    "Descripsion": "General Guadalupe Victoria International Airport",
    "Image": "https://images2.thanhnien.vn/528068263637045248/2023/6/10/rn-1686356652825510291622.jpg"
  }, {
    "_id": {
      "$oid": "648427d8fc13ae27bdfae3e2"
    },
    "name": "Time Warner Inc.",
    "category": "Drywall & Acoustical (FED)",
    "price": "$7.77",
    "Descripsion": "Krabi Airport",
    "Image": "https://images2.thanhnien.vn/528068263637045248/2023/6/10/rn-1686356652825510291622.jpg"
  }, {
    "_id": {
      "$oid": "648427d8fc13ae27bdfae3e3"
    },
    "name": "Simulations Plus, Inc.",
    "category": "Elevator",
    "price": "$4.38",
    "Descripsion": "Laughlin Bullhead International Airport",
    "Image": "https://images2.thanhnien.vn/528068263637045248/2023/6/10/rn-1686356652825510291622.jpg"
  }, {
    "_id": {
      "$oid": "648427d8fc13ae27bdfae3e4"
    },
    "name": "AzurRx BioPharma, Inc.",
    "category": "Wall Protection",
    "price": "$5.94",
    "Descripsion": "Bronson Creek Airport",
    "Image": "https://images2.thanhnien.vn/528068263637045248/2023/6/10/rn-1686356652825510291622.jpg"
  }, {
    "_id": {
      "$oid": "648427d8fc13ae27bdfae3e5"
    },
    "name": "Rocket Fuel Inc.",
    "category": "Roofing (Asphalt)",
    "price": "$5.88",
    "Descripsion": "Kauehi Airport",
    "Image": "https://images2.thanhnien.vn/528068263637045248/2023/6/10/rn-1686356652825510291622.jpg"
  }]
]