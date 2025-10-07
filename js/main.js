import Controller from "./modules/controller.js";

// Tester le module (test unitaire)
 try {
   console.log('Ça fonctionne');
   const app = new Controller('container','form');
   
   
 } catch (error) {
    console.log(error);
 } finally {
    console.log('Test Terminé');
 }
