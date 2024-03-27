<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap" rel="stylesheet">

    <link rel="shortcut icon" href="IMG/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="mobile.css">
    <title>Table de multiplication</title>
</head>

<body>
    <h1>Table de multiplication</h1>
    <div class="container">
        <form class="formulaire" method="GET" action="">
            <label class="label" for="table">Entrez un nombre :</label>
            <input class="input" type="number" name="table" id="table" required>
            <button type="submit">Générer</button>
        </form>
    </div>

    <?php
    // Vérifie si un paramètre table est présent dans l'URL et s'il est numérique.
    if (!empty($_GET['table']) && is_numeric($_GET['table'])) {
        $table = $_GET['table'];

        // Vérifier si la valeur est positive
        if ($table >= 0) {
            // Afficher l'en-tête de la table
            echo "<h2>Table de multiplication de $table :</h2>";
            echo "<table>";
            echo "<tr><th>$table x</th><th>Résultat</th></tr>";

            // Boucle pour générer les lignes de la table
            for ($i = 1; $i <= 10; $i++) {
                $resultat = $table * $i;
                echo "<tr><td>$table x $i</td><td>$resultat</td></tr>";
            }

            echo "</table>";
        } else {
            // Si la valeur est négative, afficher un message d'erreur
            echo "<p class='center'>Veuillez entrer un nombre POSITIF.</p>";
        }
    } else {
        // Si aucun paramètre valide n'est passé dans l'URL
        if (isset($_GET['table'])) {
            echo "<p class='center' >Veuillez entrer un nombre et non des lettres</p>";
        }
    }
    ?>
</body>

</html>