/*
  Example Firebase Cloud Function for Stripe checkout confirmation.

  This must run on a trusted server, not in the browser. The Firebase Admin SDK
  bypasses Realtime Database rules, so it can safely add purchasedBooks after
  Stripe verifies the payment event signature.
*/

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Stripe = require("stripe");

admin.initializeApp();

const stripe = new Stripe(functions.config().stripe.secret_key);

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const signature = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      signature,
      functions.config().stripe.webhook_secret
    );
  } catch (error) {
    res.status(400).send(`Webhook signature failed: ${error.message}`);
    return;
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const uid = session.client_reference_id || session.metadata?.uid;
    const bookId = session.metadata?.bookId || session.metadata?.book_id;

    if (uid && bookId && session.payment_status === "paid") {
      await admin.database().ref(`users/${uid}/purchasedBooks/${bookId}`).set({
        bookId,
        stripeSessionId: session.id,
        purchasedAt: admin.database.ServerValue.TIMESTAMP
      });
    }
  }

  res.json({ received: true });
});

