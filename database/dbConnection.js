import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_BLOGGING_WEBSITE",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((error) => {
      console.log(`error accrued white connecting to database ${error}`);
    });
};

