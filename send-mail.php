<?php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON input']);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$whatsapp = trim($data['whatsapp'] ?? '');
$message = trim($data['message'] ?? '');
$service = trim($data['service'] ?? '');
$budget = trim($data['budget'] ?? '');
$whatsappCountry = trim($data['whatsappCountry'] ?? '');
$whatsappRule = trim($data['whatsappRule'] ?? '');

function respond($ok, $error = null, $statusCode = 200) {
    if ($statusCode !== 200) {
        http_response_code($statusCode);
    }
    echo json_encode(array_filter(['ok' => $ok, 'error' => $error]));
    exit;
}

if (!$name) {
    respond(false, 'Name is required', 400);
}

if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Invalid email address', 400);
}

if (!$whatsapp) {
    respond(false, 'WhatsApp number is required', 400);
}

if (!$service) {
    respond(false, 'Service selection is required', 400);
}

if (!$budget) {
    respond(false, 'Budget selection is required', 400);
}

if (!$message) {
    respond(false, 'Message is required', 400);
}

$recipient = 'contact@doctor-utpol.com';
$subject = 'New appointment request from ' . $name;
$body = "Name: {$name}\n"
       . "Email: {$email}\n"
       . "WhatsApp: {$whatsapp}\n"
       . "Country: {$whatsappCountry} ({$whatsappRule})\n"
       . "Service: {$service}\n"
       . "Visit preference: {$budget}\n\n"
       . "Message:\n{$message}\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: Dr. Utpol Website <noreply@doctor-utpol.com>';
$headers[] = "Reply-To: {$name} <{$email}>";

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    respond(false, 'Unable to send mail', 500);
}

respond(true);
