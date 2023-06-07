export default interface Admin {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  role: "super" | "admin" | "hr";
}
