const User = require('../models/userModel');
const { validEmail, validLength, validPassword, generateUsername } = require('../validations/userValidation');
const bcrypt = require('bcrypt');

const registration = async (req, res) => {
    try {
        const { fName, lName, email, password, birthDate, birthMonth, birthYear, gender, varified } = req.body;

        //name validation
        if (!validLength(fName, 2, 8) || !validLength(lName, 2, 8)) {
            return res.status(401).json({
                errMessage: 'Name length should be two to eight characters!'
            })
        }

        //email validation
        if (!validEmail(email)) {
            return res.status(401).json({
                errMessage: 'Email is not valid!'
            })
        }
        //isUniq 
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(401).json({
                errMessage: 'This email is already exists. Try with another one.'
            })
        }
        //password validation
        if (!validPassword(password)) {
            return res.status(401).json({
                errMessage: 'Password should contain minimum eight characters, at least one letter, one number and one special character!'
            })
        }


        //hash password
        const hashedPass = await bcrypt.hash(password, 10);

        //generate uniq username
        let fullname = fName + lName;
        let uniqUserName = await generateUsername(fullname);
        console.log(uniqUserName);
        return
        const user = await new User({
            fName,
            lName,
            userName: uniqUserName,
            email,
            password: hashedPass,
            birthDate,
            birthMonth,
            birthYear,
            gender,
            varified
        }).save();

        res.send(user);

    } catch (error) {
        console.log(error.message);
    }
}
module.exports = registration;