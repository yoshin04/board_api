export class LoginDTO {
  email: string;
  password: string
}

export class SignUpDTO extends LoginDTO {
  name: string;
}