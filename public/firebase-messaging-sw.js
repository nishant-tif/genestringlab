// public/firebase-messaging-sw.js
// In firebase-messaging-sw.js - update to newer version
importScripts(
  "https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js"
);
// Firebase config (same as in firebase.js)
const firebaseConfig = {
  apiKey: "AIzaSyC5qxZsvs9nfCD0Huv5sgMSC33gQRTxORw",
  authDomain: "demotesting-438206.firebaseapp.com",
  projectId: "demotesting-438206",
  storageBucket: "demotesting-438206.appspot.com",
  messagingSenderId: "442205090955",
  appId: "1:442205090955:web:706d0d1525a28678c1908e",
  measurementId: "G-5Q7ZSZSS85",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyA0OrBYVy0-QLuYnI4eluygsmK8L-6KL5Y",
//   authDomain: "khabargaon-315bb.firebaseapp.com",
//   projectId: "khabargaon-315bb",
//   storageBucket: "khabargaon-315bb.appspot.com",
//   messagingSenderId: "573432840200",
//   appId: "1:573432840200:web:2176135af4e4ec6bd2d1bd",
//   measurementId: "G-9TR017FRG1",
// };

// Init Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

console.log("[SW] Firebase Messaging active 🚀");

// Handle background push
messaging.onBackgroundMessage((payload) => {
  console.log("[SW] Background message:", payload);

  const { title, body, icon, click_action } = payload.notification || {};

  const notificationTitle = title || "New Notification";
  const notificationOptions = {
    body: body || "You have a new message",
    icon: icon || "/logo.png",
    badge: "/logo.png",
    tag: payload?.notification?.tag || "general-tag", // prevent dupes
    data: {
      clickAction: click_action || payload?.data?.clickAction || "/",
      ...payload.data,
    },
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

// Handle click
self.addEventListener("notificationclick", (event) => {
  console.log("[SW] Notification clicked:", event.notification);

  event.notification.close();
  const clickAction = event.notification.data?.clickAction || "/";

  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((windowClients) => {
        for (const client of windowClients) {
          if (client.url.includes(clickAction) && "focus" in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          const targetUrl = clickAction.startsWith("http")
            ? clickAction
            : `${self.location.origin}${clickAction}`;
          return clients.openWindow(targetUrl);
        }
      })
  );
});
