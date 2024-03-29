<?php

// Initialisation des variables
$totalAddition = $totalMultiplication = $totalSoustraction = $totalDivision = 0;

// Vérifie si les valeurs ont été soumises via le formulaire
if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["nb1"]) && isset($_GET["nb2"]) && isset($_GET["nombre"])) {
    // Récupérer les valeurs et l'opérateur du formulaire
    $nb1 = $_GET["nb1"];
    $nb2 = $_GET["nb2"];
    $operateur = $_GET["nombre"];

    // Évaluer l'opérateur et effectuer le calcul
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
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Protest+Riot&family=Roboto&display=swap" rel="stylesheet">
    <title>Calculatrice</title>
    <style>
        h1 {
            padding-top: 30px;
            text-align: center;
            color: black;
            font-size: 45px;
            text-shadow: #72a1e5 0.2em 0.2em 0.5em;
        }


        .container {
            font-family: 'Roboto', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            align-items: center;
            height: 300px;
            width: 80%;
            margin: 120px auto;
            height: 100%;
        }

        .container {
            background-color: #ffffff;
            /* padding: 20px; */
            padding: 30px 5px 30px 5px;

            border-radius: 10px;
            box-shadow: 0 0 10px #3BF4FB;
            text-align: center;

        }

        form {

            height: 100%;
        }

        form label {
            font-size: 20px;
            font-weight: bold;
        }

        input,
        select,
        button {

            margin: 5px;
            margin-bottom: 15px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            text-align: center;
        }

        input {
            margin-bottom: 20px;
            margin-top: 20px;
        }

        label {
            margin-bottom: 20px;
        }

        button {
            background-color: #3BF4FB;
            color: black;
            cursor: pointer;
            width: 150px;
            margin: auto;
            margin: 20px;
        }

        .result-container {
            font-size: 30px;
            font-weight: bold;
            margin-top: 10px;
            display: flex;
            flex-direction: column;


        }

        .error {
            color: red;
            margin-top: 10px;
        }
    </style>
</head>


<body>
    <h1>Calculatrice</h1>
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

        <!-- Conteneur pour le résultat -->
        <div class="result-container">
            <!-- Affichage du résultat -->
            <?php
            if ($totalAddition !== 0) {
                echo "<p class='result'>Total (Addition) : $totalAddition</p>";
            } elseif ($totalMultiplication !== 0) {
                echo "<p class='result'>Total (Multiplication) : $totalMultiplication</p>";
            } elseif ($totalSoustraction !== 0) {
                echo "<p class='result'>Total (Soustraction) : $totalSoustraction</p>";
            } elseif ($totalDivision !== 0) {
                echo "<p class='result'>Total (Division) : $totalDivision</p>";
            }
            ?>
        </div>
    </div>
</body>

</html>