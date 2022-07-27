import {notifier} from 'node-notifier'
import path from 'path'
import os from 'os'
import notifySend from 'notify-send'


type Notification = {
  title:string,
  message:string
}

const iconPath = path.join(__dirname, "../img/archLogo.png")

const notify = (notification: Notification) => {
  switch(os.type()){
    case 'Linux':
      notifySend.icon(iconPath)
                .notify(notification.title, notification.message)
      break;
    default:
      notifier.notify({
        title: notification.title,
        message: notification.message,
        icon: iconPath
      })
      break;
  }
}


export type { Notification }
export { notify }
