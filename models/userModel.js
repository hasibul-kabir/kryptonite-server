const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;
const userModel = mongoose.Schema({
    fName: {
        type: String,
        require: true,
        trim: true,
        text: true
    },
    lName: {
        type: String,
        require: true,
        trim: true,
        text: true
    },
    userName: {
        type: String,
        require: true,
        trim: true,
        text: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        text: true
    },
    password: {
        type: String,
        require: true
    },
    cover: {
        type: String,
        trim: true
    },
    birthDate: {
        type: Number,
        require: true,
        trim: true
    },
    birthMonth: {
        type: Number,
        require: true,
        trim: true
    },
    birthYear: {
        type: Number,
        require: true,
        trim: true
    },
    gender: {
        type: String,
        enum: [
            'Male',
            'Female',
            'Other'
        ],
        require: true
    },
    varified: {
        type: Boolean,
        default: false
    },
    friends: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ],
    followings: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ],
    followers: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ],
    requests: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ],
    searchHistory: [
        {
            user: {
                type: ObjectId,
                ref: 'User',
                require: true
            },
            createdAt: {
                type: Date,
                require: true
            }
        }
    ],
    details: {
        bio: {
            type: String
        },
        nickName: {
            type: String
        },
        job: {
            type: String
        },
        workPlace: {
            type: String
        },
        school: {
            type: String
        },
        college: {
            type: String
        },
        currentCity: {
            type: String
        },
        homeTown: {
            type: String
        },
        relationship: {
            type: String,
            enum: [
                'Single',
                'Married',
                'Divorced',
                'In a relationship'
            ]
        },
        socialLink: {
            type: String
        },
        savedPost: [
            {
                post: {
                    type: ObjectId,
                    ref: 'Post'
                },
                savedAt: {
                    type: Date,
                    require: true
                }
            }
        ]
    }


}, {
    timestamps: true
});

module.exports = mongoose.model('User', userModel);