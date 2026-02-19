type player = "noob" | "pro" | "ninja";

export interface userInterface {
  id: string;
  name: string;
  surname: string;
  age: number;
  sessions_max: number;
  typePlayer: player;
}
