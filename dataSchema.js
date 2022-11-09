const mongoose = require('mongoose');

const College = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    AllDept: [String],
    AllCaste: [String],
    Dept: {
        Civil: {
            NoOfSeats: String,
            Caste: {
                OPEN: Number,
                SC: Number,
                ST: Number,
                OBC: Number,
                VJ: Number,
                NT: Number,
                Minority: Number,
                TFWS: Number,
                EWS: Number,
                PH: Number
            },
            Approx_fees: Number
        },
        Computer: {
            NoOfSeats: String,
            Caste: {
                OPEN: Number,
                SC: Number,
                ST: Number,
                OBC: Number,
                VJ: Number,
                NT: Number,
                Minority: Number,
                TFWS: Number,
                EWS: Number,
                PH: Number
            },
            Approx_fees: Number
        },
        IT: {
            NoOfSeats: String,
            Caste: {
                OPEN: Number,
                SC: Number,
                ST: Number,
                OBC: Number,
                VJ: Number,
                NT: Number,
                Minority: Number,
                TFWS: Number,
                EWS: Number,
                PH: Number
            },
            Approx_fees: Number
        },
        Electrical: {
            NoOfSeats: String,
            Caste: {
                OPEN: Number,
                SC: Number,
                ST: Number,
                OBC: Number,
                VJ: Number,
                NT: Number,
                Minority: Number,
                TFWS: Number,
                EWS: Number,
                PH: Number
            },
            Approx_fees: Number
        },
        Electronics: {
            NoOfSeats: String,
            Caste: {
                OPEN: Number,
                SC: Number,
                ST: Number,
                OBC: Number,
                VJ: Number,
                NT: Number,
                Minority: Number,
                TFWS: Number,
                EWS: Number,
                PH: Number
            },
            Approx_fees: Number
        },
        Instrumentation: {
            NoOfSeats: String,
            Caste: {
                OPEN: Number,
                SC: Number,
                ST: Number,
                OBC: Number,
                VJ: Number,
                NT: Number,
                Minority: Number,
                TFWS: Number,
                EWS: Number,
                PH: Number
            },
            Approx_fees: Number
        },
        LeatherTechnology: {
            NoOfSeats: String,
            Caste: {
                OPEN: Number,
                SC: Number,
                ST: Number,
                OBC: Number,
                VJ: Number,
                NT: Number,
                Minority: Number,
                TFWS: Number,
                EWS: Number,
                PH: Number
            },
            Approx_fees: Number
        },
        LeatherGoodsandFootwearTechnology: {
            NoOfSeats: String,
            Caste: {
                OPEN: Number,
                SC: Number,
                ST: Number,
                OBC: Number,
                VJ: Number,
                NT: Number,
                Minority: Number,
                TFWS: Number,
                EWS: Number,
                PH: Number
            },
            Approx_fees: Number
        },
        Mechanical: {
            NoOfSeats: String,
            Caste: {
                OPEN: Number,
                SC: Number,
                ST: Number,
                OBC: Number,
                VJ: Number,
                NT: Number,
                Minority: Number,
                TFWS: Number,
                EWS: Number,
                PH: Number
            },
            Approx_fees: Number
        },
        Rubber: {
            NoOfSeats: String,
            Caste: {
                OPEN: Number,
                SC: Number,
                ST: Number,
                OBC: Number,
                VJ: Number,
                NT: Number,
                Minority: Number,
                TFWS: Number,
                EWS: Number,
                PH: Number
            },
            Approx_fees: Number
        }
    },
    AIandML: {
        NoOfSeats: String,
        Caste: {
            OPEN: Number,
            SC: Number,
            ST: Number,
            OBC: Number,
            VJ: Number,
            NT: Number,
            Minority: Number,
            TFWS: Number,
            EWS: Number,
            PH: Number
        },
        Approx_fees: Number
    },
    Location: {
    Region: String,
    District: String,
    Address: String
},
    College_Status: String,
    Website: String,
    Autonomy_status: String,
    HostelAvailability: String,
    Rating: Number,
    LogoURL: String,
    Pdflink: String,
    minFees: Number,
    maxFees: Number
})

module.exports = mongoose.model('College', College);

// const dataSchema = new mongoose.Schema({
//     _id:mongoose.Schema.Types.ObjectId,
//     name:String,
//     email:String,
//     phone:Number
// })

// module.exports = mongoose.model('dataSchema',dataSchema);