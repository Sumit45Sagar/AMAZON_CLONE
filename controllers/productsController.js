const productModel = require("../models/productsModel.js");

const getAllProducts = async (req, res) => {
  // const data = await productModel.find();
  // const data = productModel.find();
  // const products = await productModel.find(q);
  // products = products.find(q);

  //-------------------OR-------------------
  const {
    sort = "price",
    page = 1,
    pageSize = 3, 
    fields = "-info",
    ...q
  } = req.query;
  const sortStr = sort.split(",").join(" ");
  const fieldsStr = fields.split(",").join(" ");

  console.log(q);
  let query = productModel.find(q).sort(sortStr);

  query = query.select(fieldsStr); //.select() method is used to show only the selected fields
  //query = query.select('-description');   //- means skip this

  const skip = (page - 1) * pageSize;
  // const limit = 3;
  query = query.skip(skip).limit(pageSize);

  const products = await query;

  const totalResults = await productModel.countDocuments();

  console.log(req.url);
  res.json({
    status: "success",
    results: products.length,
    data: {  
      products: products,
    },
    totalResults: totalResults,
    pageSize: pageSize,
    page: page,
  });
};

const addProduct = async (req, res) => {
  try {
    const { _id, ...data } = await productModel.create(req.body);
    console.log(data);
    res.json({
      status: "success",
      resuly: 1,
      data: {
        product: data,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(403);
    res.json({
      status: "fail",
      message: JSON.stringify(err),
    });
  }
};

const replaceProduct = async (req, res) => {
  try {
    const reqId = req.params.id;
    const data = { ...req.body, _id: reqId };
    const result = await productModel.findOneAndReplace({ _id: reqId }, data);
    res.json({
      status: "success",
      result: 1,
      data: {
        products: result,
      },
    });
  } catch (err) {
    res.status(501);
    res.json({
      status: "fail",
      message: JSON.stringify(err),
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const reqId = req.params.id;
    const result = await productModel.deleteOne({ _id: reqId });
    res.json({
      status: "success",
      result: 1,
      data: {
        products: result,
      },
    });
  }
  catch (err) {
    res.status(501);
    res.json({
      status: "fail",
      message: JSON.stringify(err), 
    });
  }
}

module.exports = {
  getAllProducts,
  addProduct,
  replaceProduct,
  deleteProduct,
};

//SPREAD vs REST
//const {price, ...e} = obj;
//why there is underscore in _id

//product user order reviews
//CRUD for user


//reviews put patch