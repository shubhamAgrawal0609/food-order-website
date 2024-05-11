// const mongoose = require('mongoose')
// // const mongoDbClient = require("mongodb").MongoClient
// const mongoURI = 'mongodb://<!#@!#@>:"!@!@"@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/Customer?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority' // Customer change url to your db you created in atlas
// // mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//         if (err) console.log("---" + err)
//         else {
//             // var database =
//             console.log("connected to mongo")
//             const foodCollection = await mongoose.connection.db.collection("food_items");
//             foodCollection.find({}).toArray(async function (err, data) {
//                 const categoryCollection = await mongoose.connection.db.collection("Categories");
//                 categoryCollection.find({}).toArray(async function (err, Catdata) {
//                     callback(err, data, Catdata);

//                 })
//             });
//             // listCollections({name: 'food_items'}).toArray(function (err, database) {
//             // });
//             //     module.exports.Collection = database;
//             // });
//         }
//     })
// };

const mongoose = require("mongoose");
//const mongoURI =
// "mongodb+srv://gofood:GOFOOd123@cluster0.miu9haf.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoURI =
  "mongodb+srv://gofood:GOFOOd123@cluster0.miu9haf.mongodb.net/gofoodmern?retryWrites=true&w=majority";
// "mongodb://gofood:GOFOOd123@ac-1hppzyi-shard-00-00.miu9haf.mongodb.net:27017,ac-1hppzyi-shard-00-01.miu9haf.mongodb.net:27017,ac-1hppzyi-shard-00-02.miu9haf.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-130ps6-shard-0&authSource=admin&retryWrites=true&w=majority"
const mongoDB = async () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      async () => {
        // console.log("value", value);
        console.log("Connection successful");
        const fetched_data = await mongoose.connection.db.collection(
          "food_item"
        );
        //console.log(collection.find());
        fetched_data.find({}).toArray(async function (err, data) {
          const foodcategory = await mongoose.connection.db.collection("foodcategory");
          foodcategory.find({}).toArray(async function (err, Catdata) {
                    // callback(err, data, Catdata);
                    if (err) console.log(err);
                    else {global.food_item=data;
                         global.foodcategory=catData;
                    }
                })
          
        });
      },
      (reason) => {
        console.log("reason", reason);
      }
    )
    .catch((err) => {
      console.log("err", err);
    });
};
module.exports = mongoDB;
