<?php
$host = 'cindysr766.mysql.db';
$dbname = 'cindysr766';
$username = 'cindysr766';
$password = 'FntrAFZiuGz7ene';

try {
    $dbh = new PDO(
        "mysql:host=$host;dbname=$dbname",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
    // Connexion réussie (aucun message affiché publiquement)
} catch (PDOException $e) {
    // En cas d'erreur, afficher un message générique pour les utilisateurs
    echo "Une erreur est survenue. Veuillez réessayer plus tard.";
    // Enregistrer les détails de l'erreur dans les logs pour diagnostic
    error_log("Erreur de connexion à la base de données : " . $e->getMessage());
    die;
}
