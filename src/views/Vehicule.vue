<template>

    <div class="vehicles-container">
      <h1>Nos Véhicules de Location</h1>
      <div class="vehicles-list">
        <div class="vehicle-card" v-for="vehicle in vehicles" :key="vehicle.id">
          <h2>{{ vehicle.nom }}</h2>
          <p><strong>Brand :</strong> {{ vehicle.brand }}</p>
          <p><strong>Model :</strong> {{ vehicle.model }}</p>
          <button @click="bookVehicle(vehicle.id)">Réserver</button>
        </div>
      </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      vehicles: []
    };
  },
  mounted() {
    this.fetchVehicles();
  },
  methods: {
    async fetchVehicles() {
      try {
        const response = await axios.get('http://localhost:8084/vehicles');
        this.vehicles = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des véhicules:', error);
      }
    }
  }
};
</script>

<style scoped>
.vehicles-container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.vehicles-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.vehicle-card {
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 20px;
  text-align: left;
  transition: transform 0.2s;
}

.vehicle-card:hover {
  transform: scale(1.05);
}

.vehicle-card h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}

.vehicle-card p {
  margin: 5px 0;
  font-size: 1em;
  color: #555;
}

.vehicle-card button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s;
}

.vehicle-card button:hover {
  background-color: #0056b3;
}
</style>

