import admin from "firebase-admin";

// const firebaseAdminConfig = {
//   type: process.env.FIREBASE_TYPE,
//   project_id: process.env.FIREBASE_PROJECT_ID,
//   private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
//   private_key: process.env.FIREBASE_PRIVATE_KEY,
//   client_email: process.env.FIREBASE_CLIENT_EMAIL,
//   client_id: process.env.FIREBASE_CLIENT_ID,
//   auth_uri: process.env.FIREBASE_AUTH_URI,
//   token_uri: process.env.FIREBASE_TOKEN_URI,
//   auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER,
//   client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT,
//   universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
// };

const firebaseAdminConfig = {
  type: "service_account",
  project_id: "mmchokers-e1895",
  private_key_id: "b77023d9b83fd268e5bbbaf07ca199e664436e30",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCq/R/1MmJYuOwI\nz0OW3bjqohWBA8Qz6JnA0qIvaJNcMjJRs/Ot3KC0zhSs0Z39JLHxIBTpyyWRrUln\nA42UddF7a/AgyqcC8l3v6TT5OszrvFVSCsnA4lwPWgTAkmScuy5p0n4fTX+pi4ij\nriBj76zoHmmD1aWaS3uveyu2pqn9rrf0Pyf1AesY80g0rbvZPbDtuaLmbnmCxElA\nJeR1nX5chvZXByf6UoV1vckWXeUBBxlg/MDrnlPtYzGFZYsVq/+364Hto8yS8R9i\npNFW6F6tfalZsjS7D2Biux/QH1I8IWjdQvXrEHsj4s7XZ128uW9V4fXy/I66oxn0\nW0IX6raPAgMBAAECggEANGlneNjLVYfFbgPeI2nuSxmIvuWhKAolyvmlliOXe9y1\nGN8wk/v7VMCQjNKp+1TaqF8dmfZXmzpDNCzeIoIkxpC059BGdjxFeAsDXlvcQWwW\nuRGuew3HizscFs0owvQLS4umdkDin10ycn2m1ws59GKSFEOSQePeU1FNemzG0YfS\n7tvZ8CcMYvSKa5l+yeIjT5w542O0oSO9KtqkZC5jNcnn2SnJ8al0sTlOefeMkCsU\n3yoKKFJf8eg5E7gd9+nZjiZpHD+mkHuMp+hD7lfCN7uDkDl1kk0SQKaJkdqRhGTt\nEJDe2Opajdr8azMzSMmKxgim64ZYTtza9h4yr97RbQKBgQDX2rLR9zsPohNRJAQb\n/La+tLuhjLXAqIDw2kV9ybTkco8SNjD4WMjK34NZM9MC5EJL1UlQ821qo1X3cuVE\n1iHDmWmSddPB7lOU6odjYG/38kWzjsfBw9rUkmW5XUWtGKVqD79cJKdngAgSQXLJ\nfEc5js/yDnMikYizt3PjS+IQ2wKBgQDKykeA/pyWE0p1aotaevtrmJGdUWr8XsXW\nARB14Hw0mZlqJUNpANyJ52lUuy79G2C7s5btAvWA6L1Ea7q21m030XXLN3+rheU9\ntWgGvPf+9C+aWQuFd07+rO2bZ/WBFmDW1sRJ0WfXSj9LAYdvyTtcXULZbCG+HLBS\n5LjsHcv1XQKBgGMsoWJlBCbPoa5zLMwrFU+TvG2iN9O3195RewIrTch0dhW4/lDs\ngfzsKu4uKHI4q9kputDNt2T6fMH/cSVqeQLklqPrLQr6VD6kbuYS5f72ul2gaVk2\ngnGOfdxn5V59Z2rOp25PjPa51XuFxJacWiEw44vkZbPpR/TCgiVZtRlnAoGALKAy\n+AoPv17jZc9ad0DVDyp18N634m2gr6VwT+BktNaQUjF9EiBkZ9yK62B9yKk7slKl\nBec+y21sKSBj6FRrmHr5pwzBhadjeR7wk3sGQA7QYvDxfh9xPM4lQ6uu9QdNrDl6\n3Ju+dDwcjY76lPj9nSfQzDPlgQajLrqyjxNHjOkCgYAnLnxUH57etQN5rUjtxs46\nQuTRaSHud1OUVpFqwbnf7Y9lFZGAUmertDNADPw92Vr4XW7bD5EYL0g2fmSqSqJP\nhZ8XhbfhgGuUi2rzObhfGswJRrCPJTmcafx0KXOAGsEV/ez6P/tqA3NrFfNi/WnH\nsGUHJ+1wQSYKxz5TtrO8sQ==\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-vmthj@mmchokers-e1895.iam.gserviceaccount.com",
  client_id: "109349402150595243507",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vmthj%40mmchokers-e1895.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(firebaseAdminConfig),
    });
  }
  // console.log("Initialized.");
} catch (error) {
  console.log(error);
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  //   if (!/already exists/u.test(error.message)) {
  //     console.error('Firebase admin initialization error', error.stack)
  //   }
}

export default admin;
