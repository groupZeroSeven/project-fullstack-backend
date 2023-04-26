import "dotenv/config";
import AppDataSource from "../data-source";
import { User } from "../Entities/user.entity";
import { compare } from "bcryptjs";
import { AppError } from "../Errors/error";
import * as crypto from "crypto";
import * as nodemailer from "nodemailer";
import * as bcryptjs from "bcryptjs";

const recoverPasswordService = async (email: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const emailAccount = await nodemailer.createTestAccount();

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Email invalid", 400);
  }

  const newPassword = crypto.randomBytes(6).toString("hex");

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: emailAccount.user, // generated ethereal user
      pass: emailAccount.pass, // generated ethereal password
    },
  });

  transporter
    .sendMail({
      from: '"Admin" <admin@example.com>', // sender address
      to: email, // list of receivers
      subject: "Recuperação de senha", // Subject line
      text: `Use essa senha para acessar a plataforma: ${newPassword}`, // plain text body
    })
    .then(async () => {
      const passwordHash = await bcryptjs.hash(newPassword, 8);
      userRepository.update(user.id, { password: passwordHash });
    });

  return "Email enviado";
};

export default recoverPasswordService;
