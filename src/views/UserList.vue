<template>
  <div>
    <h1>Liste des Utilisateurs</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Prénom</th>
        <th>Nom</th>
        <th>Date de Naissance</th>
        <th>Numéro de Licence</th>
        <th>Date de Licence</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ formatDate(user.dateOfBirth) }}</td>
        <td>{{ user.numLicense }}</td>
        <td>{{ formatDate(user.dateLicense) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      fetch('http://localhost:8084/users')
          .then(response => response.json())
          .then(data => {
            this.users = data;
          })
          .catch(error => {
            console.error("Erreur lors de la récupération des utilisateurs:", error);
          });
    },
    formatDate(date) {
      const d = new Date(date);
      return d.toLocaleDateString();
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
background: #d7b47e;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  text-align: left;
  background-color: #7994ac;
}
</style>
