document.addEventListener("DOMContentLoaded", () => {
  const userList = document.getElementById("user-list");
  const userDialog = document.getElementById("user-dialog");
  const userDetails = document.getElementById("user-details");
  const closeDialogButton = document.getElementById("close-dialog");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.name} - ${user.email}`;
        listItem.addEventListener("click", () => {
          userDetails.innerHTML = `
                        <h2>${user.name}</h2>
                        <p><strong>Name:</strong> ${user.username}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Website:</strong> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
                        <p><strong>Adress:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
                    `;
          userDialog.showModal();
        });
        userList.appendChild(listItem);
      });
    });
  closeDialogButton.addEventListener("click", () => {
    userDialog.close();
  });
});
