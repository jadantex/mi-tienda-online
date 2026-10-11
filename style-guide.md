/* =========================
   RESET
   ========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* =========================
   BODY
   ========================= */

body {
    font-family: Arial, Helvetica, sans-serif;

    min-height: 100vh;

    background-color: #e0e8ff;
    background-image: url("images/pattern-background-desktop.svg");
    background-repeat: no-repeat;
    background-size: 100% 50%;

    display: flex;
    justify-content: center;
    align-items: center;
}


/* =========================
   CONTENEDOR
   ========================= */

.container {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}


/* =========================
   TARJETA
   ========================= */

.card {
    width: 450px;

    background-color: white;

    border-radius: 20px;

    overflow: hidden;

    box-shadow: 0 20px 40px rgba(56, 41, 224, 0.15);
}


/* =========================
   IMAGEN
   ========================= */

.hero-image {
    width: 100%;
    height: auto;

    display: block;
}


/* =========================
   CONTENIDO
   ========================= */

.content {
    padding: 40px 48px 48px;

    text-align: center;
}


/* =========================
   TITULO
   ========================= */

.content h1 {
    color: #1f2f56;

    font-size: 28px;
    font-weight: 700;

    margin-bottom: 18px;
}


/* =========================
   DESCRIPCIÓN
   ========================= */

.description {
    color: #7280a7;

    font-size: 16px;
    line-height: 1.6;

    margin-bottom: 25px;
}


/* =========================
   PLAN
   ========================= */

.plan {
    width: 100%;

    background-color: #f5f7ff;

    border-radius: 12px;

    padding: 20px;

    display: flex;
    align-items: center;

    margin-bottom: 30px;
}


/* Icono */

.music-icon {
    width: 48px;
    height: 48px;

    margin-right: 18px;
}


/* Información */

.plan-info {
    flex: 1;

    text-align: left;
}

.plan-info h2 {
    color: #1f2f56;

    font-size: 16px;

    margin-bottom: 6px;
}

.plan-info p {
    color: #7280a7;

    font-size: 15px;
}


/* =========================
   CHANGE
   ========================= */

.change {
    color: #3829e0;

    font-size: 14px;
    font-weight: bold;

    transition: 0.2s;
}

.change:hover {
    color: #766cf1;

    text-decoration: none;
}


/* =========================
   BOTÓN
   ========================= */

.payment-button {
    width: 100%;

    border: none;
    border-radius: 10px;

    padding: 16px;

    background-color: #3829e0;

    color: white;

    font-size: 15px;
    font-weight: bold;

    cursor: pointer;

    box-shadow: 0 10px 20px rgba(56, 41, 224, 0.25);

    transition: 0.2s;
}

.payment-button:hover {
    background-color: #766cf1;
}


/* =========================
   CANCELAR
   ========================= */

.cancel {
    display: block;

    margin-top: 28px;

    color: #7280a7;

    font-size: 15px;
    font-weight: bold;

    text-decoration: none;

    transition: 0.2s;
}

.cancel:hover {
    color: #1f2f56;
}