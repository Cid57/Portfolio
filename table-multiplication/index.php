<?php
// Initialisation des variables
$totalAddition = $totalMultiplication = $totalSoustraction = $totalDivision = 0;

// Vérifie si les valeurs ont été soumises via le formulaire
if (isset($_GET["nb1"]) && isset($_GET["nb2"]) && isset($_GET["nombre"])) {
    // Récupérer les valeurs et l'opérateur du formulaire
    $nb1 = $_GET["nb1"];
    $nb2 = $_GET["nb2"];
    $operateur = $_GET["nombre"];

    // Évaluer l'opérateur et effectue le calcul
    if (is_numeric($nb1) && is_numeric($nb2)) {
        switch ($operateur) {
            case "+":
                $totalAddition = $nb1 + $nb2;
                break;
            case "-":
                $totalSoustraction = $nb1 - $nb2;

                break;
            case "*":
                $totalMultiplication = $nb1 * $nb2;
                break;
            case "/":
                // Vérifie la division par zéro
                if ($nb2 != 0) {
                    $totalDivision = $nb1 / $nb2;
                } else {
                    echo "Erreur : Division par zéro impossible";
                }
                break;
        }
    } else {
        echo "Erreur : Veuillez saisir un nombre";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Protest+Riot&family=Roboto&display=swap" rel="stylesheet">
    <title>Calculatrice</title>
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        form {
            margin-bottom: 20px;
        }

        input,
        select,
        button {
            margin: 5px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            text-align: center;
        }

        button {
            background-color: #3BF4FB;
            color: black;
            cursor: pointer;
        }

        .result {
            font-size: 18px;
            font-weight: bold;
            margin-top: 10px;
        }

        .error {
            color: red;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <div class="container">
        <!-- Formulaire pour saisir les valeurs et l'opérateur -->
        <form method="get">
            <label for="nombre1">Nombre 1 :</label>
            <input type="number" name="nb1" required>
            <select name="nombre" id="nombre" required>
                <option value="">Choisissez un opérateur</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
            </select>
            <label for="nombre2">Nombre 2 :</label>
            <input type="number" name="nb2" required>
            <button type="submit">Calculer</button>
        </form>
        <?php
        // Affiche le résultat du calcul en fonction de l'opérateur choisi
        if ($totalAddition !== 0) {
            echo "<p>Total (Addition) : $totalAddition</p>";
        } elseif ($totalMultiplication !== 0) {
            echo "<p>Total (Multiplication) : $totalMultiplication</p>";
        } elseif ($totalSoustraction !== 0) {
            echo "<p>Total (Soustraction) : $totalSoustraction</p>";
        } elseif ($totalDivision !== 0) {
            echo "<p>Total (Division) : $totalDivision</p>";
        }
        ?>
    </div>
</body>

</html>