exports.validEmail = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return email.match(mailformat);
}

exports.validLength = (text, min, max) => {
    if (text.length < min || text.length > max) {
        return false;
    } else {
        return true;
    }
}

exports.validPassword = (pass) => {
    const passFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pass.match(passFormat);
}