# Firebase Setup Guide — MAAN AGRO Application Form

The Application Form (`/application-form`) submits each enquiry to a Firestore
collection called **`orders`**. Follow these steps once to make it live.

---

## 1. Create a Firebase project (free Spark plan)

1. Go to https://console.firebase.google.com → **Add project**.
2. Name it (e.g. `maan-agro`), accept defaults, finish.
3. In the project, open **Build → Firestore Database → Create database**.
   - Start in **production mode**.
   - Choose the region nearest to your users (e.g. `asia-south1` for India).

## 2. Register a Web App and copy the config

1. Project Overview → click the **`</>`** (Web) icon → register app
   (nickname: `maan-website`). Skip Hosting.
2. Firebase shows a `firebaseConfig` object like:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "maan-agro.firebaseapp.com",
  projectId: "maan-agro",
  storageBucket: "maan-agro.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123",
};
```

3. Open **`src/lib/firebase.ts`** in this project and replace the placeholder
   values with the ones above. Save.

> These keys are public — they identify the project, they are NOT secrets.
> Real security comes from the Firestore rules in step 3.

## 3. Add Firestore Security Rules

In Firebase Console → **Firestore Database → Rules**, paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Customers can submit a new enquiry, but cannot read/update/delete.
    match /orders/{orderId} {
      allow create: if
        request.resource.data.keys().hasOnly(
          ['name','phone','email','location','product','message','timestamp']
        )
        && request.resource.data.name is string
        && request.resource.data.name.size() >= 2
        && request.resource.data.name.size() <= 100
        && request.resource.data.phone is string
        && request.resource.data.phone.matches('^[0-9+\\-\\s]{7,15}$')
        && request.resource.data.product is string
        && request.resource.data.product.size() > 0;

      // Only authenticated admins (you, signed in via Firebase Console)
      // can read orders. Customers cannot list other people's submissions.
      allow read: if request.auth != null;
      allow update, delete: if false;
    }
  }
}
```

Click **Publish**.

## 4. Test it

1. Run the site (`bun dev` or your usual command).
2. Go to `/application-form`, fill the fields, submit.
3. In Firebase Console → Firestore → `orders`, you should see the new doc.

## 5. (Optional) Email notification on every new order — free

Use the official Firebase Extension **"Trigger Email from Firestore"**:

1. Firebase Console → **Extensions → Browse** → install
   **"Trigger Email from Firestore"** (by Firebase).
2. During setup:
   - **SMTP connection URI**:
     `smtps://YOUR_GMAIL%40gmail.com:APP_PASSWORD@smtp.gmail.com:465`
     (Use a Gmail App Password — generate at
     https://myaccount.google.com/apppasswords)
   - **Email documents collection**: `mail`
   - **Default FROM**: `MAAN AGRO <bhogalcombinemaan913@gmail.com>`
3. Add a tiny Cloud Function (or a second extension instance) that listens to
   `orders/{id}` and writes to `mail/{id}` with:
   ```
   to: "bhogalcombinemaan913@gmail.com"
   message: { subject: "New enquiry from <name>", text: "<all fields>" }
   ```

> Spark (free) plan note: outbound Cloud Functions require the **Blaze**
> (pay-as-you-go) plan, but typical form-volume usage stays inside the free
> tier (no charge for normal traffic). If you want to stay strictly on Spark,
> just check the Firestore console daily — every submission is stored there.

---

## Where the code lives

| File | Purpose |
|------|---------|
| `src/lib/firebase.ts` | Firebase init — paste your config here |
| `src/pages/ApplicationForm.tsx` | Form UI + Firestore submit + validation |

Required field validation, phone-format validation, and the success toast are
already implemented client-side; the rules in step 3 enforce them
server-side too.
