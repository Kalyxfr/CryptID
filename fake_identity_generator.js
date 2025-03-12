function generateRandomString(length, type = "mixed") {
    const vowels = "aeiouy";
    const consonants = "bcdfghjklmnpqrstvwxz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";
    const letters = consonants + vowels;
    
    let chars = letters;
    if (type === "letters") chars = letters;
    else if (type === "numbers") chars = numbers;
    else if (type === "password") chars += numbers + symbols;
    
    let str = "";
    for (let i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateDateOfBirth() {
    let year = Math.floor(Math.random() * (2005 - 1940) + 1940);
    let month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    let day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    return `${day}/${month}/${year}`;
}

function generateRandomDigits(length) {
    let digits = "";
    for (let i = 0; i < length; i++) {
        digits += Math.floor(Math.random() * 10);
    }
    return digits;
}

function generateFakeIdentity() {
    const firstName = generateRandomString(6);
    const lastName = generateRandomString(8);
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
    const phone = `+${generateRandomDigits(2)} ${generateRandomDigits(3)}-${generateRandomDigits(3)}-${generateRandomDigits(4)}`;
    const address = `${generateRandomDigits(4)} ${generateRandomString(7)} Street, ${generateRandomString(6)}, ${generateRandomDigits(5)}`;
    const gender = ["Homme", "Femme", "Non-binaire"][Math.floor(Math.random() * 3)];
    const nationality = generateRandomString(7);
    const dob = generateDateOfBirth();
    
    const ip = `${generateRandomDigits(3)}.${generateRandomDigits(3)}.${generateRandomDigits(3)}.${generateRandomDigits(3)}`;
    const mac = `${generateRandomDigits(2)}:${generateRandomDigits(2)}:${generateRandomDigits(2)}:${generateRandomDigits(2)}:${generateRandomDigits(2)}:${generateRandomDigits(2)}`;
    
    const password = generateRandomString(12, "password");
    const username = generateRandomString(10);
    const socialUsername = `@${generateRandomString(8)}`;
    
    const cardNumber = `${generateRandomDigits(4)}-${generateRandomDigits(4)}-${generateRandomDigits(4)}-${generateRandomDigits(4)}`;
    const cardExp = `${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}/${Math.floor(25 + Math.random() * 5)}`;
    const cvv = generateRandomDigits(3);
    const bank = generateRandomString(10) + " Bank";
    
    const job = generateRandomString(10);
    const company = generateRandomString(10) + " Corp";
    const degree = generateRandomString(6) + " Degree";
    const university = generateRandomString(8) + " University";
    
    const plateNumber = `${generateRandomString(2, "letters").toUpperCase()}-${generateRandomDigits(3)}-${generateRandomString(2, "letters").toUpperCase()}`;
    const passportNumber = generateRandomDigits(9);
    const socialSecurityNumber = generateRandomDigits(9);
    const eyeColor = ["Bleu", "Vert", "Marron", "Noisette", "Gris"][Math.floor(Math.random() * 5)];
    const hairColor = ["Noir", "Blond", "Brun", "Roux", "Gris"][Math.floor(Math.random() * 5)];
    const bloodType = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"][Math.floor(Math.random() * 8)];
    const height = `${Math.floor(150 + Math.random() * 50)} cm`;
    const weight = `${Math.floor(50 + Math.random() * 50)} kg`;
    
    return {
        firstName, lastName, gender, dob, nationality,
        email, phone, address,
        ip, mac, password, username, socialUsername,
        card: { number: cardNumber, expiry: cardExp, cvv, bank },
        job, company, degree, university,
        plateNumber, passportNumber, socialSecurityNumber,
        eyeColor, hairColor, bloodType, height, weight,
        profilePicture: `https://thispersondoesnotexist.com/`
    };
}

console.log(generateFakeIdentity());