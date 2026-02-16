let userContainer = document.querySelector('.userContainer');
let searchInput = document.querySelector('#searchInput');

const users = [
    {
        profileUrl: 'https://th.bing.com/th/id/OIP.MseTKf7x-0MyuK23BxAVtgHaFq?w=211&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
        name: 'Kylie',
        email: 'kylie@gmail.com'
    },
    {
        profileUrl: 'https://th.bing.com/th/id/OIP.93l0ovAsiIADZNp9RntulgHaLH?w=119&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
        name: 'Kendall',
        email: 'kendall@gmail.com'
    },
    {
        profileUrl: 'https://th.bing.com/th/id/OIP.Jso_09Si9gl9uWbXrRqIfAHaFH?w=262&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
        name: 'Sydney Sweeney',
        email: 'sweeny@gmail.com'
    },
    {
        profileUrl: 'https://th.bing.com/th/id/OIP.v3vuUAcsA-OlSHrkho_YmgHaE8?w=248&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
        name: 'Ana De Armas',
        email: 'ana@gmail.com'
    },
]

// Function to display users
function renderUsers(arr) {

    // Clear previous users before rendering new ones
    userContainer.innerHTML = '';

    // Loop through array and create UI
    arr.forEach((item) => {
        let divElem = document.createElement('div');
        divElem.className = 'userItem';

        divElem.innerHTML = `
            <div class="image">
                <img src="${item.profileUrl}" alt="error loading image">
            </div>
            <div class="userDetails">
                <h3>${item.name}</h3>
                <p>${item.email}</p>
            </div>
        `;

        userContainer.append(divElem);
    });
}

// Search function
const handleSearch = (e) => {
    let searchValue = e.target.value.toLowerCase();

    let filteredUsers = users.filter((obj) => {
        return (obj.name.toLowerCase().includes(searchValue)
            ||
            obj.email.toLowerCase().includes(searchValue))
    });

    // Clear container first
    userContainer.innerHTML = '';

    if (filteredUsers.length === 0) {
        let notFound = document.createElement('h3');
        notFound.innerText = 'User not found';
        notFound.classList.add('notFound')
        userContainer.append(notFound);
    } else {
        renderUsers(filteredUsers);
    }
};

// Event listener for input typing
searchInput.addEventListener('input', handleSearch);

// Initial render when page loads
renderUsers(users);