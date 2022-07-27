import {notifier} from 'node-notifier'
import path from 'path'

type Notification = {
  title:string,
  message:string
}

const notify = (notification: Notification) => {
  notifier.notify({
    title: notification.title,
    message: notification.message,
    icon: path.join(__dirname, "../img/archLogo.png")
  })
}

export type { Notification }
export { notify }
