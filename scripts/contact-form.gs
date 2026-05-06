/**
 * Unicorn Studio — Contact form Apps Script web app.
 *
 * Receives JSON POSTs from the website's CTA form and sends the
 * submission to RECIPIENT via Google Workspace.
 *
 * Setup:
 *   1. https://script.google.com  →  New project
 *   2. Paste this file's contents into Code.gs and save.
 *   3. Deploy → New deployment → Type: Web app.
 *   4. Description: "Unicorn Studio contact form"
 *      Execute as: Me (saidur@unicornstudio.io)
 *      Who has access: Anyone
 *   5. Authorize the script (it asks for permission to send email).
 *   6. Copy the Web app URL.
 *   7. Set it as NEXT_PUBLIC_FORM_ENDPOINT in your Vercel project env vars
 *      and redeploy the site.
 *
 * Note: the website POSTs as text/plain to avoid a CORS preflight
 *       (Apps Script web apps don't respond well to OPTIONS). The
 *       body is still JSON and parsed below.
 */

const RECIPIENT = "saidur@unicornstudio.io";

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    // Honeypot anti-spam — real visitors leave this empty
    if (data.botcheck) {
      return jsonResponse({ success: false, error: "Spam detected" });
    }

    const name = (data.name || "").toString().trim();
    const visitorEmail = (data.email || "").toString().trim();
    const service = (data.service || "").toString().trim();
    const budget = (data.budget || "").toString().trim();
    const messageBody = (data.message || "").toString().trim();

    const subject = service
      ? `New inquiry, ${service}${name ? " — " + name : ""}`
      : `New inquiry${name ? " from " + name : ""}`;

    const body = [
      "New contact form submission from unicornstudio.io",
      "",
      "Name: " + (name || "(not provided)"),
      "Email: " + (visitorEmail || "(not provided)"),
      "Service: " + (service || "(not selected)"),
      "Budget: " + (budget || "(not selected)"),
      "",
      "Project notes:",
      messageBody || "(none)",
      "",
      "---",
      "Reply directly to this email; replies go back to the visitor.",
    ].join("\n");

    const mailOptions = { to: RECIPIENT, subject: subject, body: body };
    if (isValidEmail(visitorEmail)) {
      mailOptions.replyTo = visitorEmail;
    }
    MailApp.sendEmail(mailOptions);

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: String(err) });
  }
}

function doGet() {
  return jsonResponse({
    ok: true,
    message: "Unicorn Studio contact form endpoint. POST JSON to submit.",
  });
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function isValidEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s || "");
}
