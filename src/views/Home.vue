<template>
  <div id="home">
    <!-- En-tête -->
    <header class="header">
      <div class="logo">
        <h1>H&L Rent</h1>
      </div>
      <nav class="nav">
        <ul>
          <li><a href="#services">Nos services</a></li>
          <li><a href="#vehicles">Véhicules</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <section class="banner">
      <div class="banner-content">
        <h2>Réservez votre voiture en quelques clics</h2>
        <p>Explorez nos options et trouvez la voiture parfaite pour votre prochain voyage.</p>
        <button @click="navigateToVehicles">Voir nos véhicules</button>
      </div>
    </section>


    <section id="services" class="services">
      <h2>Nos services</h2>
      <div class="service-item">
        <h3>Livraison à domicile</h3>
        <p>Recevez votre voiture où que vous soyez.</p>
      </div>
      <div class="service-item">
        <h3>Assurance complète</h3>
        <p>Conduisez en toute sécurité avec nos options d'assurance.</p>
      </div>
      <div class="service-item">
        <h3>Support 24/7</h3>
        <p>Notre équipe est là pour vous aider à tout moment.</p>
      </div>
    </section>


    <section id="vehicles" class="vehicles">
      <h2>Nos véhicules populaires</h2>
      <div class="vehicle-list">
        <div class="vehicle-card">
          <h3>Utilitaire</h3>
          <p>Idéal pour vos demenagement</p>
          <button>Réservez maintenant</button>
        </div>
        <div class="vehicle-card">
          <h3>Moto</h3>
          <p>Pour des aventures libre</p>
          <button>Réservez maintenant</button>
        </div>
        <div class="vehicle-card">
          <h3>Voiture</h3>
          <p>Confort et élégance sur la route.</p>
          <button>Réservez maintenant</button>
        </div>
      </div>
    </section>
    <section class="cta">
      <h2>Prêt à louer ?</h2>
      <p>Choisissez votre véhicule et commencez votre voyage dès maintenant.</p>
      <button @click="navigateToVehicles">Voir tous les véhicules</button>
    </section>
    <footer id="contact" class="footer">
      <div class="footer-content">
        <p>&copy; 2024 CarRent - Tous droits réservés</p>
        <div class="social-media">
          <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    navigateToVehicles() {
      this.$router.push('/vehicles');
    }
  }
};
</script>

<style scoped>

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}

#home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  width: 100%;
  padding: 20px;
  background-color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.header .logo h1 {
  font-size: 28px;
  font-weight: bold;
font-family: serif;
  color: #d7b47e;
}

.nav ul {
  display: flex;
  list-style: none;
}

.nav ul li {
  margin: 0 15px;
}

.nav ul li a {
  color: #d7b47e;
  text-decoration: none;
  font-size: 18px;
}

.nav ul li a:hover {
  text-decoration: underline;
}


.banner {
  width: 100%;
  height: 90vh;
  background-image: url(src/assets/policerent.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.banner-content h2 {
  font-size: 36px;
  font-weight: bold;
}

.banner-content p {
  font-size: 20px;
  margin: 10px 0;
}

.banner-content button {
  background-color: #d7b47e;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
}

.banner-content button:hover {
  background-color: #d7b47e;
}
.services {
  background-color: #fff;
  padding: 50px 20px;
  text-align: center;
}

.services h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
}

.service-item {
  display: inline-block;
  width: 30%;
  margin: 0 20px;
}

.service-item img {
  width: 50px;
  margin-bottom: 20px;
}

.service-item h3 {
  font-size: 22px;
  color: #2c3e50;
}

.service-item p {
  font-size: 16px;
  color: #7f8c8d;
}

.vehicles {
  background-color: #ecf0f1;
  padding: 50px 20px;
  text-align: center;
}

.vehicles h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
}

.vehicle-list {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.vehicle-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  text-align: center;
}

.vehicle-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.vehicle-card h3 {
  font-size: 22px;
  margin: 15px 0;
}

.vehicle-card p {
  color: #7f8c8d;
  font-size: 16px;
}

.vehicle-card button {
  background-color: #d7b47e;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.vehicle-card button:hover {
  background-color: #d7b47e;
}

.cta {
  background-color: #d7b47e;
  color: white;
  padding: 50px 20px;
  text-align: center;
}

.cta h2 {
  font-size: 36px;
  font-weight: bold;
}

.cta p {
  font-size: 20px;
  margin: 20px 0;
}

.cta button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
}

.cta button:hover {
  background-color: #34495e;
}

/* Pied de page */
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 30px 0;
  width: 100%;
  text-align: center;
}

.social-media a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

.social-media a:hover {
  text-decoration: underline;
}
</style>
