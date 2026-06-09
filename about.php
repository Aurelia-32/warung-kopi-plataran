<?php
$pageTitle = 'About';
$heroImage = 'images/sambelan-cakalang.jpg';

function e($value)
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= e($pageTitle); ?></title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
        html,
        body {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
            font-family: Arial, Helvetica, sans-serif;
        }

        .about-section {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            width: 100%;
            padding: 60px 20px;
            box-sizing: border-box;
            background-image:
                linear-gradient(rgba(28, 25, 23, 0.75), rgba(28, 25, 23, 0.75)),
                url("<?= e($heroImage); ?>");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            text-align: center;
        }

        .about-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .about-label {
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #fbbf24;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 8px;
            border: 1px solid rgba(251, 191, 36, 0.3);
            padding: 4px 16px;
            border-radius: 50px;
            background-color: rgba(0, 0, 0, 0.2);
            animation: fadeDown 700ms ease-out both;
        }

        .about-year {
            font-family: 'Playfair Display', Georgia, serif;
            font-style: italic;
            font-size: 16px;
            color: #d6d3d1;
            display: block;
            margin-bottom: 20px;
            letter-spacing: 1px;
            animation: fadeUp 800ms ease-out 120ms both;
        }

        .about-title {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: clamp(32px, 6vw, 42px);
            font-weight: 700;
            color: #ffffff;
            line-height: 1.4;
            margin: 0 auto;
            letter-spacing: 0.5px;
            animation: fadeUp 900ms ease-out 220ms both;
        }

        .about-accent {
            width: 60px;
            height: 3px;
            background-color: #fbbf24;
            margin: 24px auto 0;
            transform-origin: center;
            animation: growLine 700ms ease-out 520ms both;
        }

        @media (max-width: 768px) {
            .about-section {
                background-attachment: scroll;
                padding: 48px 18px;
            }
        }

        @keyframes fadeDown {
            from {
                opacity: 0;
                transform: translateY(-12px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(18px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes growLine {
            from {
                transform: scaleX(0);
            }
            to {
                transform: scaleX(1);
            }
        }
    </style>
</head>
<body>
    <section id="about" class="about-section">
        <div class="about-content">
            <span class="about-label">About Us</span>
            <span class="about-year">Sejak 2018</span>

            <h1 class="about-title">Masakan Khas Bojonegoro Resep Keluarga</h1>

            <div class="about-accent" aria-hidden="true"></div>
        </div>
    </section>
</body>
</html>