import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

// ============================================================================
// FIREBASE CONFIGURATION — MAAN AGRO
// ----------------------------------------------------------------------------
// These values are PUBLIC — they identify the Firebase project and are safe
// to ship in the frontend bundle. Real security is enforced by the Firestore
// Security Rules (see FIREBASE_SETUP.md).
// ============================================================================
const firebaseConfig = {
  apiKey: "AIzaSyC4Yg6wgi9RMxLPsAhNKCBNRcNzg8cOtXo",
  authDomain: "maan-agro.firebaseapp.com",
  projectId: "maan-agro",
  storageBucket: "maan-agro.firebasestorage.app",
  messagingSenderId: "1078755649292",
  appId: "1:1078755649292:web:d1dfe12b9f3e52080c8b29",
  measurementId: "G-6B7NGDGPEC",
};

const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Analytics is initialized lazily in the browser only (it requires `window`
// and a supported environment), so it never breaks SSR or tests.
if (typeof window !== "undefined") {
  import("firebase/analytics")
    .then(({ getAnalytics, isSupported }) =>
      isSupported().then((ok) => {
        if (ok) getAnalytics(app);
      }),
    )
    .catch(() => {
      /* analytics is optional — ignore failures */
    });
}

export const db: Firestore = getFirestore(app);
export default app;
