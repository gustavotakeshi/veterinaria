// Función para registrar un usuario
async function registerUser(username, password) {
    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.text();
    alert(data); // Muestra un mensaje de confirmación
}

// Evento para el formulario de registro
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    await registerUser(username, password);
});

// Eventos para agregar mascotas y citas (tu código existente)
addPetForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const pet = {
        petName: document.getElementById('petName').value,
        clientName: document.getElementById('clientName').value,
        petType: document.getElementById('petType').value,
        vetName: document.getElementById('vetName').value
    };

    const response = await fetch('/add-pet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    });

    const newPet = await response.json();

    const newRow = petsTable.insertRow();
    newRow.innerHTML = `
        <td>${newPet.petName}</td>
        <td>${newPet.clientName}</td>
        <td>${newPet.petType}</td>
        <td>${newPet.vetName}</td>
        <td>
            <button class="editBtn">Editar</button>
            <button class="deleteBtn">Eliminar</button>
        </td>
    `;

    addPetForm.reset();
    addPetModal.style.display = 'none';
});

appointmentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const appointment = {
        clientNameApp: document.getElementById('clientNameApp').value,
        clientEmail: document.getElementById('clientEmail').value,
        clientPhone: document.getElementById('clientPhone').value,
        petNameApp: document.getElementById('petNameApp').value,
        appointmentDate: document.getElementById('appointmentDate').value,
        appointmentReason: document.getElementById('appointmentReason').value
    };

    const response = await fetch('/add-appointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointment)
    });

    const newAppointment = await response.json();

    const newRow = appointmentsTable.insertRow();
    newRow.innerHTML = `
        <td>${newAppointment.clientNameApp}</td>
        <td>${newAppointment.clientEmail}</td>
        <td>${newAppointment.clientPhone}</td>
        <td>${newAppointment.petNameApp}</td>
        <td>${newAppointment.appointmentDate}</td>
        <td>${newAppointment.appointmentReason}</td>
        <td>
            <button class="editBtn">Editar</button>
            <button class="deleteBtn">Eliminar</button>
        </td>
    `;

    appointmentForm.reset();
});
