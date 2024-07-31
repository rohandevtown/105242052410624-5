const {BookModel, UserModel} = require("../models")

exports.getAllBooks = async(req, res) => {
    const books = await BookModel.find();

    if(books.length === 0)
        return res.status(404).json({
            success: false,
            messgae: "No Book Found"
})

    return res.status(200).json({
        success: true,
        data: books
    })
};

exports.getSingleBookById = async (req, res)=>{
    const {id} = req.params;
    // const book = books.find((each)=> each.id ===id);
    const book = await BookModel.findById(id);
    if(!book){
        return res.status(404).json({
    success: false,
    message: "Book Not Found"
    })}

    return res.status(200).json({
        success: true,
        data: book
    })
}


exports.addNewBook = async (req, res)=>{
    const {data} = req.body;

    if(!data){
        return res.status(400).json({
            success: false,
            message: "No data provided"
        })
    }

    // const book = books.find((each)=> each.id === id);
    await BookModel.create(data)
    const allBooks = await BookModel.find();

    // if(book){
    //     return res.status(404).json({
    //         success: false,
    //         message: "Book exists with the given ID"
    //     })
    // }
    // users.push({id, name, author, genre, price, publisher});
    return res.status(201).json({
        success: true,
        data: allBooks
    })
}


exports.updateBookById = async  (req, res)=>{
     const {id} = req.params;
     const {data} = req.body;

    // const book = books.find((each)=> each.id ===id);
    // if(!book){
    //     return res.status(404).json({
    // success: false,
    // message: "book Not Found"
    // })}

    // const updateBook = books.map((each)=>{
    //     if(each.id===id){
    //         return {
    //             ...each,
    //             ...data
    //         }
    //     }
    //     return each;
    // })
    
    const updateBook = await BookModel.findOneAndUpdate({_id: id}, data, {new: true})

    return res.status(200).json({
        success: true,
        data: updateBook
    })
}

// module.exports = {getAllBooks, getSingleBookById}

