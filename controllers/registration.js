const User = require('../models/userModel');
const { validEmail, validLength, validPassword } = require('../validations/userValidation');
const registration = async (req, res) => {
    try {
        const { fName, lName, userName, email, password, birthDate, birthMonth, birthYear, gender, varified } = req.body;

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

        const user = await new User({
            fName,
            lName,
            userName,
            email,
            password,
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