const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/myDB")
    .then(() => console.log("Connection Successfull..."))
    .catch((err) => console.log(err))

const playList = mongoose.Schema({
    name: {
        type: String,
        //    Validation
        lowercase: true,
        trim: true,
        maxLength: [10, "Validation Error!"],
        minLength: [2, "Min Length error!"]
    },
    ctype: {
        type: String,
        required: true,
        enum: ["frontend", "backend", "database"],

    },
    videos: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Playlist = mongoose.model("Playlist", playList)

const createDocument = async () => {
    try {
        const Mongoose = new Playlist({
            name: "        MONGOOSE          ",
            ctype: "database",
            videos: 10,
            active: true,
        })
        const result = await Mongoose.save()
        console.log(result)
    } catch (error) {
        console.log(error)

    }
}
createDocument()