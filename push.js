// To generate VAPID keys (only once)
// Remove this code once you get keys from console

var push  = require('web-push');

let vapidKeys = {
    publicKey: 'BKM_mLIaRM6WAcaVrJRTTM7QiGBHSZxCtbkNnHKAPQikq8m_jXSiNd5Vv5qMMkSjgnNSqj07QJGX0jLHOx-LqWs',
    privateKey: 'NhHBPmWh1al3QdIdnA3xEgrdt9apECwdad2kF1d_dqg'
  };

  push.setVapidDetails('mailto:mohi8verma@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

  let sub = {
      "endpoint":"https://fcm.googleapis.com/fcm/send/cxfdBmXIvGs:APA91bEyIb1YodZuWIHctSOyMGiWTMvp3EyFHsYmvbS6ppGzNQMPbjfH8jDbwACY50Xro7A-oEE41MrEfvtcbq2TcOHAljSJbv7x-Zq7lV07GyWzSP0uaVnDupOqHhioLQhVNdW_IiPz","expirationTime":null,"keys":{"p256dh":"BBrO_bb8bBd_kZ201MvUVSDWTjLWBm_v0sZ5h-y7_DHdvqJ15LRXSmRJyGHogBBCq7wuaClPzXnmo5LwraRJfXU",
      "auth":"HZErgoekdTBmj3_KGmtAYw"}
  };
  push.sendNotification(sub, 'This is the Test Message');