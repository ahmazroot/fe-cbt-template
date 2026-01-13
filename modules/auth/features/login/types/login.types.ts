export interface LoginDto {
  Email: string;
  Password: string;
}

export interface LoginResponse {
  token: string;
}
