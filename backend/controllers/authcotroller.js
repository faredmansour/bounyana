const User = require("../models/usermodel.js"); // استدعاء الموديل
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerschema, loginschema } = require("../controllers/validation/authvalidation.js"); // تصحيح طريقة الـ import

// 1. Register User Logic
const registercontroller = async (req, res) => {
    try {
        // التحقق من صحة البيانات المرسلة (Validation)
        const { error, value } = registerschema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { name, email, password, role } = value;

        // التأكد إن المستخدم مش مسجل قبل كده
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "This user already exists" });
        }

        // تشفير كلمة السر
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // حفظ المستخدم الجديد
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        res.status(201).json({ message: "Registration successful", user: { id: newUser._id, name: newUser.name } });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// 2. Login User Logic
const logincontroller = async (req, res) => {
    try {
        // Validation للبيانات
        const { error, value } = loginschema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const { email, password } = value;

        // البحث عن المستخدم
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(400).json({ message: "Incorrect email or password" });
        }

        // مقارنة كلمة السر المشفرة
        const isMatch = await bcrypt.compare(password, foundUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect email or password" });
        }

        // إنشاء الـ JWT Token
        const token = jwt.sign(
            { id: foundUser._id, role: foundUser.role },
            "YOUR_SECRET_KEY", // يفضل وضعها في ملف .env
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Registration successful",
            token,
            user: { name: foundUser.name, role: foundUser.role }
        });

    } catch (err) {
        res.status(500).json({ message: "server error", error: err.message });
    }
};

// تصحيح الـ Export
module.exports = {
    registercontroller,
    logincontroller
};