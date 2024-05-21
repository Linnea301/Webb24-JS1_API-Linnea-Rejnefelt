fetchUserData = () => {
    fetch("https://randomuser.me/api/")
    .then(response => {
        if (!response.ok) {
            throw new Error('Något gick fel - ' + response.status);
        }
        return response.json();
    })
    .then(data =>{
        let user = data.results[0];
        let userInfo = {
            firstName: user.name.first,
            lastName: user.name.last,
            gender: user.gender,
            email: user.email,
            phone: user.phone,
            picture: user.picture.large
        };
        document.getElementById("user-picture").src = userInfo.picture;
        document.getElementById("user-firstName").textContent = `Firstname: ${userInfo.firstName}`;
        document.getElementById("user-lastName").textContent = `Lastname: ${userInfo.lastName}`;
        document.getElementById("user-gender").textContent = `Gender: ${userInfo.gender}`;
        document.getElementById("user-email").textContent = `Email: ${userInfo.email}` ;
        document.getElementById("user-phone").textContent = `Phone: ${userInfo.phone}`;
 
    })
    .catch(error => {
        console.error('Fetch-fel: ', error);
    });
}




