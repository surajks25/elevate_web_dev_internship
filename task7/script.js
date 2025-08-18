const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");


async function fetchUsers() {
  userContainer.innerHTML = "<p>Loading...</p>";
  
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error("Failed to fetch users: " + response.status);
    }

    const users = await response.json();
    displayUsers(users);

  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}


function displayUsers(users) {
  userContainer.innerHTML = ""; 
  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    userContainer.appendChild(card);
  });
}


reloadBtn.addEventListener("click", fetchUsers);


fetchUsers();
