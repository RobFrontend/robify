import supabase from "./supabase";

export async function getSongs() {
  let { data, error } = await supabase.from("songs").select("*");
  if (error) {
    console.log(error);
    throw new Error("Songs could not be loaded");
  }
  return data;
}
