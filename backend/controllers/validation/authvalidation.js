const joi = require("joi");

// 1. تعريف Schema التسجيل
const registerschema = joi.object({
    // غيرنا username لـ name عشان تطابق الـ User Model اللي عملناه
    name: joi.string().min(3).max(30).required(),
    
    email: joi.string().email().required(),

    password: joi.string().min(8).required(),

    // الـ Role اختياري وله قيم محددة
    role: joi.string().valid("user", "admin").default("user")
});

// 2. تعريف Schema تسجيل الدخول
const loginschema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required()
});

// 3. التصدير (Export) بشكل صحيح عشان نستخدمهم في الـ Controller
module.exports = {
    registerschema,
    loginschema // غيرنا الاسم لـ loginschema عشان يتناسب مع الكود اللي فات
};