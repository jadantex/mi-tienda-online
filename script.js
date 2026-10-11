// ========================================
// ELEMENTOS DE LA PÁGINA
// ========================================

const changeButton = document.getElementById("change-button");
const paymentButton = document.getElementById("payment-button");
const cancelButton = document.getElementById("cancel-button");

const planModal = document.getElementById("plan-modal");
const paymentModal = document.getElementById("payment-modal");
const cancelModal = document.getElementById("cancel-modal");
const cancelSuccessModal = document.getElementById("cancel-success-modal");

const selectPlanButton = document.getElementById("select-plan");
const closePlanButton = document.getElementById("close-plan");

const closePaymentButton = document.getElementById("close-payment");

const confirmCancelButton = document.getElementById("confirm-cancel");
const keepOrderButton = document.getElementById("keep-order");
const closeCancelSuccessButton = document.getElementById(
    "close-cancel-success"
);

const planName = document.getElementById("plan-name");
const planPrice = document.getElementById("plan-price");

const paymentPlan = document.getElementById("payment-plan");
const paymentPrice = document.getElementById("payment-price");

const paymentForm = document.getElementById("payment-form");


// ========================================
// FUNCIONES PARA ABRIR Y CERRAR VENTANAS
// ========================================

function abrirVentana(ventana) {
    if (!ventana) return;

    ventana.classList.add("show");
    ventana.setAttribute("aria-hidden", "false");
}

function cerrarVentana(ventana) {
    if (!ventana) return;

    ventana.classList.remove("show");
    ventana.setAttribute("aria-hidden", "true");
}


// ========================================
// CAMBIAR PLAN
// ========================================

changeButton.addEventListener("click", function () {
    abrirVentana(planModal);
});


// ========================================
// SELECCIONAR PLAN
// ========================================

selectPlanButton.addEventListener("click", function () {

    const selectedPlan = document.querySelector(
        'input[name="plan"]:checked'
    );

    if (!selectedPlan) {
        alert("Por favor, selecciona un plan.");
        return;
    }

    if (selectedPlan.value === "annual") {

        planName.textContent = "Plan anual";
        planPrice.textContent = "$59.99/año";

    } else {

        planName.textContent = "Plan mensual";
        planPrice.textContent = "$9.99/mes";

    }

    cerrarVentana(planModal);
});


// ========================================
// CERRAR VENTANA DE SELECCIÓN DE PLAN
// ========================================

closePlanButton.addEventListener("click", function () {
    cerrarVentana(planModal);
});


// ========================================
// PROCEDER AL PAGO
// ========================================

paymentButton.addEventListener("click", function () {

    paymentPlan.textContent = planName.textContent;
    paymentPrice.textContent = planPrice.textContent;

    abrirVentana(paymentModal);
});


// ========================================
// CERRAR VENTANA DE PAGO
// ========================================

closePaymentButton.addEventListener("click", function () {
    cerrarVentana(paymentModal);
});


// ========================================
// SOLICITAR CONFIRMACIÓN DE CANCELACIÓN
// ========================================

cancelButton.addEventListener("click", function () {

    // No se modifica el plan en este momento.
    // Primero se solicita la confirmación del usuario.

    cerrarVentana(planModal);
    cerrarVentana(paymentModal);

    abrirVentana(cancelModal);
});


// ========================================
// CONFIRMAR CANCELACIÓN DEL PEDIDO
// ========================================

confirmCancelButton.addEventListener("click", function () {

    // Restablecer el plan al valor inicial.

    planName.textContent = "Plan anual";
    planPrice.textContent = "$59.99/año";

    // Actualizar el resumen de pago.

    paymentPlan.textContent = "Plan anual";
    paymentPrice.textContent = "$59.99/año";

    // Limpiar el formulario de pago.

    paymentForm.reset();

    // Cerrar la confirmación y mostrar el resultado.

    cerrarVentana(cancelModal);
    cerrarVentana(paymentModal);
    cerrarVentana(planModal);

    abrirVentana(cancelSuccessModal);
});


// ========================================
// CONSERVAR EL PEDIDO
// ========================================

keepOrderButton.addEventListener("click", function () {

    // Se cierra la ventana sin modificar el pedido.

    cerrarVentana(cancelModal);

});


// ========================================
// CERRAR MENSAJE DE CANCELACIÓN
// ========================================

closeCancelSuccessButton.addEventListener("click", function () {

    cerrarVentana(cancelSuccessModal);

});


// ========================================
// PROCESAR PAGO
// ========================================

paymentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("El pago se ha completado correctamente.");

    paymentForm.reset();

    cerrarVentana(paymentModal);

});


// ========================================
// CERRAR VENTANAS AL HACER CLIC FUERA
// ========================================

const ventanasCerrables = [
    planModal,
    paymentModal,
    cancelModal
];

ventanasCerrables.forEach(function (ventana) {

    ventana.addEventListener("click", function (event) {

        // Solo se cierra si el clic ocurre en el fondo
        // y no dentro del contenido de la ventana.

        if (event.target === ventana) {
            cerrarVentana(ventana);
        }

    });

});


// ========================================
// CERRAR VENTANAS CON LA TECLA ESCAPE
// ========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        ventanasCerrables.forEach(function (ventana) {
            cerrarVentana(ventana);
        });

    }

});