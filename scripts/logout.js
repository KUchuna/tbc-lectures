export default async function Logout() {
    try {
      const response = await fetch("http://localhost:3000/api/logout", {
        method: "POST",
      });
  
      if (response.ok) {
        return response.json();
      }
    } catch (error) {
      console.error(error);
    }
  }